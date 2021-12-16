================================================================
論理学
================================================================

https://abelard.flet.keio.ac.jp/person/mitsu/pdf/nyumon_logic.pdf

https://fuchino.ddo.jp/kobe/predicate-logic-ss11.pdf

https://wiis.info/math/logic/propositional-logic/

命題論理
================================================================

命題論理の形式言語のボキャブラリー
----------------------------------------------------------------
命題論理の形式言語のボキャブラリーは、論理記号、命題変項、命題定項の3つからなる。
命題変項及び命題定項は単文を表し、論理記号は文と文をつなぐ接続詞の役割を果たすことが後に示される。

* 命題定項: true, false
* 命題変項: P, Q, R, ...
* 論理記号: and, or, not, if...then..., if and only if

1. and :math:`\land`
2. or :math:`\lor`
3. not :math:`\lnot`
4. if...then... :math:`\rightarrow`
5. if and only if :math:`\leftrightarrow`
6. true :math:`\top`
7. false :math:`\bot` 

命題論理における論理式(文法)
----------------------------------------------------------------
1. 命題変項は論理式である。
2. 命題定項は論理式である。
3. もし、 :math:`A` が論理式であるならば、 :math:`(\lnot A)` も論理式である。
4. もし、 :math:`A,B` がともに論理式であるならば、 :math:`(A\land B),(A\lor B),(A\rightarrow B),(A\leftrightarrow B)` は、それぞれ論理式である。
5. 以上で論理式とわかるものだけを論理式とする。

論理式の解釈
----------------------------------------------------------------


論理式の真理値
----------------------------------------------------------------
1. 命題定項 :math:`\top` は、trueという真理値を常に持つ。
2. 命題定項 :math:`\bot` は、falseという真理値を常に持つ。
3. 命題変項 :math:`P` は、trueおよびfalseを値として取り得る変項である。
4. 論理式 :math:`A\land B` がtrueであるのは、 :math:`A` がtrue かつ :math:`B` がtrueである時に限る。
5. 論理式 :math:`A\lor B` がtrueであるのは、 :math:`A` がtrue または :math:`B` がtrueである時に限る。
6. 論理式 :math: `\lnot A` がtrueであるのは、 :math:`A` がfalseである時に限る。
7. 論理式 :math:`A\rightarrow B` がtrueであるのは、 :math:`A` がtrueであれば :math:`B` がtrueであること、すなわち、 :math:`A` がfalseであるか :math:`B` がtrueとなることである。
8. 論理式 :math:`A\leftrightarrow B` がtrueであるのは、 :math:`A` と :math:`B` が同じ真理値を取るときに限る。

トートロジー
----------------------------------------------------------------
全ての命題変項の可能な真理値に対して、常にtrueとなるような論理式はトートロジーと呼ばれる。



命題論理における推論規則
----------------------------------------------------------------
推論とは、前提に相当する有限個の論理式 :math:`A_1,\cdots,A_n` がすべて真であるような任意の解釈において、結論に相当する論理式 :math:`B` が必ず真になるという主張であり、これを

.. math::
    A_1,\cdots,A_n \therefore B

と表し、推論式と呼ぶ。

前提を持たず結論 :math:`B` だけを持つ推論式を

.. math::
    \therefore B

と記述し、これは論理式 :math:`B` がトートロジーであるという主張を表す。


前提 :math:`A_1,\cdots,A_n` がすべて真であるような任意の解釈において、結論 :math:`B` が必ず真であることが保証される場合、その推論は妥当であるといい、

.. math::
    A_1,\cdots,A_n \vDash B

と表し、これを推論規則という。

前提を持たず結論 :math:`B` だけを持つ推論が妥当であることを、

.. math::
    \vDash B

と記述し、これは論理式 :math:`B` がトートロジーであることを意味する。

証明
----------------------------------------------------------------


命題論理の自然演繹体系
----------------------------------------------------------------
書くか迷いどころ

証明構造とは、次のような構造のことと定義する。

0. 公理: 任意の論理式 :math:`A` はそれ自体が :math:`A` の証明構造である。このとき論理式 :math:`A` 自体がこの証明構造の開いた前提であると言われる。つまり、この1つの論理式だけから成る証明構造の開いた前提の集合は、この論理式 :math:`A` だけから成る一元集合 (1つの元のみからなる集合) である。
1. :math:`\land - \mathrm{I}` : 次のような :math:`A` の証明構造 :math:`P_1` と :math:`B` の証明構造 :math:`P_2` が与えられているとする。ここで :math:`C_1\cdots C_n` は :math:`A` の証明構造 :math:`P_1` に現れる開いた前提の集合とし、 :math:`D_1\cdots D_n` は :math:`B` の証明構造 :math:`P_2` に現れる開いた前提の集合とする。

.. math::

    P_1
    \left\{
        \begin{prooftree}
            \AxiomC{$C_1\cdots C_n$} \noLine
            \UnaryInfC{$\strut \vdots$} \noLine
            \UnaryInfC{$A$} 
        \end{prooftree}
    \right.

.. math::
    P_2
    \left\{
        \begin{prooftree}
            \AxiomC{$D_1\cdots D_n$} \noLine
            \UnaryInfC{$\strut \vdots$} \noLine
            \UnaryInfC{$B$} 
        \end{prooftree}
    \right.

.. math::
    P
    \left\{
        \begin{prooftree}
            \AxiomC{$C_1\cdots C_n$}\noLine
                \UnaryInfC{$\strut \vdots$}\noLine
                    \UnaryInfC{$A$} 
            \AxiomC{$D_1\cdots D_n$}\noLine
                \UnaryInfC{$\strut \vdots$}\noLine
                    \UnaryInfC{$B$} 
            \RightLabel{$\scriptsize{\land - \mathrm{I}}$}
            \BinaryInfC{$A\land B$}
        \end{prooftree}
    \right.



述語論理(一階述語論理)
================================================================
