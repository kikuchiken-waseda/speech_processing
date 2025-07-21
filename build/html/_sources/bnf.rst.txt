=======================================================================
BNF (Backus-Naur Form)とその拡張
=======================================================================


概要
=======================================================================

BNFは形式文法の一種であり、文法規則を明示的に記述するための文脈自由文法。コンパイラや構文解析器において、プログラミング言語やデータ構造の構文を定義するために用いられる。
EBNFはBNFの拡張であり、より表現力豊かな構文を提供する。BNFとEBNFは、言語の文法を定義するための標準的な方法として広く利用されている。

またこれらは構文定義のメタ言語であることに注意が必要であり、記述時にはメタ言語であることを意識する必要がある。


1. 形式文法とは
=======================================================================
形式文法(Formal Grammar)は、文字列の集合（言語）を生成するための規則集合。形式的構文解析に用いられる。

形式文法は以下の4つの要素からなる4-tupleで定義される：

.. math::
   G = (N, \Sigma, P, S)

ここで：

- :math:`N` は非終端記号の有限集合
- :math:`\Sigma` は終端記号の有限集合( :math:`N` と互いに素)
- :math:`P` は生成規則の有限集合
- :math:`S\in N` は開始記号

1. BNFの基本構文
=======================================================================

BNFは以下の基本構文要素から成り立つ：

- **非終端記号** （Non-terminal symbols）：文法の構成要素を表す記号。通常、角括弧 ``<>`` で囲まれる。
- **終端記号** （Terminal symbols）：文法の具体的な値や文字列を表す記号。本来のBNFでは、文字列がそのまま記述されるものであるが、引用符 ``"`` で囲まれることが多い。
- **生成記号** （Production symbol）： ``::=``
- **選択** （Choice symbol）： ``|``

ここで、例として(上記ルールの記述も含めて)BNFの生成規則集合を自己記述によって示す。

.. code-block:: bnf

    <syntax>       ::= <rule> | <rule> <syntax>
    <rule>         ::= <lhs> "::=" <rhs>
    <lhs>          ::= <nonterminal>
    <rhs>          ::= <expression>
    <expression>   ::= <term> | <term> "|" <expression>
    <term>         ::= <factor> | <factor> <term>
    <factor>       ::= <nonterminal> | <terminal>
    <nonterminal>  ::= "<" <identifier> ">"
    <terminal>     ::= '"' <characters> '"'
    <identifier>   ::= <letter> | <letter> <identifier>
    <letter>       ::= "A" | "B" | ... | "Z" | "a" | ... | "z"
    <characters>   ::= <character> | <character> <characters>
    <character>    ::= 任意の文字（`"` を除く）

2. 拡張 BNF (EBNF)
=======================================================================

EBNFはBNFの拡張であり、以下のような追加機能を提供する：

- **繰り返し** （Repetition）： ``{}`` で囲むことで、0回以上の繰り返しを表現できる。
- **オプショナル** （Optional）： ``[]`` で囲むことで、0回または1回の出現を表現できる。
- **グループ化** （Grouping）： ``()`` で囲むことで、複数の要素を1つの単位として扱うことができる。
- **文末の区切り** （End of line）： ``;`` を使用して、各生成規則の終わりを明示する。
- **定義の省略**： ``::=`` の代わりに ``=``, ``:=`` などを使用することができる。

これらの拡張により、EBNFはより簡潔で読みやすい文法定義を可能にする。
以下にISO 14977:1996に基づくEBNFの自己定義を示す。

.. code-block:: ebnf
    
    syntax       = { rule } ;
    rule         = identifier "=" expression ";" ;
    expression   = term { "|" term } ;
    term         = factor { factor } ;
    factor       = identifier
                 | literal
                 | "[" expression "]"
                 | "{" expression "}"
                 | "(" expression ")" ;

    identifier   = letter { letter | digit } ;
    literal      = '"' character { character } '"' ;
    
    letter       = "A" | ... | "Z" | "a" | ... | "z" ;
    digit        = "0" | ... | "9" ;
    character    = 任意の文字（`"` と改行を除く） ;


W3C(World Wide Web Consortium)によるEBNF
=======================================================================

W3C（World Wide Web Consortium）は、Web技術の標準化を行う国際的な組織であり、XMLやHTMLなどの文法を定義するために
独自の拡張BNF（EBNF）記法を採用している。

W3C EBNFの記法には以下の記号が導入されている：

- ``=``    ：定義（定義記号）
- ``|``    ：選択（alternation）
- ``?``    ：0回または1回の出現（optional）
- ``*``    ：0回以上の繰り返し（Kleene star）
- ``+``    ：1回以上の繰り返し（Kleene plus）
- ``"`` または ``'``：リテラル（終端記号）
- ``;``    ：文末の明示

追加的に、以下の構文が仕様に応じて導入される：

- **文字クラス表現**：正規表現風の ``[a-zA-Z0-9]`` などが使用される
- **コメント構文**：多くの仕様で ``/* コメント */`` が許容されている

これらにより、W3C EBNFは柔軟かつ人間可読性の高い構文定義を可能としている。


以下に、W3C EBNF自身の構文をW3C EBNFで定義する「自己記述文法（self-describing grammar）」を示す。

.. code-block:: text

    grammar      = rule* ;
    rule         = identifier "=" expression ";" ;
    expression   = term ( "|" term )* ;
    term         = factor+ ;
    factor       = identifier
                 | literal
                 | "[" expression "]"
                 | "{" expression "}"
                 | "(" expression ")" ;

    identifier   = letter ( letter | digit | "_" | "-" )* ;
    literal      = '"' character* '"' | "'" character* "'" ;

    letter       = [a-zA-Z] ;
    digit        = [0-9] ;
    character    = [\u0020-\u007E] - ['"\n\r] ;

**補足**

- ``identifier`` では英字・数字・アンダースコア・ハイフンが許容される。
- ``character`` はASCIIの印字可能文字から、クォートおよび改行文字を除いたものを意味する。
