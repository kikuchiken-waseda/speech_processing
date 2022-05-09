=============================================
集合と位相
=============================================

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


二つの集合 :math:`A,B` について、 :math:`\forall a\in A:a\in B` のとき、
:math:`A` は :math:`B` の部分集合であるといい、 :math:`A\subset B` で表す。
この場合、 :math:`A` は :math:`B` に包まれる、または :math:`B` は :math:`A` を包むという。
:math:`A\subset B` でないことを :math:`A\not\subset B` で表す。

:math:`A\subset B \land A\ne B` のとき、 :math:`A` は :math:`B` の真部分集合であるといい、 :math:`A\subsetneq B` で表す。

議論している対象の要素全体の集合を全体集合または不偏集合という。
全体集合を :math:`U`で表す時、議論の対象となる集合 :math:`A` を任意に選ぶと

.. math::
    A\subset U \Leftrightarrow \forall x\in A : x\in U

が成り立つ。


要素を一つも含まない集合を空集合といい、 :math:`\emptyset` で表す。

全体集合が :math:`U` であるとき、空集合は内包的に

.. math::
    \emptyset = \{x\in U \mid x \neq x\}

と表すことができる。

元を有限個しか含まない集合および空集合を有限集合といい、そうでない集合を無限集合と呼ぶ。


ラッセルのパラドクスと公理主義的集合論
-----------------------------------------------------------------------------
そのうちかく

集合演算
-----------------------------------------------------------------------------
集合論では集合を被演算子と呼ばれる演算を定義する。集合演算で使われる被演算子は :math:`c,\cup,\cap,\setminus,\Delta` などであり、これらを集合演算子と呼ぶ。
ここから特に断らない限り :math:`U` を全体集合、 二つの集合 :math:`A,B` について :math:`A\subset U,B\subset U` とする。

.. math::
    A^c = \{x\in U \mid x\notin A\}

を :math:`A` の補集合という。

.. math::
    A\cup B = \{x\in U \mid x\in A \lor x\in B\}

を :math:`A` と :math:`B` の和集合といい、

.. math::
    A\cap B = \{x\in U \mid x\in A \land x\in B\}

を :math:`A` と :math:`B` の共通部分といい、

.. math::
    A\setminus B = \{x\in U \mid x\in A \land x\notin B\}

を :math:`A` と :math:`B` の差集合という。

.. math::
    A\Delta B = (A\setminus B)\cup (B\setminus A)

を :math:`A` と :math:`B` の対称差という。

集合変形
-----------------------------------------------------------------------------


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

合成写像


集合系
================================================================
