================================================================
書きたいものまとめ
================================================================

1. なんやねん音響特徴量
2. なんやねんスペクトログラム
3. なんやねんmelスケール
4. なんやねんMFCC
5. どうやってだすねんこれ


.. toctree::
   :maxdepth: 2
   :caption: Contents:
   
   ./symbol
   ./acoustic_wave
   ./wave_equation
   ./acoustic_feature/index
   ./spectrum
   ./cepstrum
   ./level
   ./scale
   ./filter
   ./mfcc
   ./mgcs
   ./visualization
   ./convolution
   ./complex
   ./nbsphinx


後でまとめる雑多な知識
===============================================================

伝達関数(transfer function)
---------------------------------------------------------------
伝達関数とはシステムへの入力を出力に変換する関数のことをいう。
すべての初期値を0とおいたときの、制御系の出力と入力のラプラス変換（またはZ変換）の比で表される。

連続システムの時、出力信号 :math:`y(t)` のラプラス変換を :math:`Y(s)` 、入力信号の :math:`x(t)` ラプラス変換 :math:`X(s)` をとすれば、伝達関数 :math:`G(s)` は

.. math::
   G(s) = \frac{Y(s)}{X(s)} = \frac{\mathcal{L}[y(t)]}{\mathcal{L}[x(t)]}

離散システムの場合はZ変換によって

.. math::
   H(z) = \frac{Y(z)}{X(z)} = \frac{\mathcal{Z}[y(n)]}{\mathcal{Z}[x(n)]}

で表される。

https://ja.wikipedia.org/wiki/%E4%BC%9D%E9%81%94%E9%96%A2%E6%95%B0%E6%B3%95

極・零点
---------------------------------------------------------------
一般に、システムの伝達関数は分数の形で得られる。

.. math::
   G(s) = \frac{N(s)}{D(s)}

この時 :math:`D(s)=0` の根をシステムの極といい、 :math:`N(s)=0` の根をシステムの零点という。


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
