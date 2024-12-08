---
{"dg-publish":true,"permalink":"/areas/ml/vl-ms/"}
---

#multimodal #vision-language-models 

## Boosting Performance

* Chen and Wang, 2022 (Pali) report a stronger increase in performance by scaling the size of the vision encoder compared to scaling the size of the language model even though scaling the vision encoder leads to a smaller parameter count increase.

## Data
* OBELICS: Open dataset of interleaved image-text documents. It has been reported that interleaved image-text documents are the biggest driving factor in increasing the performance on visual question answering (VQA) tasks.
* LAION COCO: Higher quality COCO consisting of synthetic captions generated using a model trained on COCO. Source: [[areas/ml/papers/arXiv-2405.02246\|arXiv-2405.02246]]

| **Captions** | **Avg. Score** |
| :----------: | :------------: |
|  Alt-texts   |      49.8      |
|  Synthetic   |    **52.9**    |
* It has been shown that a large proportion of mistakes of VLMs stem from their failure to accurately extract text in images or documents. Dataset should be complemented with texts written with a wide variety of fonts and colors and on diverse backgrounds.
* Adding PDF documents helps the model learn to read text from images.

| **OCR Data** | **Resolution** | **Performance on DocVQA** |
| :----------: | :------------: | :-----------------------: |
|     w/o      |      384       |           22.6            |
|     w/o      |      768       |           42.9            |
|      w       |      768       |         **49.9**          |

* Cauldron: a massive collection of 50 vision-language datasets, covering a wide range of tasks: general visual question answering, counting, captioning, text transcription, document understanding, chart/figure understanding, table understanding, visual reasoning, geometry, spotting differences between 2 images or converting a screenshot to a functional code.

## Training Strategies

### Pre-Training
* [[areas/ml/papers/arXiv-2405.02246\|arXiv-2405.02246]]: Breakdown pre-training into two parts. First train at smaller image resolutions and larger batch sizes for image-text documents and/or image-text pairs. Then decrease batch size and train with PDFs.
### Instruction Tuning
* For multiple question/answer pairs per image, concatenate the pairs into a multi-turn conversations.
* Add text-only instruction datasets
## Benchmarks

* VQAv2 for general visual question answering
* TextVQA for OCR
* OKVQA for external knowledge
* COCO captioning