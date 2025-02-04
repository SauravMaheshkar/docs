---
{"dg-publish":true,"permalink":"/areas/math/abstract/subspace/","tags":["linear-algebra","vector-space","subspace"]}
---

> [!success] def (subspace)
> 
> A subset $U \subseteq V$ is a subspace iff $U$ is also a [[areas/math/abstract/vector space\|vector space]] using the same addition and scalar multiplication as $V$

> [!info] **Proposition:** A subset $U \subseteq V$ is a subspace iff
> 1. $0 \in U$ (*additive inverse exists*)
> 2. $u,v \in V$ then $u + v \in U$ (*closed under addition*)
> 3. If $\alpha \in \mathbb{F}$ and $u \in U$ then $\alpha u \in U$ (*closed under scalar multiplication*)
>    
> ---
> 
> *Proof:* [=>] If $U$ is a subspace then it is a vector space (def) thus 2 and 3 are automatic
> 
> But we should check that $0_U = 0_V$. Note however
> $$0 \cdot 0_U = 0_V$$ 
> (0 is a scalar here). Because $U$ is closed under scalar multiplication, $0_V \in U$. Also $0_V$ is an additive identity of $U$. By uniqueness of additive identity $0_V = 0_U$
> 
> [<=] Suppose $U$ satisfies 1, 2 and 3. If $u \in U$ then $(-1)\cdotu = -u \in U$ using 3. Thus $U$ contains a additive inverse. The rest of the properties follow since addition and scalar multiplication are inherited from $V$




