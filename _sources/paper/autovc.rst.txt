====================================================================================================
AUTOVC: Zero-Shot Voice Style Transfer with Only Autoencoder Loss
====================================================================================================


https://arxiv.org/abs/1905.05879


.. contents:: 目次

words
======================================================================================

Deep style transfer algorithm: "deep" style transfer algorithm?

what is "zero-shot" ?

what is "style-transfer(Neural style transfer)" ?

画風変換の概念を発話スタイルの変換と同一視？

Abstract
======================================================================================
Non-parallel many-to-many voice conversion, as well as zero-shot voice conversion, remain underexplored areas.
Deep style transfer algorithms, such as GAN based and VAE based, are being applied as new solutions in this field.

However, **GAN training** is sophisticated and difficult, and there is no strong evidence that its generated speech is of good perceptual quality.

On the other hand, **CVAE training** is simple but does not come with the distribution-matching property of a GAN. 

**In this paper**, we propose a new style transfer scheme that involves only an autoencoder with a carefully designed bottleneck. 
We formally show that this scheme can achieve distribution matching style transfer by training only on a self-reconstruction loss. 
Based on this scheme, we proposed AUTOVC, which achieves state-of-the-art results in many-to-many voice conversion with non-parallel data, and which is the first to perform zero-shot voice conversion.