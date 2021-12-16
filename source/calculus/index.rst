================================================================
微分積分学
================================================================

http://www7b.biglobe.ne.jp/~h-kuroda/pdf/text_calculus.pdf

区間
=============================================================================
:math:`a,b\in\mathbb{R}(a<b)` に対し、次の形の集合を区間という。

開区間

.. math::
    (a,b) :=\{x\in\mathbb{R}\mid a<x<b\}

閉区間

.. math::
    [a,b] :=\{x\in\mathbb{R}\mid a\leq x\leq b\}

ただし、 数列 :math:`(-\infty,\infty)\in\mathbb{R}` は開区間と閉区間でもあると考えることとする。

近傍
=============================================================================
:math:`\varepsilon>0,a\in\mathbb{R}` に対して

.. math::
    U_{\varepsilon}(a) := \{x\in\mathbb{R}\mid |x-a|<\varepsilon\}=(a-\varepsilon,a+\varepsilon)

とおく。この開区間 :math:`U_{\varepsilon}(a)` を点 :math:`a` の :math:`\varepsilon` 近傍(または単に近傍)という。

上限・下限
=============================================================================

上界・下界
-----------------------------------------------------------------------------
.. math::
    \forall x\in X,\exists a\in\mathbb{R}:
    
    a\geq x

のとき、 :math:`a` が :math:`X` の上界であるという。

.. math::
    \forall x\in X,\exists a\in\mathbb{R}:
    
    a\leq x

のとき、 :math:`a` が :math:`X` の下界であるという。

最大値・最小値
-----------------------------------------------------------------------------
:math:`a\in\mathbb{R}` が :math:`X` の上界かつ、 :math:`a\in X` を満たすとき、 :math:`a` を :math:`X` の最大値といい、 :math:`\max X` で表す。
:math:`a\in\mathbb{R}` が :math:`X` の下界かつ、 :math:`a\in X` を満たすとき、 :math:`a` を :math:`X` の最小値といい、 :math:`\min X` で表す。

上限・下限
-----------------------------------------------------------------------------
:math:`X` の上界が空集合でない時、上界の最小値を上限といい、 :math:`\sup X` と表す。
上界が空集合の場合、上限がないといい、 :math:`\sup X = \infty` と表すことがある。

:math:`X` の下界が空集合でない時、下界の最大値を下限といい、 :math:`\inf X` と表す。
下界が空集合の場合、下限がないといい、 :math:`\inf X = -\infty` と表すことがある。


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

単調数列
=============================================================================
数列 :math:`\{a_n\}^{\infty}_{n=1}` が単調増加であるとは、

.. math::
    \forall n\in \mathbb{N} : a_n\leq a_{n+1}

が成り立つことである。特に

.. math::
    \forall n\in \mathbb{N} : a_n < a_{n+1}

が成り立つとき、狭義単調増加である。

数列 :math:`\{a_n\}^{\infty}_{n=1}` が単調減少であるとは、

.. math::
    \forall n\in \mathbb{N} : a_n\geq a_{n+1}

が成り立つことである。特に

.. math::
    \forall n\in \mathbb{N} : a_n > a_{n+1}

が成り立つとき、狭義単調減少である。

単調増加または単調減少な数列をまとめて単調数列という。

Napier数
=============================================================================
.. math::
    e := \lim_{n\to\infty}(1+\frac{1}{n})^n

とし、これをNapier数という。