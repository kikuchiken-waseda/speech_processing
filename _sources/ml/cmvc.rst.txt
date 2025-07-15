=================================
Crossmodal Voice Conversion
=================================


数式的説明
===================
:math:`\mathbf{x}=[\mathbf{x}_1,...,\mathbf{x}_N]\in \mathbb{R}^{D\times N}` を発話音声の音響特徴量のベクトル列とし、 :math:`\mathbf{y} \in \mathbb{R}^{I\times J}` を話者に対応する顔画像とする。

ここで、 同時確率分布 :math:`p(\mathbf{x}, \mathbf{y})` を２つのVAEによってモデル化する。

音声の符号化器(Utterance Encoder)は :math:`\mathbf{x}` を時間依存な潜在変数列 :math:`\mathbf{z}=[\mathbf{z}_1,...,\mathbf{z}_{N'}] \in \mathbb{R}^{D' \times N'}` 符号化することを目的とする。
復号化器(Utterrance Decoder) は潜在変数 :math:`\mathbf{z}` と補助特徴量から :math:`\mathbf{x}` を再合成することを目的とする。
:math:`\mathbf{z}` が言語情報のみを捕らえ、 :math:`\mathbf{c}` から話者性に関する情報を得ることを理想としている。
したがって、符号化器と復号化器が音声認識や音声合成の音響モデルとして機能し、補助入力 :math:`\mathbf{c}` に応じて入力発話音声を変換できるようになることが期待される。

また、補助特徴量 :math:`\mathbf{c}` は、顔画像の符号化器(Face Encoder)によって得られる時間非依存な潜在変数を用いる。
:math:`\mathbf{c}` についても復号化器(Face Decoder) によって画像 :math:`\mathbf{y}` の再合成を行う。

(画像1にp(x,y)のグラフを書いているが俺も書く?)

この生成モデルは以下のような条件付き確率分布で表現される。 Utterance/Face Decoder及びUtterance/Face Encoderはそれぞれ :math:`p_{\theta_\mathrm{a}}(\mathbf{x}|\mathbf{z},\mathbf{c}), p_{\theta_\mathrm{v}}(\mathbf{y}|\mathbf{c}),q_{\phi_\mathrm{a}}(\mathbf{z}|\mathbf{x}), q_{\phi_\mathrm{v}}(\mathbf{c}|\mathbf{y})` であり、 :math:`\theta_\mathrm{a},\theta_\mathrm{v},\phi_\mathrm{a},\phi_\mathrm{v}` はニューラルネットワークのパラメータである。

このモデルは実際の事後確率 :math:`p(\mathbf{z},\mathbf{c}|\mathbf{x},\mathbf{y}) \propto p_{\theta_\mathrm{a}}(\mathbf{x}|\mathbf{z},\mathbf{c})p_{\theta_\mathrm{v}}(\mathbf{y}|\mathbf{c})` を :math:`q(\mathbf{z},\mathbf{c}|\mathbf{x},\mathbf{y}) = q_{\phi_\mathrm{a}}(\mathbf{z}|\mathbf{x})q_{\phi_\mathrm{v}}(\mathbf{c}|\mathbf{y})` によって近似する。
この時、これらの分布の間におけるKLダイバージェンスは、

.. math::
   \mathrm{KL}[q(\mathbf{z},&\mathbf{c}|\mathbf{x},\mathbf{y})||p(\mathbf{z},\mathbf{c}|\mathbf{x},\mathbf{y})] = \log{p(x,y)} \\
   &- \mathbb{E}_{q_{\phi_\mathrm{v}}(\mathbf{c}|\mathbf{y}),q_{\phi_\mathrm{a}}(\mathbf{z}|\mathbf{x})}[\log{p_{\theta_\mathrm{a}}(\mathbf{x}|\mathbf{z},\mathbf{c})}] \\
   &- \mathbb{E}_{q_{\phi_\mathrm{v}}(\mathbf{c}|\mathbf{y})}[\log{p_{\theta_\mathrm{v}}(\mathbf{y}|\mathbf{c})}] \\
   &+ \mathrm{KL}[q_{\phi_\mathrm{a}}(\mathbf{z}|\mathbf{x})||p(\mathbf{z})] + \mathrm{KL}[q_{\phi_\mathrm{v}}(\mathbf{c}|\mathbf{y})||p(\mathbf{c})] \\

よって、発話と顔画像の訓練ペアデータ :math:`\{\mathbf{x}_m,\mathbf{y}_m\}^M_{m=1}` を用いて訓練基準(訳これでいい?)

.. math::
   &\mathcal{J}(\theta_\mathrm{a},\phi_\mathrm{a},\theta_\mathrm{v},\phi_\mathrm{v})\\
   &= \mathbb{E}_{p_\mathrm{d}(\mathbf{x},\mathbf{y})}\mathbb{E}_{q_{\phi_\mathrm{v}}(\mathbf{c}|\mathbf{y}),q_{\phi_\mathrm{a}}(\mathbf{z}|\mathbf{x})}[\log{p_{\theta_\mathrm{a}}(\mathbf{x}|\mathbf{z},\mathbf{c})}] \\
   &+ \mathbb{E}_{p_\mathrm{d}(\mathbf{y})}\mathbb{E}_{q_{\phi_\mathrm{v}}(\mathbf{c}|\mathbf{y})}[\log{p_{\theta_\mathrm{v}}(\mathbf{y}|\mathbf{c})}] \\
   &- \mathbb{E}_{p_\mathrm{d}(\mathbf{x})}\mathrm{KL}[q_{\phi_\mathrm{a}}(\mathbf{z}|\mathbf{x})||p(\mathbf{z})] \\
   &- \mathbb{E}_{p_\mathrm{d}(\mathbf{y})}\mathrm{KL}[q_{\phi_\mathrm{v}}(\mathbf{c}|\mathbf{y})||p(\mathbf{c})] \\

によってパラメータ :math:`\theta_\mathrm{a},\phi_\mathrm{a},\theta_\mathrm{v},\phi_\mathrm{v}` の最適化を行う。

(reparametrization trickについて書く?)

Utterance Decoderが補助入力 :math:`\mathbf{c}` を利用する方法に明示的な制限がないため、Utterance Decoder出力が :math:`\mathbf{c}` に相関するように、情報理論的な正則化項を導入する。
:math:`\mathbf{z}` を条件とした、 :math:`\mathbf{x} \sim p_{\theta_\mathrm{a}}()` と :math:`\mathbf{c}` 相互情報量は以下のように書ける。


