---
{"dg-publish":true,"permalink":"/areas/distributed-learning/diloco/","tags":["distributed-learning","diloco"]}
---

* arxiv: https://arxiv.org/abs/2311.08105
---
* the current paradigm poorly leverages heterogenous computing that might have different speed and topology.

> [! note] It is difficult to locate and tightly synchronise a large number of accelerators 

* In Federated Learning, there are $k$ workers, each operating on their own island of devices, each consuming a certain of partition of the data, and each updating a model replica. Such workers perform some amount of work locally, and then exchange gradients every $H$ steps to get their model replica back in sync.

```python
for outer_step in range(T):
	for worker in range(k):
		local_param = params[outer_step-1]
		for inner_step in range(H):
			loss = model(shard_i, local_param)
			local_gradients = inner_opt.step(local_param, grad_loss)

	delta_param = avg(params[outer_step-1], local_param)
	params[outer_step] = outer_opt.step(params[outer_step-1], delta_param)
```

* **Method:**
	* $k$ workers each capable of training a model replica and $k$ shards of data, one for each worker
	* *Outer Optimisation ($T$ outer steps):* At each outer step, outer gradients from each worker (the delta in parameter space) are gathered, averaged and sent to an outer optimiser to update the shared copy of parameters. This shared copy is then re-dispatched to each local worker
	* *Inner Optimisation ($H$ inner steps):* each worker performs independently and in parallel it own optimisation using an inner optimiser. Each worker samples data from its own shared and updates its own local copy of parameters.
	* In total a worker trains for $N = T \times H$ steps

* When the outer optimiser is SGD its equivalent to Federated Averaging. If the total number of outer optimisation steps is 1 then DiLoCo reduces to souping. If the number of inner optimisation steps is set to 1 and the inner optimiser is set to SGD, DiLoCo is equivalent to large-batch training with data-parallelism.

* DiLoCo setup: 
	* large number of inner steps
	* AdamW as the inner optimiser
	* SGD with Nesterov Momentum for outer optimiser
	* 1024 sequence length
	* 512 batch size
	* pre-trained for 24,000 steps
	* outer learning rate as 0.7 and momentum as 0.9

> [! note] since we decay the inner learning rate and the outer gradient gets naturally smaller over the course of training we don't need to decay the outer learning rate

* Ablations:
	* robust to the number of pre-training steps, even random initialisation leads to acceptable performance
	* communicating more frequently improves generalisation performance. However, communicating more than 500 steps leads to diminishing results and performance degradation setup is mild up to 1000 inner steps.
	* robust to data regime (i.i.d vs non i.i.d)
	* increasing the number of replicas improves generalisation performance but with diminishing returns when there are more than 8 workers (similar results with iid/non-iid i.e. nothing to do with data distribution)
	* monotonic performance improvement as the model size increases
	* poor performance on using SGD and Adam as outer optimiser
	* **Hypothesise** that Nesterov gradient correction is helpful with outer gradient that spans hundreds of inner training steps.
	* total amount of compute given to DiLoCo determines ultimate generalisation ability. DiLoCo is further robust to how the budget is spread over time. (doubling and halving compute yields similar performance)
	* higher probability of dropping outer gradients results in more unstable learning (with transient spikes in perplexity). However even in the extreme non iid case wherein each replica has a 50% probability of dropping communication, the degradation of perplexity is acceptable.

