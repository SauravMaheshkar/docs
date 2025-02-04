---
{"dg-publish":true,"permalink":"/areas/math/abstract/vector-space/","tags":["linear-algebra","vector-space"]}
---

 > [!success] def (Vector Space)
 > A vector space over $\mathbb{F}$ is a set $V$ with two operations:
 > * **addition:** $u,v \in V$ then $u + v \in V$
 > * **scalar multiplication:** $\lambda \in \mathbb{F}, u \in V$ then $\lambda v \in V$
 >   
 > Satisfying the following operations:
 >   1. [$+$] For all $u, v \in V$, $u +v = v + u$ (*commutativity*)
 >   2. [$+$] For all $u, v, w \in V$, $(u + v) + w = u + (v + w)$ (*associative*)
 >   3. [$+$] $\exists 0 \in V$ s.t. $\forall v \in V$ $0 + v = v + 0 = 0$ (*additive identity*)
 >   4. [$+$] $\forall v \in V$ $\exists w \in V$ s.t. $v + w = w + v = 0$ (*additive inverse*)
 >   5. [$\times$] $a, b \in \mathbb{F}$ $v \in V$ $(ab)v = a(bv)$ (*associative*)
 >   6. [$\times$] $v \in V$, $1v = v$ (*multiplicative identity*)
 >   7. [$\times$] $a, b \in \mathbb{F}$ $u,v \in V$ (*distributive*)
> 	    *  $a (u+v) = au + av$
> 	    * $(a+b)v = av + bv$

 * Elements of a vector space are called vectors/points
 * **Ex:** $\mathbb{F}^n$ is a vector space under addition and scalar multiplication
 
> [!info] **Proposition:** A vector space has a unique additive identity
> 
> *Proof:* Let $0, 0'$ be two additive identities of $V$
> $$0 = 0 + 0' = 0'$$

> [!info] **Proposition:** Additive inverses are unique
> 
> *Proof:* Let $v \in V$. Suppose $w, w' \in V$ be two additive inverses of $V$
> 
> $$w = w + 0 = w + (v + w') = (w + v) + w' = 0 + w' = w'$$

* If $v \in V$, the additive inverse of $v$ is denoted by $-v$

> [!info] **Proposition:** For every $v \in V$ $0v = 0$
> 
> *Proof:* Note here $0 \in \mathbb{F}$. 
> 
> $$\begin{array}{rl} 
> (0 + 0)v &= 0v + 0v \\ 
> 0v &= 0v + 0v \\
> 0 &= 0v
> \end{array}$$

> [!info] **Proposition:** For every $a \in \mathbb{F}$ $a0 =0$
> 
> *Proof:* $$\begin{array}{rl} a(0 + 0) &= a0 + a0 \\ a0 &= a0 + a0 \\ 0 &= a0 \end{array}$$

> [!info] **Proposition:** For every $v \in V$ $(-1)v = -v$
> 
> *Proof:* Note here $-1$ is a scalar and $-v \in V$
> 
> $$\begin{array}{rl} (-1)(v+0) &= (-1)(v) + (-1)(0) \\ &= -v \end{array}$$





 
 
 
 