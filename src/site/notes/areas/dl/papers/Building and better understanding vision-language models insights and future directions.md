---
{"dg-publish":true,"permalink":"/areas/dl/papers/building-and-better-understanding-vision-language-models-insights-and-future-directions/"}
---

#multimodal #vision-language-models
Building on top of [[areas/dl/papers/What matters when building vision-language models?\|What matters when building vision-language models?]]

Introduce Docmatrix a synthetic dataset for document understanding. Generating high-quality synthetic data is relatively straightforward if we reframe the problem as one of LLM-based data generation rather than relying solely on VLMs. Standard OCR tools can accurately extract text from PDF documents, and an LLM can then be used to generate QA pairs based on this text. Text transcriptions from the English PDFA dataset are used to generate QA pairs using Phi-3-small. The authors report that training on a small portion of Docmatix leads to a nearly 20% relative improvement on DocVQA.

### Is a vision encoder really necessary?
Instead of employing a vision encoder, Fuyu (Bavishi et al., 2023) feeds image patches directly into the language model after applying a simple linear projection to adjust the dimensions. This architecture offers two main advantages: 
* it is independent of another pre-trained model
* preserves all the information from the original image. 
  
The latter point is crucial since the original image details might be necessary for accurately responding to the prompt. On the other hand, a **pre-trained vision encoder transforms an image into a representation that is independent of the user’s prompt**. As a result, vision encoders aim to capture as much information as possible and can still miss details pertinent to the prompt. 

VisFocus (Abramovich et al., 2024) attempts to address this drawback by incorporating the user’s prompt into the vision encoder. However, this approach is less natural in interleaved image-text conversations, where prompts may refer back to previous questions. Moreover, handling image representation within the language model might decrease its performance on text-only benchmarks. However most VLMs are still not evaluated on text-only benchmarks, making it unclear whether omitting a vision encoder affects text benchmark performance. This approach has not been tested yet with an efficient pooling strategy that does not significantly reduce information by operating directly on raw pixels.

## Idefics 3
* VLM based on Llama 3.1 + SigLIP-SO400M
* Replace the perceiver resampler of [[areas/dl/papers/What matters when building vision-language models?\|Idefics 2]] with a simple pixel shuffle strategy. This acts as a pooling technique that reduces the number of image hidden states by a factor of 4, encoding each image up to 364x364 pixels into 169 visual tokens.
* Utilise image-splitting during both training and inference, where a given image is divided into a matrix of tiles where each tile is processed separately. To avoid losing positional information a text token ‘\n‘ is added after each row of tiles and the original image is added to the sequence of tiles to provide the model with the complete image in its entirety.