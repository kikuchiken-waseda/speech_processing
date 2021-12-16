================================================================
前提となる数学知識や記号
================================================================

.. contents:: 目次

論理
================================================================
かつ: :math:`\land`

または: :math:`\lor`

:math:`A := B` としたら :math:`A` を :math:`B` で定義する。
また、集合 :math:`\{x\in S|x\text{は条件}P\text{を満たす}\}` に名前をつけることを、
:math:`A:=\{x\in S|x\text{は条件}P\text{を満たす}\}` で表す。

量化
================================================================

全称量化子: :math:`\forall`

存在量化子: :math:`\exists`

全ての :math:`x` が条件 :math:`P` を満たす(:math:`\text{For all }x,P` )ことを

.. math::
    \forall x : P

で表す。

:math:`P` を満たす :math:`x` が存在する(:math:`\text{There exists }x\text{ such that }P` )ことを

.. math::
    \exists x : P

で表す。

他にも色々示し方があるので注意するように。

https://ja.wikipedia.org/wiki/%E9%87%8F%E5%8C%96

集合
================================================================
集合とは「ある特定の性質を備えたものの集まり」のことである。集合に含まれる1つ1つの「もの」を、その集合の要素または元という。
:math:`a` が集合 :math:`A` の元であることを

.. math::
    a\in A

で表し、 :math:`a` は :math:`A` に属するという。逆に :math:`a` は :math:`A` に属さないことは

.. math::
    a\notin A

のように表す。

集合は :math:`\{2,5,7\}` のように、属する元を全て書き並べたり、
:math:`\{x|x\text{は条件}P\text{を満たす}\}` のようにある条件を満たす元全体として定めることが多い。

集合 :math:`A` の元のうち、条件 :math:`P` を満たす元全体の集合を


.. math::
    \{x|x\in A,x\text{は条件}P\text{を満たす}\}

または

.. math::
    \{x\in A|x\text{は条件}P\text{を満たす}\}

で表す。

要素を一つも含まない集合を空集合といい、 :math:`\emptyset` で表す。

元を有限個しか含まない集合および空集合を有限集合といい、そうでない集合を無限集合と呼ぶ。

二つの集合 :math:`A,B` について、 :math:`\forall a\in A:a\in B` のとき、
:math:`A` は :math:`B` の部分集合であるといい、 :math:`A\subset B` で表す。
この場合、 :math:`A` は :math:`B` に包まれる、または :math:`B` は :math:`A` を包むという。
:math:`A\subset B` でないことを :math:`A\not\subset B` で表す。

:math:`A\subset B \land A\ne B` のとき、 :math:`A` は :math:`B` の真部分集合であるといい、 :math:`A\subsetneq B` で表す。

二つの集合 :math:`A,B` について、

.. math::
    A\cup B = \{x|x\in A \lor x\in B\}

を :math:`A` と :math:`B` の和集合といい、

.. math::
    A\cap B = \{x|x\in A \land x\in B\}

を :math:`A` と :math:`B` の共通部分といい、

.. math::
    A\setminus B = \{x|x\in A \land x\notin B\}

を :math:`A` と :math:`B` の差集合という。

議論している対象の要素全体の集合を全体集合または不偏集合といい、
:math:`U` を全体集合、 :math:`A\subset U` とするとき

.. math::
    A^c = \{x\in U |x\notin A\}

数の集合
-----------------------------------------------------------------------------
1. :math:`\mathbb{C}` :複素数全体
2. :math:`\mathbb{R}` :実数全体
3. :math:`\mathbb{Q}` :有理数全体
4. :math:`\mathbb{Z}` :整数全体
5. :math:`\mathbb{N}` :自然数全体
   
で表す。

写像
=============================================================================
集合 :math:`A,B` に対し、 :math:`A` のすべての元に対して :math:`B` の元が唯一定まる時、その対応を写像と呼ぶ。

:math:`f:A\to B` で、 :math:`f` が :math:`A` から :math:`B` への写像であることを表す。
:math:`f:a\mapsto b` で、 写像 :math:`f` によって :math:`a\in A` が :math:`b\in B` に移ることを表す。

.. math::
    \forall a\in A, \exists !b \in B : b=f(a)

:math:`A` を :math:`f` の始域、 :math:`B` を :math:`f` の終域という。また :math:`b` を :math:`f` による :math:`a` の像といい、
:math:`a` を :math:`f` による :math:`b` の原像という。

全射は :math:`\forall b\in B,\exists a\in A:b=a`

単射は :math:`\forall a_1,a_2\in A:(b_1=b_2\Rightarrow a_1=a_2)`

後で付け足す。

関数
=============================================================================
:math:`X=\{x\in\mathbb{R}|X\ne\emptyset\}` とする。

写像 :math:`f:X\to \mathbb{R}` を関数と言う。

このとき、 :math:`x\in X` について :math:`f:x\mapsto y` を満たす :math:`y\in\mathbb{R}` を :math:`y=f(x)` と表す。 
:math:`X` を :math:`f` の定義域、 :math:`f(X)=\{f(x)|x\in X\}` を :math:`f` の値域という。

関数を :math:`y=f(x)` と表したとき、 :math:`x` を :math:`f` の独立変数、 :math:`y` を :math:`f` の従属変数という。

値域 :math:`f(X)` の最大値、最小値が存在するとき、それらを関数 :math:`f` の最大値、最小値という。

絶対値
=============================================================================
:math:`x\in\mathbb{R}` の絶対値 :math:`|x|` を次のように定める。

.. math::
    |x| :=
    \begin{cases}
        x \:\;\;\;\;\text{if  }x\geq0

        -x \;\;\text{if  }x<0
    \end{cases}

ガウス記号
=============================================================================
:math:`x\in\mathbb{R}` に対し、

.. math::
    [x] := \text{max}\{n\in\mathbb{Z}|n\leq x\}

の :math:`[\,\cdot\,]` をガウス記号という。