==============
生成モデル
==============

memo
=======================
参考文献
https://www.jstage.jst.go.jp/article/jasj/74/4/74_208/_pdf


対数尤度の最大化は大抵ハイパラの推定問題

今回の目的
======================
ニューラルネットワークで文章を作ったり、画像を作ったりするけど、そもそも作る、生成するとはどういったことを示すのかを知る

これから生成モデルを使う人がどれくらい数学的議論をしなければならないかの確認(わざと数式多めで書いています)

フォローアップとしてワークショップを考えています。

確率分布の推論における主要な式
=========================================
ある２つの変数 :math:`x,y` に対する確率分布を同時分布と呼び :math:`p(x,y)` で表す。さらに

.. math::
   p(y) = \int_x p(x,y)dx

および

.. math::
   p(y) = \sum_x p(x,y)

のように一方の変数 :math:`x` を除去する操作を周辺化と呼び、結果として得られる確率分布 :math:`p(y)` を周辺分布と呼ぶ。
また同時分布 :math:`p(x,y)` において、 :math:`y` に対して特定の値が決められたときの :math:`x` の確率分布を条件付き分布と呼び

.. math::
   p(x|y) := \frac{p(x,y)}{p(y)}

と定義する。

生成モデルって？
=====================
入力ベクトル :math:`\mathbf{x}\in\mathbb{R}^c` と対応する目標変数 :math:`\mathbf{t}\in\mathbb{R}^d` があり、 :math:`\mathbf{x}` の新たな値に対する :math:`\mathbf{t}` を予測することが目標である。

このような問題の解き方として3つのアプローチが考えることができる（対立関係ではない）。



識別関数
----------------
各入力 :math:`\mathbf{x}` から直接 :math:`\mathbf{t}` に写像する関数 :math:`f(\mathbf{x})` を見つける。この場合確率は出てこない。このような関数 :math:`f` を識別関数と呼ぶ。

識別モデル
----------------
最初に事後確率 :math:`p(\mathbf{t}|\mathbf{x})` を決める推論問題を解き、次に決定理論を使って、新たな :math:`\mathbf{x}` を :math:`\mathbf{t}` に割り当てる。このように、事後確率を直接モデル化するアプローチを識別モデル(discriminative model)と呼ぶ。

生成モデル
----------------
まず、条件付き確率 :math:`p(\mathbf{x}|\mathbf{t})` を決める推論問題を解く。事前確率 :math:`p(\mathbf{t})` も求める。それからベイズの定理を使って

.. math::
   p(\mathbf{t}|\mathbf{x}) = \frac{p(\mathbf{x}|\mathbf{t})p(\mathbf{t})}{p(\mathbf{x})}

により事後確率 :math:`P(\mathbf{t}|\mathbf{x})` を求める。また分子は

.. math::
   p(\mathbf{x}) =\int_{\mathbb{R}^d}p(\mathbf{x}|\mathbf{t})p(\mathbf{t})d\mathbf{t}

で計算できる。事後確率がわかることで、決定理論を使い、新たな :math:`\mathbf{x}` を :math:`\mathbf{t}` に割り当てることができる。
このように出力の分布だけでなく入力の分布もモデル化するアプローチは、モデルからのサンプリングによって、入力空間で人工データを生成できることから、生成モデルと呼ばれる。


なにかを生成する際のお気持ち
=========================================
真のデータの分布を :math:`p_r(\mathbf{x})` としたとき、それと一致するような :math:`p_g(\mathbf{x})` を作ることができれば分布からのサンプリングによって人工データの生成を行うことができる。

これらのモチベーションを持った深層生成モデルの主要モデルとして、自己回帰モデル(Autoregressive Model)、変分自己符号化器(Variational Autoencoder)、敵対的生成ネットワーク(Generative Adversarial Networks)がある。


AR
-------------------
ARでは、連鎖律を用いて、 ベクトル :math:`\mathbf{x}\in\mathbb{R}^n` を1次元の確率分布に分解して表現し、確率分布を直接扱えるようにする。( :math:`p_g` の分布形状を決めるだけ)

.. math::
   p_g(\mathbf{x}) = \prod_{i=1}^{n}p_g(x_i|x_1,\dots,x_{i-1})

このモデルの応用としてRNN、LSTM、Transformerのデコーダ部分、WaveNet等がある。

長所は、確率分布を直接扱えるため、対数尤度を直接最大化することができ、定量的な評価に使える点、精緻なデータ生成が可能な点。

短所は、生成が再帰的なため並列化が難しく時間がかかる点、データの潜在的な表現を行わないため、生成結果のコントロールが困難な点が挙げられる。

VAE
--------------------
VAEは確率的なグラフィカルモデルで、潜在変数 :math:`\mathbf{z}` からデータ :math:`\mathbf{x}` を生成する :math:`p_\theta(\mathbf{x}|\mathbf{z})` (Decoder)とその逆向きの推論を行う :math:`p_\theta(\mathbf{z}|\mathbf{x})` (Encoder) から構成される。:math:`p_\theta(\mathbf{z}|\mathbf{x})` は計算的に扱いにくいため、近似分布 :math:`q_\phi(\mathbf{z}|\mathbf{x})` を導入し、変分下界(Evidence lower bound) :math:`\mathcal{L}(\theta ,\phi;\mathbf{x})` の最大化を行う。

.. math::
   \log p_\theta(\mathbf{x}) &\geq \mathcal{L}(\theta, \phi ; \mathbf{x})\\
   &=-KL(q_\phi(\mathbf{z}|\mathbf{x})||p_\phi(\mathbf{z}))+\mathbb{E}_{q_\phi(\mathbf{z}|\mathbf{x})}[\log p_\theta(\mathbf{x}|\mathbf{z})]

長所として、目的関数が明示的であるため最適化対象が明確である点、データを潜在変数 :math:`\mathbf{z}` で表現するため、それに基づき生成結果をコントロールしやすい点、データを一度に生成できるため、サンプリングコストが低い点が挙げられる。

短所として、近似分布の推定を行うため理想的な学習ができたとしても学習した生成分布が :math:`p_r(\mathbf{x})` と一致するとは限らない点、 :math:`p_\theta(\mathbf{x}|\mathbf{z})` の分布形状を陽に定める必要があり、その結果、統計的な平均化が生じ、生成結果に過剰な平滑化が起こり易い点が挙げられる。
