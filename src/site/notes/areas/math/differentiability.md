---
{"dg-publish":true,"permalink":"/areas/math/differentiability/","tags":["analysis","optimization"]}
---

## Jacobian

> [!success] Def (Jacobian)
> 
> Let $\mathcal{F}: \mathbb{R}^d \rightarrow \mathbb{R}^p$ be a differentiable vector valued function, and $x \in \mathbb{R}^d$ some input. Then, $D \mathcal{F}(x)$ is called the **Jacobian** of $\mathcal{F}$ at $x$, and is the matrix:
> $$[D \mathcal{F}(x)]_{ij} = \frac{\partial f_i}{\partial x_j} (x) $$
> where:
> * $i = 1 \ldots p$
> * $j = 1 \ldots d$
> * $f_i$ are the component functions, i.e. $\mathcal{F} = (f_1(x) \ldots f_p(x))$
> 
> **NOTE:** $D \mathcal{F} (x)$ is a $p \times d$ matrix

## Gradient

> [!success] Def (Gradient)
> 
> Let $f: \mathbb{R}^d \rightarrow \mathbb{R}$ be a scalar function and $x \in \mathbb{R}^d$ some input. Then, the Jacobian of this function will be a row vector, i.e. $D \mathcal{F} (x) \in \mathbb{R}^{1 \times d}$. The transpose of the Jacobian is called the gradient i.e. 
> $$\nabla f(x) = [D \mathcal{F} (x)]^{\top} \in \mathbb{R}^{d \times 1}$$
> 

## Hessian

> [!success] Def (Hessian)
> 
> Let $f: \mathbb{R}^d \rightarrow \mathbb{R}$ be a twice differentiable function and $x \in \mathbb{R}^d$ some input. Then the Hessian of $f$ at $x$ is defined as:
> 
> $$[\nabla^2 f(x)]_{ij} = \frac{\partial^2 f}{\partial x_i \partial x_j} (x) \hspace{2pt} i,j = 1 \ldots d$$
> 
> **NOTE:** $\nabla^2 f(x)$ is a $d \times d$ matrix.
> 


