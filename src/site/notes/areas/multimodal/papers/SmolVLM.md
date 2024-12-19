---
{"dg-publish":true,"permalink":"/areas/multimodal/papers/smol-vlm/"}
---

#multimodal #vision-language-models 

## Modelling
* Llama 3.1 8B + SmolLM2 1.7B
* more aggressively compress the patched visual information by reducing the information 9x using the pixel shuffle strategy, compared to 4x with [[areas/multimodal/papers/Building and better understanding vision-language models insights and future directions\|Idefics3]].
* use patches of 384x384, instead of 364x364, because 384 is divisible by 3, essential for pixel shuffle strategy
* change the vision backbone to use shape-optimised SigLIP with patches of 384x384 pixels and inner patches of 14x14.
* SmolLM2’s pre-training context window is insufficient for VLMs. Images are encoded into many tokens, and we wanted to support multiple images. To address this, the authors extended it to 16k tokens by increasing the RoPE base value from 10k to 273k, following the guidelines in [“Scaling Laws of RoPE-based Extrapolation”](https://arxiv.org/abs/2310.05209).