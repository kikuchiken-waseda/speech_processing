
音の大きさを表す音響特徴量
================================================================

ディジタル音声の大きさを表す特徴量は

1. 音に関する物理量
2. 電圧に関する物理量

といった種類がある。

また指標としてしばしば :any:`../level` が使われる。

音響パワー
----------------------------------------------------------------
https://www.onosokki.co.jp/HP-WK/eMM_back/emm101.pdf



音響パワーレベル
----------------------------------------------------------------
音響パワー :math:`W \text{[W]}` に対し、基準値 :math:`W_0 = 1 \times 10^{-12} \text{[W]}` を用いて

.. math::
    L_w = 10 \times \log_{10} \frac{W}{W_0} \text{[dB]}

で表す。

実用上はSTFTのフレーム一つ一つのパワーを求めるのがよさそう？


音圧
----------------------------------------------------------------
文字通り、音の圧力(pressure)


音圧レベル
----------------------------------------------------------------
音量とも呼ばれてたりする。

可聴域にある音は同じ周波数であれば、音圧が大きいほど大きな音として認識される。また、音圧の単位は圧力を示す単位であるPa（パスカル）であるが、人間が認識しうる音の大きさの範囲は音圧の実値では広範囲にわたる。

そこで、音響工学の分野では人間の聴覚特性に合わせ、音圧の大きさを基準となる値との比の常用対数によって表現される量（レベル）である音圧レベルを用いて表すことが多い。

https://ja.wikipedia.org/wiki/%E9%9F%B3%E5%9C%A7%E3%83%AC%E3%83%99%E3%83%AB

音圧 :math:`p \text{[Pa]}` に対し、基準値 :math:`p_0 = 20 \times 10^{-6} \text{[Pa]}` を用いて

.. math::
    L_p = 10 \times \log_{10} (\frac{p}{p_0})^2\text{[dB]}

で表す。

Loudness
----------------------------------------------------------------
ヒトの聴覚が感じる音の大小を示す心理量

単位は :math:`\text{[sone]}`

音圧レベル :math:`40\text{[dB]}` 周波数 :math:`1\text{[kHz]}` の純音をヒトが聞いたときに感じる音の大きさが
:math:`1\text{[sone]}` と定義される

Loudnessレベル
----------------------------------------------------------------
そのうち書く

騒音レベル
----------------------------------------------------------------
そのうち書く


Peak
----------------------------------------------------------------
長さN(サンプル数)のディジタル音声信号 :math:`x(i)` におけるPeakは

.. math::
    x_{peak} =  \max x(i)



RMS
----------------------------------------------------------------

波形全体や一部分で計算される

波形振幅の時間平均値(多分信号の実効値)

長さN(サンプル数)のディジタル音声信号 :math:`x(i)` におけるRMSは

.. math::
    x_{rms} =  \sqrt{\frac{1}{N} \sum^{N}_{i=1} x(i)^2}




