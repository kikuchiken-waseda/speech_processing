=======================================================
型付きラムダ計算（Simply Typed Lambda Calculus, STLC）
=======================================================

1. 概要
======
型付きラムダ計算は、型無しラムダ計算に「型」の概念を導入した体系である。  
主な目的は、 **意味のない関数適用（例：数値に真偽値を適用）を構文レベルで排除** し、 **プログラムの安全性を保証** することにある。

最も基本的な型付きラムダ計算は、 **単純型付きラムダ計算（Simply Typed Lambda Calculus, STLC）** と呼ばれ、次の要素から構成される。

2. 型（Types）
=============
型 :math:`T` は、以下のように定義される。

.. math::

   T ::= \tau \mid T \rightarrow T

ここで:

- :math:`\tau` は基本型（例：:math:`\text{Bool}`, :math:`\text{Nat}` など）
- :math:`T \rightarrow T` は関数型（引数が :math:`T_1`、戻り値が :math:`T_2`）

3. 項の構文（Terms）
==================
項 :math:`t` は次のように構成される。

.. code-block:: bnf

   t ::= x
       | \lambda x:T. t
       | t t

- :math:`x` は変数
- :math:`\lambda x:T. t` は、型注釈付きのラムダ抽象
- :math:`t_1 \; t_2` は、関数適用

4. 文脈（Context）
================
文脈（または型環境） :math:`\Gamma` は、変数に型を対応させる有限写像である。

.. math::

   \Gamma ::= \emptyset \mid \Gamma, x : T

この :math:`\Gamma` は、「どの変数がどの型を持つか」を記録する前提条件であり、  
すべての型付け判断 :math:`\Gamma \vdash t : T` において必要となる。

型無しラムダ計算では文脈は不要だったが、型付きでは変数使用に明確な型を与える必要があるため、文脈が導入される。

5. 型付け規則（Typing Rules）
===========================
型付け判断 :math:`\Gamma \vdash t : T` は、「文脈 :math:`\Gamma` の下で項 :math:`t` が型 :math:`T` を持つ」という意味である。  
この判断は以下の導出規則によって定義される。

- **変数規則（Var）**

  .. math::

     \frac{x : T \in \Gamma}{\Gamma \vdash x : T}

- **抽象規則（Abs）**

  .. math::

     \frac{\Gamma, x : T_1 \vdash t : T_2}{\Gamma \vdash \lambda x:T_1. t : T_1 \rightarrow T_2}

- **適用規則（App）**

  .. math::

     \frac{\Gamma \vdash t_1 : T_1 \rightarrow T_2 \quad \Gamma \vdash t_2 : T_1}{\Gamma \vdash t_1 \; t_2 : T_2}

6. 評価規則（Operational Semantics）
==================================
評価は型無しラムダ計算と同様、 **β簡約** によって定義される。

- **β簡約**

  .. math::

     (\lambda x:T. t_1) \; t_2 \rightarrow t_1[x := t_2]

ここで :math:`[x := t_2]` は、構文的代入（substitution）を意味する。

評価戦略としては、以下の2つが代表的である：

- **正規順（call-by-name）**：外側から簡約し、必要なときに引数を評価する
- **値呼び（call-by-value）**：引数を先に評価してから関数に適用する

7. 型安全性（Type Safety）
==========================

型付きラムダ計算における中心的性質の一つが **型安全性（type safety）** である。

これは直感的に言えば、「**型が正しく付けられたプログラムは、実行中に型エラーを起こさない**」という性質であり、  
形式的には **進行（progress）** と **保存（preservation）** の2つの補題により定式化される。

7.1 型安全性の構成要素
------------------------

型安全性は、以下の2つの命題の組として定義される：

- **進行（Progress）補題**

  実行中に行き詰まらないことを保証する。

  .. math::

     \text{If } \emptyset \vdash t : T, \text{ then either } t \text{ is a value, or there exists } t' \text{ such that } t \rightarrow t'

- **保存（Preservation）補題**

  評価によって型が変わらないことを保証する。

  .. math::

     \text{If } \Gamma \vdash t : T \text{ and } t \rightarrow t', \text{ then } \Gamma \vdash t' : T

この2つを合わせて、「型が正しければ、評価によって型エラーや未定義状態には到達しない」ことを意味する。

7.2 証明の構造（スケッチ）
----------------------------

- **進行** は、型付け済みの項 :math:`t` が **値（value）であるか** 、あるいは **簡約可能（stepが存在）** であることを示す。
  証明は :math:`t` の構文に対する帰納法で行われる。

- **保存** は、:math:`t \rightarrow t'` の評価ステップに対し、:math:`\Gamma \vdash t : T` ならば :math:`\Gamma \vdash t' : T` が成立することを示す。
  証明は評価規則（β簡約など）に対する帰納法と、型付け規則に対する帰納法の組み合わせで行う。

7.3 例：型安全でないコードの排除
---------------------------------

型無しラムダ計算では、以下のような項も構文的に正しい：

.. math::

   (\lambda x. x + \text{true}) \; 5

この項は、:math:`x` に数値が代入された後、:math:`x + \text{true}` のような意味的に不正な式を評価しようとする。  
しかし、型付きラムダ計算では：

- :math:`+` は :math:`\text{Nat} \rightarrow \text{Nat} \rightarrow \text{Nat}`
- :math:`\text{true}` は :math:`\text{Bool}`

であるため、型付け段階で型不一致と判断され、**文法的に拒否される**。

7.4 意義と位置づけ
---------------------

型安全性は、型付きラムダ計算のもっとも基本的な健全性条件であり：

- **プログラム実行時にエラーを起こさない保証**
- **型システムの設計が妥当であることの形式的根拠**
- **証明支援系やプログラミング言語実装の理論的基盤**

を与える。これにより、ラムダ計算は単なる理論ではなく、 **安全な計算体系** としてソフトウェアの形式的基盤を提供することになる。