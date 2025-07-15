=================================================================================================================================================================================================
VQMIVC: Vector Quantization and Mutual Information-Based Unsupervised Speech Representation Disentanglement for One-shot Voice Conversion
=================================================================================================================================================================================================


https://arxiv.org/abs/2106.10132


.. contents:: 目次

words
======================================================================================
One-shot Voice Conversion(One-shot VC): It performs conversion across arbitrary speakers with only a single target-speaker utterance for reference.
Vector Quantization(VQ): 
Mutual Information (MI): 

what is "Speech Representation" ?

Speech Representation Disentanglement(SRD): 



Abstract
======================================================================================
One-shot VC can be effectively achieved by speech representation disentanglement.

**Existing work** generally ignores the correlation between different speech representations during training, which causes leakage of content information into the speaker representation and thus degrades VC performance.

**To alleviate this issue** , we employ vector quantization (VQ) for content encoding and introduce mutual information (MI) as the correlation metric during training, to achieve proper disentanglement of content, speaker and pitch representations, by reducing their inter-dependencies in an unsupervised manner. 

**Experimental results** reflect the superiority of the proposed method in learning effective disentangled speech representations for retaining source linguistic content and intonation variations, while capturing target speaker characteristics.
In doing so, the proposed approach achieves higher speech naturalness and speaker similarity than current state-of-the-art one-shot VC systems.
