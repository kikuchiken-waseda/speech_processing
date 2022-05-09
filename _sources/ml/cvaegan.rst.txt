======================
CVAE-GAN
======================
https://arxiv.org/pdf/1703.10155.pdf


Introduction
=====================
生成モデルで高品質かつ汎用性の高いものを作りたい


Formulation of CVAE-GAN
=====================================
この手法は4つのネットワークに分けられている。

1. Encoder network :math:`E`
2. Generative network :math:`G`
3. Discriminative network :math:`D`
4. Classification network :math:`C`


関数 :math:`E,G` はCVAEのものと同じである。

同様に関数 :math:`G,D` はGANの枠組みと同じである。

関数 :math:`C` は事後確率 :math:`p(\mathbf{c}|\mathbf{x})` を測るものである。


しかし、ナイーブにVAEとGANを組み合わせただけでは不十分である。

GANの学習においては関数 :math:`G` で勾配の消失や不安定性の問題に悩まされることがわかっている。


よって :math:`E,D,C` の学習のみ、もとのVAE、GANと同じで、 :math:`G` の新しい(mean feature objective)を提案し安定性を向上させることにした。この手法を使ったとしてもモード崩壊のリスクは存在する。

そこで、:math:`E,G` で実サンプル :math:`\mathbf{x}` から合成されたサンプル :math:`\mathbf{x'}` へのマッピングを求める。(再合成誤差のことを言ってる?)

By using the pixel-wise :math:`l2` loss and pair-wise feature matching(これなに?), the generative model is enforced to emit diverse samples and generate structure-preserving samples.

以下のセクションでは、まず、平均特徴マッチングに基づくGANの手法を説明する（セクション3.1）。

次に、平均特徴マッチングが条件付き画像生成タスクにも利用できることを示す（セクション3.2）。

その後、エンコーダネットワークを追加したペアワイズ特徴マッチングを紹介する（セクション3.3）。

最後に 提案手法の目的を分析し、学習パイプラインにおける実装の詳細を示す。を分析し、学習パイプラインにおける実装の詳細を示す（セクション 3.4）。

Mean feature matching based GAN
------------------------------------
:math:`G,D` はmin-maxゲームで計算される。

この論文においてはGANの損失を2つに分けて書いている。

the network :math:`D` tries to minimize the loss function

.. math::
   \mathcal{L}_D =  - \mathbb{E}_{p_r(\mathbf{x})}[\log D(\mathbf{x})] - \mathbb{E}_{p_z(\mathbf{z})}[\log (1 - D(G(\mathbf{z})))]

while network :math:`G` tries minimize

.. math::
   \mathcal{L}'_{GD} =  -\mathbb{E}_{p_z(\mathbf{z})}[\log (1 - D(G(\mathbf{z})))]


こっからモード崩壊が起こる理由の説明があるが、難しいので割愛(卒論にはまとめるべき)。
ソフトマックス損失を使うと勾配がなくなる的な感じ


この問題に対処するため、生成器に(a mean feature matching objective)を用いることを提案する。

The objective requires the center of the features of the synthesized samples to match the center of the features of the real samples.(特徴のcenterとは?)

:math:`f_D(\mathbf(x))` は :math:`D` の中間層。

:math:`G` then tries to minimize the loss function

.. math::
   \mathcal{L}_{GD} = \frac{1}{2}||\mathbb{E}_{p_r(\mathbf{x})}[f_D(\mathbf{x})]-\mathbb{E}_{p_z(\mathbf{z})}[f_D(G(\mathbf{z}))]||^2_2

本実験では簡単なため、識別器の最終のFC層を特徴量 :math:`f_D` として選択する。(VAE/GANではサンプルごとにランダム選択していた(ganの方のロスも使ってたけど))

n the training stage, we estimate the mean feature using the data in a minibatch.

We also use moving historical averages to make it more stable.(なにこれ)

3つの利点がある(面倒だから後で)

1.
2.
3.

Mean Feature Matching for Conditional Image Generation
----------------------------------------------------------
:math:`K` 個のカテゴリーに属するデータセットに対し、 :math:`C` によって画像がどのカテゴリーに属するか測定する。

Here we use a standard method for classification. The network C takes in x as input and outputs a K dimensional vector, which then turns into class probabilities using a softmax function. 

The output of each entry represents the posterior probability P(c|x). In the training stage, the network C tries to minimize the softmax loss.

.. math::
   \mathcal{L}_C = -\mathbb{E}_{p_r(\mathbf{x})}[\log p(\mathbf{c}|\mathbf{x})]

:math:`\mathcal{L}'_{GD}` と同様に :math:`G` にソフトマックス損失を用いると学習が不安定になる。

よって、 :math:`G` に対し(Mean feature matching objective)を用いることを提案する。

Let :math:`f_C(\mathbf{x})` denote features on an intermediate layer of the classification, then :math:`G` tries to minimize:

.. math::
   \mathcal{L}_{GC} = \frac{1}{2}\sum_\mathbf{c}||\mathbb{E}_{p_r(\mathbf{x})}[f_C(\mathbf{x})]-\mathbb{E}_{p_\mathbf{z}(\mathbf{z})}[f_C(G(\mathbf{z},\mathbf{c}))]||^2_2

Since there are only a few samples belonging to the same category in a minibatch, it is necessary to use moving averages of features for both real and generated samples.(大切そうだが何を言ってるのかわからん)

Pairise Feature Matching
--------------------------------------------
なんかいろいろ書いてあって、モード崩壊を起こさないため、エンコーダを追加する。

VAEと同じ仕組みでlossをとっている

.. math::
   \mathcal{L}_{KL} = \frac{1}{2}(書くのだるい)

.. math::
   \mathcal{L}_G = (各出力の二乗誤差)

Objective of CVAE-GAN
------------------------------------
アルゴリズムの画像

Analysis of Toy Example
======================================
Toy Exampleとは?

過去のモデルと学習を比べている。

このモデルが良さそうという話。

Experiments
===============================
実験の話

Encoderが学習済み?ちょっとわからない。

All networks are trained from scratch.

最初から学習をやってるみたい。

Visualization comparison with other models
----------------------------------------------
単純に見た感じの比較
いろんなモデルで画像生成の学習させた感じ今回のモデルが良さそう


Quantitative Comparison
--------------------------------
クオリティの比較

Attributes Morphing
---------------------------
モーフィングの比較

Image Inpainting
-----------------------------
マスクした部分の追加

Comparing Different Combination of Losses
---------------------------------------------------
Gのlossについて比較

Cから得られる二乗誤差をなくしたほうが良い結果を得られた。

CVAE-GAN for Data Augmentation
----------------------------------------
データオーギュメンテーションとして使った話

ある程度良くなってる？

Conclusion
=================================
