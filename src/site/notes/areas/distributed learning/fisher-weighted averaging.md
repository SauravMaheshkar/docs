---
{"dg-publish":true,"permalink":"/areas/distributed-learning/fisher-weighted-averaging/","tags":["distributed-learning"]}
---

> [! important] Key Insight
> Model Merging can be seen as choosing parameters that approximately maximise the joint likelihood of the posteriors of the models' parameters
> 
> * With this perspective computing a simple average of the models' parameters corresponds to making an isotropic gaussian approximation of their posteriors
> * develop an alternative procedure based on the Laplace approximation where each models' posterior is approximated as a gaussian distribution whose precision matrix corresponds to its **Fisher information**

> How should we transfer knowledge and capability across trained models ??

* Transfer Learning (additional gradient-based training):
	* CON: Improvements to ancestor models cannot be passed down to descendants, instead one must restart the whole process from the improved ancestor model throwing away previous work
	* CON: If we gain access to a checkpoint that has been fine-tuned on a useful intermediate task, we must again throw away previous work and fine-tune from the intermediate task checkpoint
	* CON: can only transfer information from a single model

* authors view merging models by averaging parameters as **isotropic merging**. Viewing merging as maximising the joint likelihood of posteriors suggests that a better estimate of the posterior distribution can be constructed.

* **Method:** setting each merged parameter value to a weighted value of the corresponding parameter values from the original models, with the weighting for each parameter determined by its Fisher information. In addition model-level weighings are added as hyper-parameters to set the relative importance of each model
	* *Isotropic Merging*: Given $M$ trained models with parameters $\theta_1, \ldots , \theta_M$ we want to find parameters $\theta$ that maximise the joint likelihood of the posterior distributions of the $M$ models. If the posterior of each model is approximated via an isotropic gaussian with mean set to the models' parameters, this can be written down as an optimisation problem as:$$\theta^* = \arg \max_{\theta} \sum_i \log p(\theta | \theta_i I)$$This has a closed form solution given by:$$\theta^* = \frac{1}{M} \sum_i \theta_i$$ i.e. an average of the model parameters.
	* *per-model weights*: one can also add model-specific scalar hyper-parameters s.t. the optimisation problem takes the form$$\theta^* = \arg \max_\theta \sum_i \lambda_i \, \, p(\theta|\theta_i I)$$given $\sum \lambda = 1$
	* *Laplace approximation*: the authors approximate the models' posterior as a gaussian approximation of the form $\mathcal{N}(\theta, H^{-1})$ where $H$ is the hessian matrix and $\theta$ are the model parameters. **authors assume parameters of a trained model are a local maximum of the posterior**. It can be shown that precision matrix of the Laplace approximation is given by the Fisher Information Matrix of the network. A full fisher matrix takes $O(|\theta|^2)$ memory to store and quickly becomes impractical for all but the smallest models. The authors use the diagonal of the fisher matrix as an approximation of the full fisher matrix. Computing the fisher matrix requires $N$ per example gradients. Thus computing the diagonal fisher takes roughly the same computational cost as training on $N$ examples.$$\theta^* = \arg \max_\theta \displaystyle\sum_{i=1}^{M} \lambda_i \,\, \log p(\theta |\theta_i F_i)$$ which as the closed form solution$$\theta^{*(j)} = \displaystyle \frac{\sum \lambda_i F_i^{(j)} \theta_i^{(j)}}{\sum \lambda_i F_i^{(j)}} \hspace{2em} j = 0 \ldots |\theta|$$Intuitively this can be thought as computing a weighted average of the parameter values of each model where the weighting is done according to each parameter's fisher information. *since fisher information is a local property of a single parameter value, fisher merging might be less performant when applied to models whose parameters are far apart in parameter space*
	* In many cases some parameters don't appear in all of the models, this is handled by only merging the shared body parameters keeping task specific heads unchanged.
* **Results**:
	* Compared to ensembling (requires outputs of all M models, thereby increasing computational cost by a factor of M) fisher merging outperforms isotropic merging in all cases and attains comparable performance to prediction ensembling
	* fisher merging seems to generally improve IID accuracy compared to isotropic merging
	* performing gradient-based intermediate task training hurts on some datasets, whereas merging always helps. fisher merging gets comparable or better performance than isotropic merging with the largest gap being observed when using MNLI as the intermediate task. On the other hand, merging performs worse than standard gradient-based training when using MNLI as the donor task.
* fisher matrix only needs to be computed once and can be reused for subsequent merges, which amortises the most expensive step in merging.
* computing the fisher matrix over fewer examples could further reduce computational cost without sacrificing a great deal of accuracy.
* **comparison with distillation**
	* ==methods such as distillation represent knowledge solely through the outputs of the model. The knowledge contained within the parameters of a network will necessarily be greater than the knowledge contained in the output.==
	* merging has an efficient and closed form solution while distillation requires iterative gradient-descent based training