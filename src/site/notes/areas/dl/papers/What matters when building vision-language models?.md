---
{"dg-publish":true,"permalink":"/areas/dl/papers/what-matters-when-building-vision-language-models/"}
---

#vision-language-models #multimodal

> [!info]- Key Takeaways
> * Attempt to justify design choices in VLM architecture design

* The development of open LLMs enables researchers to leverage unimodal pre-trained models to create VLMs.
* The literature reveals different disparate design choices which are not justified experimentally. For example, [[areas/dl/papers/Flamingo a Visual Language Model for Few-Shot Learning\|Flamingo]] and Idefics(1) use a interleaved Transformer-based cross-attention strategy to fuse the image information into the language model while BLIP(2) and Visual instruction tuning concatenate the sequence of image hidden states with the sequence of text embeddings, and feed the concatenated sequence to the language model.
* Identify two areas in which models differ
	* *Model Architecture:* how vision and text is fused 
		* **Cross-Attention:** images encoded through the vision backbone are injected at different layers within the language model by interleaving cross-attention blocks in which the text cross-attends to the image hidden states.
		* **Fully-Autoregressive:** output of the vision encoder is directly concatenated to the sequence of text embeddings, and the entire sequence is passed as input to the language model. Thus the input to the ***language*** model are ***language*** and ***visual*** tokens.
	* *Multimodal training procedure*
* Training a VLM often involves initialising new parameters to connect a pre-trained text and vision backbone. These parameters are then tuned during the pre-training phase
* Pre-Training stage is followed by an instruction fine-tuning stage in which the model learns from task-oriented samples
* Idefics(2) uses a fully regressive architecture.
### Are all pre-trained backbones equivalent for VLMs?
Under a fixed size of pre-trained backbones, for cross-attention based models changing the backbones to a better one (in their own respective modality) leads to a performance boost, i.e. switching to a better performing language model under a given budget. The more significant improvement comes from switching to a better language model.
### How does the fully autoregressive architecture compare to the cross-attention architecture?
When attempting to train both unimodal backbones as well as new parameters the authors report that the loss often diverges and leads to unstable training runs. They report that using LoRA to adapt the parameters of the unimodal backbones while using standard fine-tuning for the new parameters yields more stable training runs.

|          **Architecture**           | **Backbones Training** | **Avg. Score** |
| :---------------------------------: | :--------------------: | :------------: |
| Fully autoregressive + no Perceiver |         Frozen         |      51.8      |
|        Fully autoregressive         |         Frozen         |      60.3      |
|           Cross-Attention           |         Frozen         |      66.7      |
|           Cross-Attention           |          LoRA          |      67.3      |
|        Fully autoregressive         |          LoRA          |      69.5      |

* Cross-Attention models perform better under frozen backbones than fully-autoregressive backbones
* Autoregressive backbones perform better with more degrees of freedom
* LoRA adaptation can be done at a fraction of GPU cost and can be merged back at no additional inference cost
### Note: Number of visual tokens
Previous models simply pass the entire output to the vision encoder to the modality projection layers without any pooling based on prior works. However this can drastically increase the sequence length increasing the computational cost of training and making in-context learning more challenging (by increasing the context window)

The authors therefore propose to use a perceiver based resampler as a form of trainable attention based pooling (**number of queries = number of visual tokens**). They show that this boosts performance + reduces the number of visual tokens (thereby aiding in-context learning).

> [!warning] 
> * Authors report no gains when using more than 64 visual tokens.
> * Authors conduct ablation tests on the perceiver layer but find no statistically significant differences when increasing the number of layers. They resort to 3 layers as a caution.

### Preserving Aspect Ratio and Image Resolution
Vision encoders are typically trained on fixed size square images. Resizing an image before encoding changes its aspect resolution and leads to reduced quality which affects downstream performance (changing the aspect ratio of an image with text would hinder a VQA task).
The authors therefore interpolate the pre-trained positional embeddings to allow for a higher resolution and train the vision encoder with LoRA parameters to adapt to these modifications.
### Image Splitting?
The authors employ a image splitting used in prior works during the instruction fine-tuning stage wherein a image is split into 4 sub-images and then resized to the original image size. Thus each image becomes a list of 5 images: 4 crops and the original image. (64 x 4 + 64 = 320 tokens). This comes in helpful for tasks that require sufficiently high resolution to extract the text in an image.

## Training
 1. Breakdown pre-training into two parts. First train at smaller image resolutions and larger batch sizes for image-text documents and/or image-text pairs. Then decrease batch size and train with PDFs.
 2. Instruction-tune the base model using DoRA.