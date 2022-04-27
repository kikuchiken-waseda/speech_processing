====================================================================================================
Neural Discrete Representation Learning
====================================================================================================


https://arxiv.org/abs/1711.00937


.. contents:: 目次

words
==============================================================
representations: features is same meaning? 

Abstract
==============================================================
Learning useful representations without supervision remains a key challenge in machine learning. 

In this paper, we propose a simple yet powerful generative model that learns such discrete representations. Our model, the Vector Quantised-Variational AutoEncoder (VQ-VAE), differs from VAEs in two key ways: the encoder network outputs discrete, rather than continuous, codes; and the prior is learnt rather than static. 

In order to learn a discrete latent representation, we incorporate ideas from vector quantisation (VQ). 
Using the VQ method allows the model to circumvent issues of "posterior collapse" -- where the latents are ignored when they are paired with a powerful autoregressive decoder -- typically observed in the VAE framework. Pairing these representations with an autoregressive prior, the model can generate high quality images, videos, and speech as well as doing high quality speaker conversion and unsupervised learning of phonemes, providing further evidence of the utility of the learnt representations.

Introduction
======================
Recent advances in generative modelling of images, audio, and videos have yielded impressive samples and applications.

At the same time, challenging tasks such as

#. few-shot learning
#. domain adaption
#. reinforcement learning 

heavily rely on learnt representations from raw data, but the usefulness of generic representations traind in an unsupervised fashion is still far from being the dominant approach.

Maximum likelihood and reconstruction error (such as VAE model) are two common objectives used to train unsupervised models in the pixel domain, however their usefulness depends on the particular application the features are used in. **Our goal is to achieve a model that conserves the important features of the data in its latent space while optimising for maximum likelihood.** *As the work in [7] suggests, the best generative models (as measured by log-likelihood) will be those without latents but a powerful decoder(such as PixelCNN).* However, in this paper, we argue for learning discrete and useful latent variables, which we demonstrate on a variety of domains.

Learning representations with continuous features have been the focus of many previous work however we concentrate on discrete representations which are potentially a more natural fit for many of the modalities we are interested in. Language is inherently discrete, similarly speech is typically represented as a sequence of symbols. Images can often be described concisely by language. Furthemore, discrete representations are a natural fit for complex reasoning, planning and predictive learning(e.g., if it rains, I will use an umbrella). While using discrete latent variables in deep learning has proven challenging, powerful autoregressive models have been developed for modelling distributions over discrete variables[37].

In our work, we introduce anew family of generative models succesfully combining the variational autoencoder(VAE) framework with discrete latent representations through a novel parameterisation of the posterior distribution of (discrete) latents given an observation. Our model, which relies on vector quantization (VQ), is simple to train, does not suffer from large variance, and avoids the "posterior collapse" issue which has been problematic with many VAE models that have powerful decoder, often caused by latents being ignored. Additionally, it is the first discrete latent VAE model that get similar performance as its continuous counterparts, while offering the flexibility of discrete distributions. We term our model the VQ-VAE.

Since VQ-VAE can make effective use of the latent space, it can successfully model important features that usually span many dimensions in data space (for example objects span many pixels in images, phonemes in speech, the message in a text fragment, etc.) as opposed to focusing or spending capacity on noise and imperceptible details which are often local.

Lastly, once a good discrete latent structure of a modality is discovered by the VQ-VAE, we train a powerful prior over these discrete random variables, yielding interesting samples and useful applications. For instance, when trained on speech we discover the latent structure of language without any supervision or prior knowledge about phonemes or words. Furthermore, we can equip voice from one speaker to another without changing the contents. We also show promising results on learning long term structure of environments for RL.

Our contributions can thus ve summarised as:

* Introducing the VQ-VAE model, which is simple, uses discrete latents, does not suffer from "posterior collapse" and has no variance issues.
* We show that a discrete latent model(VQ-VAE) perform as well as its continuous model counterparts in log-likelihood.
* When paired with a powerful prior, our samples are coherent and high quality on a wide variety of applications such as speech and video generation.
* We show evidence of learning language through raw speech, without any supervision, and show applications of unsupervised speaker conversion.


Related Work
=============================
あとで書く

VQ-VAE
=============================
Perhaps the work most related to our approach are VAEs. VAEs consist of the following parts: an encoder network which parameterises a posterior distribution :math:`q(z|x)` of discrete latent random variables :math:`z` given the input data :math:`x` , a prior distribution :math:`p(z)` , and a decoder with a distribution :math:`p(x|z)` over input data.

Typically, the posteriors and priors in VAEs are assumed normally distributed with diagonal covariance, which allows for the Gaussian reparametrisation trick to be used. Extensions include autoregressive prior and posterior models, normalising flows, and inverse autoregressive posteriors.

In this work we introduce the VQ-VAE where we use discrete latent variables with a new way of training, inspired by vector quantisation (VQ). The posterior and prior distributions and categorical, and the samples drawn from these distributions index an embedding table. These embeddings are then used as input into the decoder network.

Discrete Latent variables
-----------------------------------------
We define a latent embedding space :math:`e \in R^{K\times D}` where :math:`K` is the size of the discrete latent space(i.e., a :math:`K\text{-way})` categorical), and

37 wavenet
