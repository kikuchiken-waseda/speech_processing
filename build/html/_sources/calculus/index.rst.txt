================================================================
微分積分学
================================================================

http://www7b.biglobe.ne.jp/~h-kuroda/pdf/text_calculus.pdf

区間
=============================================================================

近傍
=============================================================================



数列の極限
=============================================================================
数列 :math:`\{a_n\}^{\infty}_{n=1}` と :math:`\alpha\in\mathbb{R}` について、

.. math::
    \forall\varepsilon>0,\exists N(\varepsilon)\in\mathbb{N}:
    
    n\geq N(\varepsilon)\Rightarrow|a_n-\alpha|<\varepsilon

このとき、数列 :math:`\{a_n\}^{\infty}_{n=1}` の極限値は :math:`\alpha` であるといい、

.. math::
    \lim_{n\to\infty}a_n=\alpha\text{ または } a_n\rightarrow\alpha(n\rightarrow\infty)

と表す。このとき、数列 :math:`\{a_n\}^{\infty}_{n=1}` は :math:`\alpha` に収束するという。

数列 :math:`\{a_n\}^{\infty}_{n=1}` がどのような :math:`\alpha\in\mathbb{R}` にも収束しないとき、発散するという。
さらに、

.. math::
    \forall K>0,\exists N(K)\in\mathbb{N}:
    
    n\geq N(K)\Rightarrow a_n>K

のとき、数列 :math:`\{a_n\}^{\infty}_{n=1}` は :math:`\infty` に発散するといい、

.. math::
    \lim_{n\to\infty}a_n=\infty

と表し、

.. math::
    \forall K>0,\exists N(K)\in\mathbb{N}:
    
    n\geq N(K)\Rightarrow a_n<K

のとき、数列 :math:`\{a_n\}^{\infty}_{n=1}` は :math:`-\infty` に発散するといい、

.. math::
    \lim_{n\to\infty}a_n=-\infty

と表す。

級数
=============================================================================

数列 :math:`\{a_n\}^{\infty}_{n=1}` の各項を足し合わせた

.. math::
   a_1+a_2+a_3+\cdots+a_n+\cdots

を :math:`\{a_n\}^{\infty}_{n=1}` の作る級数と言い、 :math:`\sum_{n=1}^{\infty}{a_n}`
と表す。

:math:`S_n=\sum^{n}_{k=1}a_k` を第 :math:`n` 部分和といい、
数列 :math:`\{S_n\}^{\infty}_{n=1}` が収束するか発散するかに応じて、
級数 :math:`\sum_{n=1}^{\infty}{a_n}` は収束するまたは発散するという。
部分和が収束する場合に :math:`S=\lim_{n\to\infty}S_n` を級数の和といい、
:math:`\sum_{n=1}^{\infty}{a_n}=S` と書く。
また、 :math:`S=\pm\infty` となる場合も、それぞれ
:math:`\sum_{n=1}^{\infty}{a_n}=\pm\infty` で表す。