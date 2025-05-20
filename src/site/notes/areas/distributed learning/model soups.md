---
{"dg-publish":true,"permalink":"/areas/distributed-learning/model-soups/","tags":["distributed-learning"]}
---

 * fine tuned models lie in a single low error basin
 * authors show that averaging the weights of multiple models fine-tuned with different hyper parameter configurations often improves accuracy and robustness.

* the best single model on a held-out validation set may not have the best performance on OOD 
* creating a model soup i.e. averaging the weights of models fine-tuned independently requires no additional training (gradient-based or otherwise) and adds no cost at inference times
* model soups often outperform the best individual model on both in-distribution and natural distribution shift tests
* model soups can approach the performance of ensembling, with no additional computational cost or memory relative to a single model during inference
* greedy soups i.e. where models are sequentially added to the soup if they improve accuracy on held-out data and outperforms uniform averaging. Greedy soups avoid adding in models which may lie in a different basin of the error landscape.
	* before running this procedure the models are sorted by their performance on the validation set so that the greedy soup is no worse than the best individual model

* For hyper parameters $h_1 \ldots h_k$ let $\theta_i = \text{FineTune}(\theta_0, h_i)$ where $\theta_0$ are the pre-trained weights.
	* uniform soup: $\theta_S = \frac{1}{|S|}\sum_i \theta_i$ where $S = \{ 1 \ldots n \}$

* **Results**
	* interpolating the weights of two fine-tuned solutions can improve accuracy compared to individual models
	* more uncorrelated solutions may lead to higher accuracy on the linear interpolation path
	* ensemble performance is correlated to soup performance for moderate and small learning rates. Overall, ensembles achieve higher accuracy on ImageNet while the reverse is true on distribution shifts
	* for any number of models, the greedy soup outperforms the best single model on both ImageNet and OOD
	* greedy soup is better than uniform soup on ImageNet and comparable on OOD. 