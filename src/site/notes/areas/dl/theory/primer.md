---
{"dg-publish":true,"permalink":"/areas/dl/theory/primer/","tags":["dl-theory"]}
---

We are interested in 3 key properties of functions:

## 1. Lipschitzness

> [! success] Defn: L-Lipschitz
> A function $F: \mathbb{R}^p \rightarrow \mathbb{R}$ is said to be $\text{L}$-Lipschitz if $\forall x, y \in \mathbb{R}^p$$$|F(x) - F(y)| \leq L \Vert x - y \Vert$$ 

* *Example:* $F(x) = x$ is 1-Lipschitz while $F(x) = x^2$ is not Lipschitz
## 2. Convexity

> [!success] Defn: Convexity 
A function $F: \mathbb{R}^p \rightarrow \mathbb{R}$ is said to be convex if $\forall x, y \in \mathbb{R}^p$ and $\forall \theta \in [0 ,1]$ $$F(\theta x + (1-x)y) \leq \theta F(x) + (1-\theta)F(y)$$A function is said to be strictly convex if the above inequality holds in the strict sense.

> [! success] Defn: Convexity
> An at least once differentiable function $F: \mathbb{R}^p \rightarrow \mathbb{R}$ is convex if $\forall x, y \in \mathbb{R}^p$$$F(x) + \nabla F(x)^{\top}(y-x) \leq F(y)$$
> 

* A differentiable convex function can be thought of as having the property that for any point $x$ in the domain, the tangent to the function at that point is below the graph of the function

> [! success] Defn: $\alpha$-Strong Convexity
> For some $\alpha > 0$, a function $F: \mathbb{R}^p \rightarrow \mathbb{R}$ is said to be $\alpha$-strongly convex if we have that $F(x) - \frac{\alpha}{2}\Vert x\Vert^2$ is a convex function

* This definition captures the intuition of having a convex function be lower-bounded by paraboloid.
* This also provides a simply mechanism for generating examples of strongly convex functions since adding $\frac{\alpha}{2} \Vert x \Vert^2$ to a convex function yields a $\alpha$-strongly convex function.

> [! success] Defn: $\alpha$-Strong Convexity
> An at least once differentiable function $F: \mathbb{R}^p \rightarrow \mathbb{R}$ is said to be $\alpha$-strongly convex if for some $\alpha > 0, (x, y) \in \mathbb{R}^p$ we have$$F(y) \geq F(x) + \nabla F(x)^{\top}(y-x) + \frac{\alpha}{2} \cdot \Vert y - x \Vert^2$$

## 3. Smoothness

> [! success] Defn: Lipschitz-Smoothness ($\beta$-Smooth or $\beta$- Lipschitz Smooth or $\beta$-Gradient Smooth)
> For some $\beta>0$ and an at least once differentiable function $F: \mathbb{R}^p \rightarrow \mathbb{R}$ its gradients should be $\beta$-Lipschitz i.e. $\forall x, y$$$\Vert \nabla F(x) - \nabla F(y) \Vert \leq \beta \Vert x - y \Vert$$

* *Example:* $F(x) = x^2$ is smooth with $\beta=2$
