================================================================
書きたいものまとめ
================================================================



.. toctree::
   :maxdepth: 2
   :caption: Contents:
   
   ./symbol
   ./acoustic_wave
   ./wave_equation
   ./acoustic_feature/index
   ./spectrum
   ./level
   ./scale
   ./filter/index
   ./visualization
   ./convolution
   ./complex
   ./nbsphinx


後でまとめる雑多な知識
===============================================================

変分法
------------------------------
http://hooktail.sub.jp/mathInPhys/variations1/

追加でガトー微分、方向微分あたりも調べる


遅延演算子
---------------------------------------------------------------
定義

.. math::
   Dx(n) = x(n-1)

遅延演算子のZ変換は

.. math::
   z^{-1} = \mathcal{Z}(D)

RC回路
---------------------------------------------------------------


マクローリン展開
---------------------------------------------------------------

マクローリン展開はテイラー展開の :math:`a=0`

.. math::
   f(x) = \sum^{\infty}_{k=0}f^{(k)}(0)\frac{x^k}{k!}

これはテイラー展開

.. math::
   f(x) = \sum^{\infty}_{k=0}f^{(k)}(a)\frac{(x-a)^k}{k!}


テイラーの定理

:math:`f` が :math:`[a,x]` 上 :math:`n-1` 回連続微分可能かつ、 :math:`(a,x)` 上で :math:`n` 回微分可能であるとき、

.. math::
   f(x) = \sum^{n-1}_{k=0}f^{(k)}(a)\frac{(x-a)^k}{k!} + f^{(n)}(c)\frac{(x-a)^n}{n!}

なる :math:`c(a<c<x)` が存在する。
ここで、最終項 :math:`R_n = \frac{f^{(n)}(c)}{n!}(x-a)^n` をラグランジュの剰余項という。

https://rikeilabo.com/mcloughlin-expansion

https://risalc.info/src/taylor-series.html
