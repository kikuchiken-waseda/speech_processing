===============================
Generative adversarial network
===============================

https://www.bigdata-navi.com/aidrops/2519/

https://dreamer-uma.com/gan-theory/

疑問
==================
.. math::
	\mathbf{E}_{x\sim p(x)}[\ln D(x;\phi)]

	\underset{x\sim p}{\mathbf{E}}[\ln D(x;\phi)]

	\mathbf{E}_{p(x)}[\ln D(x;\phi)]

全部一緒っぽい

違うかも


導出
==================
確率変数 :math:`x` に対し、データ分布を :math:`p_d(x)` 、モデル分布を :math:`p_g(x)` で表す。

分布 :math:`p_d(x)` は分布の形が明示されているわけではないため、どのような分布か分からず、直接尤度を計算することはできない。

よって天下り的(だと思ったが違うかもしれない)ではあるが、

.. math::
   \underset{G}{\min}\underset{D}{\max} V(D,G) = \mathbb{E}_{p_d(\mathbf{x})}[\log D(\mathbf{x})] + \mathbb{E}_{p_z(\mathbf{z})}[\log (1-D(G(\mathbf{z})))]
