=========================================================================================================
One-shot Voice Conversion by Separating Speaker and Content Representations with Instance Normalization
=========================================================================================================


https://arxiv.org/abs/1904.05742


.. contents:: 目次

words
======================================================================================

what is "supervision" ?

Instance Normalization(IN):

Abstract
======================================================================================
Recently, voice conversion (VC) without parallel data has been successfully adapted to multi-target scenario in which a single model is trained to convert the input voice to many different speakers.
However, such model suffers from the limitation that it can only convert the voice to the speakers in the training data, which narrows down the applicable scenario of VC. 

**In this paper**, we proposed a novel one-shot VC approach which is able to perform VC by only an example utterance from source and target speaker respectively, and the source and target speaker do not even need to be seen during training. This is achieved by disentangling speaker and content representations with instance normalization (IN). 

Objective and subjective evaluation shows that our model is able to generate the voice similar to target speaker. 
In addition to the performance measurement, we also demonstrate that this model is able to learn meaningful speaker representations without any supervision.
