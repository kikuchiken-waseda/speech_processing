================================================================
前提となる数学知識や記号
================================================================

.. contents:: 目次

論理
================================================================
かつ: :math:`\land`

または: :math:`\lor``

:math:`A := B` としたら :math:`A` を :math:`B` で定義する。


量化
=================================

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