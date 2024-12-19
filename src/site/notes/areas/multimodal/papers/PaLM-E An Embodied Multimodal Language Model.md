---
{"dg-publish":true,"permalink":"/areas/multimodal/papers/pa-lm-e-an-embodied-multimodal-language-model/"}
---

#multimodal 
> [!tip]- Key Takeaways
> * Demonstrate that a generalist, transfer-learned, multi embodiment decision-making agent can be trained via mixing in embodied data into the training of a multimodal LLM
> * introduce novel architectural ideas such as neural scene representations and entity-labelling multimodal tokens.
* Inputs such as images and state estimates are embedded into the same latent embedding as language tokens and processed by the self-attention layers of a Transformer-based LLM in the same way as text.
* The main idea is to therefore inject tokens from images and sensor modalities into the language embedding space of a pre-trained language model.
* PaLM-E is trained to generate plans directly without relying on auxiliary models for grounding. This enables direct integration of the rich semantic knowledge stored in pre-trained LLMs into the planning process.