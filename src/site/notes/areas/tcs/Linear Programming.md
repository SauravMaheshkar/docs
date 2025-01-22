---
{"dg-publish":true,"permalink":"/areas/tcs/linear-programming/","tags":["comp36111"]}
---

> [! NOTE] ILP Feasibility
> **Given:** a system of linear inequalities $\mathcal{E}: A\vec{x} \leq \vec{b}$ with integer coefficients
> **Return:** Yes if $\mathcal{E}$ has a solution over $\mathbb{N}$ and no otherwise

### ILP is in NPTime

* A system of linear equations $A \vec{x} = \vec{0}$ is called **homogeneous**. The solution $\vec{x} = \vec{0}$ is the **trivial solution**. 
* A point-wise ordering is defined on vectors as:$$(a_i, a_2, \ldots, a_n) \preceq (b_1, b_2, \ldots, b_n)  \rightarrow a_i \leq b_i, \forall i$$
* Let $\vec{x}^*$ be the minimal non-trivial solution of $A \vec{x} = \vec{0}$. On the line joining $\vec{0}$ to $\vec{x}^*$ we have a sequence of (possibly non-integer) solutions $$ \vec{0} = \vec{v_0} \preceq \ldots \preceq \vec{v_t} = \vec{x}^*$$
* For every k ($0 < k \leq t$) $\exists v_k'$ s.t. $v_k' - v_k$ is at-most 1
* Let $w_k = A v_k$, we have $$w_k = A(v_k - v_k')$$
* Every such $w_k$ will have absolute value $M + \ldots + M \leq Mn$ and there will be $n$ such $w$'s.
* Thus t is bounded by $$t < (2Mn + 1)^m$$where $2$ is for possible negative values, $1$ is the extra value for $0$.
* For non homogenous equations we just convert it into one$$\begin{pmatrix}a & -\vec{b}\end{pmatrix}\begin{pmatrix}\vec{x} \\ y\end{pmatrix} = 0$$
* We can use the same reasoning but restrict solutions in which $y$ is 1.

Thus ILP-feasibility is in NP-Time since we have a polynomial time algorithm to verify a solution.

---

### ILP is NPTime-Hard

We want to show that a system of linear equations has a solution if a set of clauses say $\Gamma$ is satisfiable.

* For every propositional variable $x_p$ we add a equation $x_p + x_{\neg p} = 1$
* For every clause $\gamma = (l_1 \lor l_2 \lor l_3)$ we add variables $y_1^\gamma, y_2^\gamma, z_1^\gamma, z_2^\gamma$ and the following equations $$\begin{array}{ll}x_{l_1} + x_{l_2} + x_{l_3} + y_1^\gamma + y_2^\gamma = 3 \\ y_1^\gamma + z_1^\gamma = 1 \\ y_2^\gamma + z_2^\gamma = 1\end{array}$$
* This is a valid reduction from 3SAT to ILP-feasibility
