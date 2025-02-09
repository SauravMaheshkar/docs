---
{"dg-publish":true,"permalink":"/areas/math/abstract/valenza-groups/","tags":["group-theory","valenza"]}
---

* A **magma** $\langle S,* \rangle$ is a set $S$ together with an operation $*$
* An associative magma is called a **semi-group**
* A semi-group with an identity group is called a **monoid**
* A **group** $\langle G, * \rangle$ is a monoid in which every element is invertible, also note
	* the operation $*$ is associative
	* there exists an element $e \in G$ which is an identity for $G$
	* for every $s \in G$ $\exists$ $t \in G$ s.t. $s * t = t * s = e$

> [!info] A commutative group with operation $+$ is called an additive group

---

> [!success] Cancellation Laws
> Let $G$ be a group. Then for $s, t, u \in G$
> $$\begin{array} (st = su \implies t = u \\ st = ut \implies s = u \end{array}$$

*Proof:* $$\begin{array}{rl} st &=su \\ s^{-1}(st) &= s^{-1}(su) \\ (s^{-1} s)t &= (s^{-1}s)u \\ et&=eu \\ t &= u  \end{array}$$
> [!success] Uniqueness of Identity
> Let $G$ be a group. Then the identity element $e \in G$ is unique

*Proof:* Let $e, e'$ be two identities of $G$
$$e = e e' = e'$$

> [!success] Uniqueness of Inverse
> Let $G$ be a group. For every $s \in G$, there exists a unique $t \in G$ s.t. $st = e = su$

*Proof:* Let $t, t'$ be two inverses of $s$.
$$st = e = st' \implies t = t'$$

> [!info] Let $G$ be a group. If $s, t \in G$ with $st = e$, then $s = t^{-1}$ and $t = s^{-1}$

*Proof:* 
$$\begin{array}{rl} st &= e \\ s^{-1}(st) &= s^{-1} \\ (s^{-1}s)t &= s^{-1} \\ t &= s^{-1}  \end{array}$$
> [!info] Let $G$ be a group $\forall s \in G$ $(s^{-1})^{-1} = s$

*Proof:* By uniqueness of inverses

> [!info] Let $G$ be a group $\forall s, t \in G$ $(st)^{-1} = t^{-1}s^{-1}$

*Proof:* 
$$\begin{array}{rl} (st)t^{-1}s^{-1} = s(tt^{-1})s^{-1} = ss^{-1} = e 
\end{array}$$Thus, $t^{-1}s^{-1} = (st)^{-1}$ 

> [!info] Let $G$ be a group. If $s \in G$, then $ss = s$ iff $s = e$

*Proof*: 
$$\begin{array}{rl} ss &= s \\ s &= e\end{array}$$

---

* Let $\langle G, * \rangle$ be a group. Then a subset $H$ of $G$ is called a **subgroup** of $G$ if it constitutes a group in its own right w.r.t. $*$ defined on $G$
	* $H$ is closed under the operation defined on $G$
	* $H$ contains the identity of $G$
	* If $s \in H$, $s^{-1} \in H$

> [!info] A non-empty subset $H$ of the group $G$ is a subgroup of $G$ iff $$s, t \in H \implies st^{-1} \in H$$

**NOTE:** A group $G$ is always a subgroup of itself

---

* Let $G_0$ and $G_1$ be groups. Then a function $\varphi: G_0 \mapsto G_1$ is called a **homomorphism** of groups if it satisfies: $$\varphi (s,t) = \varphi(s) \varphi(t) \forall \,\, s, t \in G_0$$
	* LHS is the operator defined of the domain ($G_0$)
	* RHS is the operator defined of the co-domain ($G_1$)

> [!info] The composition of group homomorphisms is also a group homomorphism

*Proof:* Let $\varphi_0: G_0 \mapsto G_1$ and $\varphi_1: G_1 \mapsto G_2$, then: $$\begin{array}{rl} & \varphi_1 \circ \varphi_0 (s, t) \\  &\varphi_1 (\varphi_0(s,t)) \\ & \varphi_1 (\varphi_0(s) \circ \varphi_0(t)) \\ & \varphi_1(\varphi_0(s)) \varphi_1 (\varphi_0(t)) \\ & \varphi_1\circ \varphi_0 (s) \varphi_1 \circ \varphi_0(t) \end{array}$$
> [!info] If $\varphi: G_0 \mapsto G_1$ is a group homomorphism. Then $\varphi(e_0) = e_1$

*Proof:* Note that $e_0 e_0 = e_0$
$$\varphi(e_0) \varphi(e_0) = \varphi(e_0)$$
For this to hold $\varphi(e_0)$ must be $e_1$

> [!info] If $\varphi: G_0 \mapsto G_1$ is a group homomorphism, then $\varphi(s^{-1}) = (\varphi (s))^{-1} \,\,\,\, \forall s \in G_0$

*Proof:* 
$$\begin{array}{rl} s s^{-1} &= e_0 \\ \varphi(s) \varphi(s^{-1}) &= \varphi(e_0) \\ \varphi(s) \varphi(s^{-1}) &= e_1 \end{array}$$
By previous proposition, $\varphi(s^{-1}) = (\varphi (s))^{-1}$

---

* A bijective group homomorphism is called an **group isomorphism**; denoted $G_0 \cong G_1$
* Let $\varphi: G_0 \mapsto G_1$ be a group homomorphism. Then the **kernel** of $\varphi$ denoted $\text{Ker} (\varphi)$ is defined as: 
$$\text{Ker}(\varphi) = \{ s \in G_0  : \varphi(s) = e_1 \}$$
> [!info] $\text{Ker}(\varphi)$ is a subgroup of $G_0$

*Proof:* Let $s, t \in \text{Ker}(\varphi)$, we have $$\begin{array}{rl} \varphi(st^{-1}) &= \varphi(s) \varphi(t^{-1}) \\ &= \varphi(s) [\varphi(t)]^{-1} \\ &= e e^{-1} \\ &= e \in \text{Ker}(\varphi) \end{array}$$
* The **image** of $\varphi$ is defined as: 
$$\text{Im}(\varphi) = \{ t \in G_1 : \exists s \in G_0 \,\,\, \text{s.t.} \,\, \varphi(s) = t\}$$
> [!info] $\text{Im}(\varphi)$ is a subgroup of $G_1$

* Let $\varphi: G_0 \mapsto G_1$ be a homomorphism of groups and suppose $\varphi(s) = t$, then 
$$\varphi^{-1} = \{ sk: k \in \text{Ker}(\varphi) \}$$
---

A **ring** (with unity) consists of a non-empty set $A$ together with two operations $+$ and $*$ s.t.:
* $\langle A, + \rangle$ is an additive group
* $\langle A, * \rangle$ is a monoid (no inverse)
$$\begin{array}{rl} a * (b+c) &= a*b + b*c \\ (a+b)*c &= a*c + b*c \end{array}$$
---

A commutative ring $k$ is called a **field** if $k^*$ (set of non-zero elements of $k$) forms a group w.r.t **ring multiplication** (inverse exists for multiplication). Thus every non-zero element of $k$ has a multiplicative inverse

|              **Ring**              |             **Field**             |
| :--------------------------------: | :-------------------------------: |
| $\langle A, * \rangle$ is a monoid | $\langle A, * \rangle$ is a group |
