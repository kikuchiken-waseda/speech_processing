===============
確率
===============

https://wiis.info/math/probability/probability/sample-space-and-events/

標本空間と事象
====================

試行
--------------------
結果が前もって完全に予測できない状況を **ランダムネス(randomness)** と呼ぶ。

コイン投げのように、起こり得るすべての結果は分かっていても、その中のどの結果が実際に起こるかはランダムネスによって支配されているような実験や観察を **試行(trial)** と呼ぶ。

ある試行のもとである現象が起こる **確率(probability)** というとき、その日常的な意味は、現象の起こりやすさを数字で表現したものである。しかし確率とは厳密にはどのように定義されるのか。試行において現象が起こる確率を正確に評価するためには、確率の概念を定義する必要がある。ただ、確率の定義について述べる前に、まずは確率の測定対象となる現象を定式化をおこなう。

標本空間
---------------------
与えらえた試行において起こり得る個々の結果を **標本点(sample point)** と呼び、試行において起こり得るすべての標本点からなる集合を **標本空間(sample space)** と呼ばれる集合として定式化する。

多くの場合、標本空間を :math:`\Omega` で表し、標本空間に属する個々の標本点を :math:`\omega` で表す。

事象
---------------------
試行によって起こりうる様々な現象を標本空間の部分集合と同一視し、それを **事象(event)** と呼ぶ。
問題としている現象 :math:`X` に相当する現象が :math:`A\subset \Omega` であることとは、任意の :math:`\omega\in\Omega` について、

.. math::
   X\text{が起こる}\Leftrightarrow\omega\in A

という関係が成り立つ。その上で、上の関係を満たす現象 :math:`X` と事象 :math:`A` を同一視する。

根元事象
"""標本点 :math:`\omega\in\Omega` に対して、それのみから構成される1点集合 :math:`{\omega}`"""

部分事象
========================
標本空間 :math:`\Omega` が与えられたとき、2つの事象 :math:`A,B \subset \Omega` において

.. math::
   A\subset B

が成り立つ場合、 :math:`A` を :math:`B` の **部分事象(sub event)** と呼ぶ。

また、部分集合の定義より、:math:`A` が :math:`B` の部分事象である場合には、

.. math::
   \forall\omega\in\Omega :(\omega\in A \Rightarrow \omega\in B)

が成り立つ。

等しい事象
========================

等しい事象
------------------------
.. math::
   A = B

真部分事象
------------------------
.. math::
   A\subset B \land A \neq B

全事象
==========================
標本空間を事象とみなす

.. math::
   \Omega\subset\Omega

空事象
==========================

余事象
==========================

積事象
==========================

和事象
==========================

差事象
==========================

対象差事象
==========================

古典的確率解釈
==========================
飛ばす

公理主義的確率
==========================
標本空間 :math:`\Omega` について、確率の測定対象となる事象を全て集めてできる :math:`\Omega` の部分集合族、 :math:`\mathcal{F}` を **事象空間(event space)** と呼ぶ。

確率空間の定義
--------------------------
標本空間 :math:`\Omega` が一般の集合である場合、その部分集合族である事象空間 :math:`\mathcal{F}\subset 2^\Omega` は、

.. math::
   \mathcal{F} \neq \phi \\
   \forall A \in \mathcal{F} : A^c \in \mathcal{F}

を満たすとともに、 :math:`\mathcal{F}` の任意の加算部分集合族 :math:`\{A_n\}_{n\in\mathbb{N}}` について、

.. math::
   \bigcup_{n\in\mathbb{N}}A_n \in\mathcal{F}

が成り立つものと定める。以上の性質を **可測空間の公理(axioms of measurable space)** と呼び、これを満たす :math:`(\Omega,\mathcal{F})` を **可測空間(measurable space)** と呼ぶ。

加えて、集合関数 :math:`P:\mathcal{F}\rightarrow\mathbb{R}` は、

.. math::
   \forall A \in\mathcal{F}:P(A)\geq 0 \\
   P(\Omega) = 1

を満たすとともに :math:`\mathcal{F}` の任意の排反な加算部分集合族 :math:`\{A_n\}_{n\in\mathbb{N}}` について、

.. math::
   P\left( \bigcup_{n\in\mathbb{N}}A_n\right) = \sum_{n\in\mathbb{N}} P(A_n)

が成り立つものと定める。以上の性質を **確率論の公理(axioms of probability)** と呼び、これを満たす :math:`P` を **確率測度(probability measure)** や **確率関数(probability function)** と呼ぶ。また、可測事象 :math:`A\in\mathcal{F}` に対して定める値 :math:`P(A)\in\mathbb{R}` を :math:`A` の **確率(probability)** や **測度(measure)** などと呼ぶ。 さらに、可測空間と確率測度の組 :math:`(\Omega,\mathcal{F},P)` を **確率空間(probability space)** や **測度空間(measure space)** と呼ぶ。

なんかいろいろ書いてある
=================================
