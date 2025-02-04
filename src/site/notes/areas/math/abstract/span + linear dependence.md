---
{"dg-publish":true,"permalink":"/areas/math/abstract/span-linear-dependence/","tags":["linear-algebra","span","subspace","vector-space"]}
---

> [!success] def (Linear Combination)
> A linear combination of $v_1 \ldots v_m \in V$ is a vector of the form
> $$a_1 v_1 + \ldots + v_m v_m$$ where $a_1 \ldots a_m \in \mathbb{F}$

---

> [!success] def (Span)
> The set of all possible linear combinations of $v_1 \ldots v_m \in V$ is called the span of vectors $v_1 \ldots v_m$. Denoted $\text{span}(v_1 \ldots v_m)$
> $$\{ a_1 v_1 + \ldots + a_m v_m | a_1 \ldots a_m \mathbb{F}  \}$$
> By convention $\text{span}(\phi) = \{ 0 \}$ 

> [!info] **Proposition:** The set $\text{span}(v_1 \ldots v_m)$ is the smallest subspace of $V$ containing $v_1 \ldots v_m$
> 
> *Proof:* let $S = \text{span}(v_1 \ldots v_m)$
> 
> 1. S in a subspace: 
> 	* $0 \in S$ because $a_1 = \ldots = a_m = 0 \, (\in \mathbb{F})$ is in the span
> 	* $S$ is closed under addition. Suppose $u, w \in S$, then $\exists a_1 \ldots a_m$ and $b_1 \ldots b_m \in \mathbb{F}$. 
> 	  $$\begin{array}{rl} u &= a_1 v_1 + \ldots + a_m v_m \\ w &= b_1 v_1 + \ldots + b_m v_m \\ u + w &= (a_1 + b_1) v_1 + \ldots + (a_m + b_m) v_m \,\,\, \in S\end{array}$$
> 	* $S$ is closed under scalar multiplication. Suppose $u \in S$. Then, 
> 	  $$\begin{array}{rl} u &= a_1 v_1 + \ldots + a_m v_m \\ \alpha u = (\alpha a_1) v_1 + \ldots + (\alpha a_m) v_m\end{array}$$
> 	  
> 	  Thus, $S = \text{span}(v_1 \ldots v_m)$ is a subspace.
>   
>   2. $S$ is the smallest subspace
>      
>      *Outline:* Show $v_1 \ldots v_m \in S$ and if $T$ is any subspace s.t. $v_1 \lodts v_m \in T$ then $s \subseteq T$.
>      
>      * For each $v_i$, $v_i = 0 v_1 + \ldots + 1 v_i + \ldots + 0 v_m$.
>      * Suppose $T$ is a subspace containing $v_1 \ldots v_m$. Since $T$ is a subspace it is closed under addition and scalar multiplication i.e. it is closed under linear combination. Thus $T$ contains all linear combinations of $v_1 \ldots v_m \implies S \subseteq T$.

* If $\text{span}(v_1 \ldots v_m) = V$ then we say $v_1 \ldots v_m$ spans $V$.
* A vector space is said to be finite dimensional if it is spanned by finitely many vectors. Otherwise, we say it is infinite-dimensional.
---
> [!success] def (Linearly Independent)
> 
> A subspace of $V$ is linearly independent iff
> $$a_1 v_1 + \ldots + a_n v_n = 0 \implies a_1 = \ldots = a_n = 0$$
> 
> By convention, $\phi$ is linearly independent.

> [!info] **Proposition:** A subspace is linearly independent iff none of the vectors is a linear combination of the other.
> 
> *Proof:* In both cases we prove the contrapositive
> 
> [=>] W.L.O.G. let $v_1$ be a linear combination of $v_2 \ldots v_m$. Thus, 
> $$\begin{array}{rl} v_1 &= a_2 v_2 + \ldots a_n v_n \\ 0 = (-1)v_1 +  a_2 v_2 + \ldots a_n v_n\end{array}$$
> Thus, there is a non-trivial way to represent 0.
> 
> [<=] Suppose $v_1 \ldots v_n$ are linearly dependent. Then there exists $a_1 \ldots a_n$ not all zero s.t. $0 = a_1 v_1 + \ldots a_n v_n$. W.L.O.G. $a_1 \neq 0$
> $$v_1 = -\frac{a_2}{a_1} v_2 \ldots - \frac{a_n}{a_1}$$
> Thus one of the vectors is a linear combination of the other.

> [!info] Lemma (Linear Independence Lemma)
> 
> Suppose $v_1 \ldots v_n$ is a linearly dependent set $V$. Then $\exists j \in [1, n]$ s.t. the following hold:
> * $v_j \in \text{span}(v_1 \ldots v_{j-1})$
> * If $v_j$ is removed, the remaining span equals the original span

