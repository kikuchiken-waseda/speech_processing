======================
CVAE-GAN
======================
https://arxiv.org/pdf/1703.10155.pdf


Introduction
=====================
生成モデルで高品質かつ汎用性の高いものを作りたい


Related work
==========================
生成モデルについて、昔ながらの生成手法と勉強会で私が説明した3つの手法を紹介している。

:doc:`generativemodel`

.. image:: https://tips-memo.com/wp-content/uploads/2019/07/VAE_1_modify.png

.. image:: data:image/png;base64,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 

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
