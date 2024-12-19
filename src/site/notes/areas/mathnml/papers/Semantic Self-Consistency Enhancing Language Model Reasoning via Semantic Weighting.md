---
{"dg-publish":true,"permalink":"/areas/mathnml/papers/semantic-self-consistency-enhancing-language-model-reasoning-via-semantic-weighting/"}
---

#self-consistency #re-rank
The authors note the suboptimal performance of LLMs for reasoning tasks in domains such as mathematics. They build on top of previous work in the self-consistency framework wherein sampling and ensembling multiple model responses along with Chain-of-Thought Prompting improves model performance across closed-answer reasoning tasks.

They note that standard methods based on this framework fail to utilise the semantic information detailed in the step-by-step reasoning paths and propose two techniques to add a **separate semantic weighting step to rerank results**.
1. Use **semantic vector embeddings** in combination with self-consistency to group model outputs, aiding in the identification of similar responses.
2. Introduce a **semantic filtering mechanism** that discards degenerate or hallucinated outputs.
---
### Datasets
* AQuA-RAT
* SVAMP
* StrategyQA
---
## Models Under Use
### Generators
These are LLMs that produce sequences such as text, code or reasoning steps. The paper benchmarks, GPT-3.5, GPT-4o mini, Llama 2, Llama 3 and Mistral 7B.
### Featurizers
These transform sequences into numerical representations that summarise their meaning for analysis.
 * RoBERTa for StrategyQA
 * SciBERT for AQuA-RAT and SVAMP
---
## Method
The overall workflow is as follows:
* **Generate Candidate Response:** Given a query of few-shot examples, generate $n$ samples based on CoT prompting
* **Embed Reasoning Paths into embeddings**: Represent each rationale/reasoning path as a vector embedding using "featurizers". This single embedding captures the overall semantic content
* **Enforcing Semantic Consistency/Outlier Removal**: Apply weighing and aggregation to emphasise semantically consistent paths or remove outliers.

### Centroid Proximity Weighting (CPW)
* Compute centroid of embeddings
* calculate normalised distance from centroid
* assign weights inversely proportional to normalised distance
* total weight for each unique output is the sum over all weights
* Take the output with the highest total weight

### Semantic Consensus Weighing (SCW)
* Compute cosine similarity between all embeddings
* Aggregate score for each embedding as the sum of cosine similarity
* Select highest consensual response

### Outlier Removal
The author evaluate traditional methods such as K-nearest neighbour, Isolation forest and Support Vector Machines

--- 
## Results
* Generally SCW outperforms CPW
* Using outlier removal generally leads to increased performance however results show deviations between the different configurations 