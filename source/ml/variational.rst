===========================
変分推論
===========================

https://ntacoffee.com/variational-inference/

https://academ-aid.com/ml/vae

graphvizと和解できない・・・


尤度関数
==============
https://ja.wikipedia.org/wiki/%E5%B0%A4%E5%BA%A6%E9%96%A2%E6%95%B0

.. math::
   p_\theta(x) = p(x;\theta) = L(\theta;x)



点推定
====================
maximum likelihood estimation

.. math::
   \hat{\theta}(x)_{\text{ML}} &= \underset{\theta}{\arg \max}\,p(x|\theta) \\

maximum a posteriori estimation

.. math::
   \hat{\theta}(x)_{\text{MAP}} &= \underset{\theta}{\arg \max}\,p(\theta|x) \\
   &= \underset{\theta}{\arg \max}\,\frac{p(x|\theta)p(\theta)}{p(x)} \\
   &\propto \underset{\theta}{\arg \max}\,p(x|\theta)p(\theta)

基本対数尤度に変えて最大化する

ベイズ推定
=====================
bayesian estimation

.. math::
   p(\theta|x) = \frac{p(x|\theta)p(\theta)}{p(x)}


https://ja.wikipedia.org/wiki/%E6%9C%80%E5%A4%A7%E4%BA%8B%E5%BE%8C%E7%A2%BA%E7%8E%87


EM algorithm
=================
https://academ-aid.com/ml/em

点推定の式の変形に過ぎない

イェンセンの不等式使って下界を設定

.. math::
   \log p_\theta(x) &= \log \int p_\theta(x,z)dz \\
   &= \log \int q(z)\frac{p_\theta(x,z)}{q(z)}dz \\
   &\geq \int q(z)\log{\frac{p_\theta(x,z)}{q(z)}}dz\\ 
   &\equiv \mathcal{L}_{\text{ML}}[\theta;q(z)]
   
書くのが面倒なので下の式は自分で計算してくれ

.. math::
   \log p_\theta(x) - \mathcal{L}_{\text{ML}}[\theta;q(z)] = KL[q(z)||p_\theta(z|x)]

変分ベイズ
======================
https://academ-aid.com/ml/vb

EMと同様にここまで持ってく

.. math::
   \log p(x) - \mathcal{L}_{\text{VB}}[q(z)] = KL[q(z)||p(z|x)]

平均場近似を使う

.. math::
   q(z) = \prod_{i} q_i(z_i)

面倒なので :math:`z` を省略

.. math::
   KL[q||p(z|x)]&= \int q\log\frac{p(z|x)}{q}dz \\
   &= \int q\log p(z|x)dz - \int q\log q dz\\
   &= \int q_j\prod_{i\neq j}q_i\log p(z|x)dz - \int q_j\log q_j dz + \text{const} \\
   &= \int q_j\Biggl{\{}\int \log p(z|x)\prod_{i\neq j}q_idz_i\Biggr{\}}dz_j - \int q_j\log q_j dz + \text{const}\\
   &= \mathbb{E}_{q_j}[\mathbb{E}_{q_{i\neq j}}[\log p(z|x)]] - \mathbb{E}_{q_j}[\log q_j] + \text{const} \\
   &= \mathbb{E}_{q_j}[\mathbb{E}_{q_{i\neq j}}[\log p(z|x)] - \log q_j] + \text{const}




VAE
=================
https://arxiv.org/pdf/1312.6114.pdf

VAEは確率的なグラフィカルモデルで、潜在変数 :math:`\mathbf{z}` からデータ :math:`\mathbf{x}` を生成する :math:`p_\theta(\mathbf{x}|\mathbf{z})` (Decoder)とその逆向きの推論を行う :math:`p_\theta(\mathbf{z}|\mathbf{x})` (Encoder) から構成される。:math:`p_\theta(\mathbf{z}|\mathbf{x})` は計算的に扱いにくいため、近似分布 :math:`q_\phi(\mathbf{z}|\mathbf{x})` を導入し、変分下界(Evidence lower bound) :math:`\mathcal{L}(\theta ,\phi;\mathbf{x})` の最大化を行う。

.. math::
   \log p_\theta(\mathbf{x}) &\geq \mathcal{L}(\theta, \phi ; \mathbf{x})\\
   &=-KL(q_\phi(\mathbf{z}|\mathbf{x})||p_\phi(\mathbf{z}))+\mathbb{E}_{q_\phi(\mathbf{z}|\mathbf{x})}[\log p_\theta(\mathbf{x}|\mathbf{z})]

joint VAE
=========================
https://arxiv.org/pdf/1804.00104.pdf
