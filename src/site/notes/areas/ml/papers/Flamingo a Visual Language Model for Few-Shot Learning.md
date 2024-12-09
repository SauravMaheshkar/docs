---
{"dg-publish":true,"permalink":"/areas/ml/papers/flamingo-a-visual-language-model-for-few-shot-learning/"}
---

#vision-language-models #multimodal 

> [! tip]- Key Takeaways
> * Set SOTA in few-shot learning on a range of open-ended vision and language tasks
> * Were able to surpass fine-tuned SOTA, despite using orders of magnitude less task-specific training data

* Flamingo takes inspiration from recent work on large language models (LMs) which have been shown to be good few-shot learners (prompting). 
* Flamingo was one of the first models that showed image or video tasks can be cast as text prediction problems with visual input conditioning provided the model can ingest a multimodal input prompt wherein images and/or videos are interleaved with text.
* Flamingo is able to ingest high-resolution images or videos thanks to a Perceiver-based architecture that can produce a **small fixed number of visual tokens per image/video**, given a large and variable number of visual input features.
* Introduce a cross-attention based architecture that efficiently accepts arbitrarily interleaved visual data and text as input and generates text in an open-ended manner.
## Modelling
* Chinchilla + NFNet (F6)
* A vision encoder (Normaliser Free ResNet) feeds image representations into a Perceiver based resampler that outputs a fixed number of visual tokens, thereby reducing the computational complexity of the vision-text cross-attention mechanism.
* These visual tokens are used to **condition the frozen LM** using freshly initialised cross-attention layers that are interleaved between the pre-trained LM layers.
* Flamingo models the likelihood of text $y$ conditioned on interleaved images and videos $x$ as follows: $$\large p(y|x) = \Pi_{l=1}^{L}p(y_l | y_{<l}, x_{\leq l})$$where $y_l$ is the $l$-th language token, $y_{< l}$ are the preceding tokens and $x_{\leq l}$ are the set of images/videos preceding token $y_l$ in the interleaved sequence.
* This makes it natural for Flamingo to be used for in-context few-shot learning.
* This "image-causal" modelling is obtained by masking the full text-to-image cross-attention matrix, limiting which visual tokens the model sees at each text token (the model only attends to the visual tokens of the image that appeared just before it in the interleaved sequence, rather than to all previous images).
---
> [!info] The authors also report that Flamingo models can be adapted to a task by fine-tuning their weights. 

