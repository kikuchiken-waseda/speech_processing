===============================
Generative adversarial network
===============================

https://www.bigdata-navi.com/aidrops/2519/

https://dreamer-uma.com/gan-theory/

疑問
==================
.. math::
	\mathbb{E}_{x\sim p(x)}[\ln D(x;\phi)]

	\underset{x\sim p}{\mathbb{E}}[\ln D(x;\phi)]

	\mathbb{E}_{p(x)}[\ln D(x;\phi)]

全部一緒っぽい


導出
==================
確率変数 :math:`x` に対し、データ分布を :math:`p_d(x)` 、モデル分布を :math:`p_g(x)` で表す。

分布 :math:`p_d(x)` は分布の形が明示されているわけではないため、どのような分布か分からず、直接尤度を計算することはできない。

よって天下り的(だと思ったが違うかもしれない)ではあるが、

.. math::
	\underset{G}{\min}\underset{D}{\max}V(D, G)
