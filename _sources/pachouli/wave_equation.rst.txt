================================================================
波動方程式
================================================================

.. contents:: 目次

https://www.jstage.jst.go.jp/article/jasj/66/9/66_KJ00006579568/_pdf/-char/ja

http://www.chem.konan-u.ac.jp/PCSI/web_material/wave_PW.pdf

わからん

波動とは
================================================================
波動は、空間と時間に指定される関数によって表される。

波の進行方向を :math:`x` 方向とし、ある時間 :math:`t` 場所 :math:`x` での変位を :math:`u(x, t)` とする。
時間 :math:`t=t_0=0` での変位を :math:`f(x)=u(x,0)` とする。
この変位は一定の形を保ったまま一定の位相速度(音速) :math:`c` で :math:`+x` 方向に伝搬していくとする。

.. math::
    u(x,\delta t) = f(x - c\delta t)

    u(x,-\delta t) = f(x + c\delta t)

周期的な波は一般に

.. math::
    
    \begin{eqnarray}
    u(x,t) &=& A\cos(kx-\omega t+ \alpha)+jA\sin(kx-\omega t+ \alpha)\\
    &=& Ae^{j(kx-\omega t+ \alpha)}
    \end{eqnarray}

で表される。

波長 :math:`\lambda`

波数 :math:`k`

振動数 :math:`\nu`

角振動数 :math:`\omega = 2\pi\nu`

位相 :math:`kx-\omega t+ \alpha`

初期位相 :math:`\alpha`

位相速度 :math:`v_p=\omega/k`

波動方程式の導入
================================================================
微分積分学まともにやったら意味わかると思われる