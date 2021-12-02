==============================================================================
mel generalized cepstrum
==============================================================================

.. contents:: 目次

なにこれ
==============================================================================
lpcとかケプストラムとかを包含するやつ

https://www.sp.nitech.ac.jp/~tokuda/selected_pub/pdf/paper/tokuda_j75-a_7_1124.pdf

https://www.sp.nitech.ac.jp/~tokuda/tokuda_tamkang2002.pdf

https://www.sp.nitech.ac.jp/~tokuda/selected_pub/pdf/conference/tokuda_icslp1994.pdf

generalized logarithmic function
==============================================================================
.. math::
    s_\gamma(w):=
    \begin{cases}
        (w^{\gamma}-1)/\gamma,\text{  if }0<|\gamma|\le 1

        \log w,\text{  if }\gamma =0
    \end{cases}

.. math::
    {s_\gamma}_{-1}(w):=
    \begin{cases}
        (1+\gamma w)^(1/\gamma),\text{  if }0<|\gamma|\le 1

        e^w,\text{  if }\gamma =0
    \end{cases}

generalized cepstrum
==============================================================================
複素ケプストラムを一般化対数関数で拡張したもの

.. math::
    c_{\gamma}(n) := \frac{1}{2\pi} \int^{\pi}_{-\pi} s_\gamma(F(\omega))e^{j\omega n}d\omega

本編
==============================================================================
実際にはこの定義で出さないらしい

.. math::
    c_{\alpha,\gamma}(n) := \frac{1}{2\pi} \int^{\pi}_{-\pi} s_\gamma(F(\omega))e^{j\beta_\alpha(\omega) n}d\omega

    \beta_\alpha(\omega) = \tan^{-1}\frac{(1-\alpha^2)\sin\omega}{(1+\alpha^2)\cos\omega-2\alpha}