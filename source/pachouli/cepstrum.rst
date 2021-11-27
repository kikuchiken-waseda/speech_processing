==============================================================================
ケプストラム
==============================================================================




.. contents:: 目次

https://ja.wikipedia.org/wiki/%E3%82%B1%E3%83%97%E3%82%B9%E3%83%88%E3%83%A9%E3%83%A0

https://www.onosokki.co.jp/HP-WK/eMM_back/emm185.pdf

https://support.ptc.com/help/mathcad/ja/index.html#page/PTC_Mathcad_Help/example_cepstrum_and_complex_cepstrum.html

ケプストラムの定義
==============================================================================
対数スペクトラムをフーリエ変換(または逆フーリエ変換)をしたもの

使うものによって定義が違うので注意

音声分析においてケプストラムと呼ばれるものは、たいていの場合対数パワースペクトラム(or振幅スペクトラム)を逆フーリエ変換したもの

離散信号 :math:`f(n)` の振幅スペクトラムケプストラム :math:`c_f(n)` は

.. math::
    c_f(n) = \frac{1}{2\pi} \int^{\pi}_{-\pi} \ln(|F(\omega)|)e^{j\omega n}d\omega

で表される。( :math:`F(\omega)` は :math:`f(n)` のフーリエ変換)

複素ケプストラム

.. math::
    \begin{eqnarray}
    cc_f(n) &=& \frac{1}{2\pi} \int^{\pi}_{-\pi} \ln(F(\omega))e^{j\omega n}d\omega\\
    &=& \frac{1}{2\pi} \int^{\pi}_{-\pi} (\ln(|F(\omega)|)+j\angle F(\omega))e^{j\omega n}d\omega
    \end{eqnarray}