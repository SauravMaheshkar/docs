---
{"dg-publish":true,"permalink":"/areas/math/abstract/direct-sum/","tags":["linear-algebra","direct-sum","subspace"]}
---

> [!success] def (sum of [[areas/math/abstract/subspace\|subspace]])
> 
> Let $u_1 \ldots u_m$ be subspaces of $V$. The sum is defined as 
> $$u_1 + \ldots + u_m = \{ u_1 + \ldots + u_m | u_i \in U_i \,\, i \in [1,m] \}$$
> i.e. the collection of all possible sums of elements $u_1 \ldots u_m$

**Ex:** Consider $V = \mathbb{R}^2$. Let $U_1 = \{ (x, 0) | x \in \mathbb{R} \}$ and $U_2 = \{ (0, y) | y \in \mathbb{R} \}$
$$\begin{array}{rl} U_1 + U_2 &= \{ (x, 0) + (0, y) | x, y \in \mathbb{R} \} \\ &= \{(x,y) | x, y \in  \mathbb{R} \} = \mathbb{R}^2 \end{array}$$

> [!info] **Proposition:** Let $U_1 \ldots U_m$ be subspaces of $V$. Then $U_1 + \ldots + U_m$ is the smallest subspace of $V$ containing $U_1 \ldots U_m$
> 
> *Proof:* 
> 1. Sum is a subspace: Let $S = U_1 + \ldots + U_m$. We need to prove $0 \in S$. Since each $U_i$ is a subspace, there is a $0$ in each subspace.
> $$0 = 0 (\in U_1) + 0 (\in U_2) + \ldots + 0 (U_m) \in S$$
> Now we need to show $S$ is closed under addition. Let $u, v \in S$
> $$\begin{array}{rl}u &= u_1 + \ldots + u_m \\ v &= v_1 + \ldots + v_m \\ u + v &= (u_1 + v_1) + \ldots + (u_m + v_m) \in S\end{array} $$
> 
> 2. Sum is the smallest subspace: Consider $u_i \in U_i$. We can express this as:
>    $$u_i = 0 + 0 + \ldots + u_i + 0 + \ldots + 0 = 0 \in S$$
>    Thus each $U_i \subseteq S \implies S$ contains each $u_i$. Consider $T$ is a subspace containing $U_1 \ldots U_m$. Since T is a subspace it is closed under addition and therefore contains all sums of elements from $u_1 \ldots U_m$ and $S \subseteq T$

---

> [!success] def (Direct Sum)
> Suppose $U_1 \ldots U_m$ are subspaces of $V$. Then the sum $U_1 \ldots U_m$ is called a direct sum if each $v \in u_1 + \ldots + u_m$ can be written in a **unique way** as $v = u_1 + \ldots + u_m$ where $u_i \in U_i$. In this case the notation is $U_1 \oplus \ldots \oplus U_m$

**Theorem:** Suppose $U_1 \ldots U_m$ are subspaces of $V$. Then $U_1 + \ldots + U_m$ is a direct sum iff the only way to write $0$ as a sum of the form $u_1 + \ldots + u_m$ is by taking each $u_i = 0$

*Proof:*

[=>] If $u_1 + \ldots + u_m$ is a direct sum, since $0 \in u_1 + \ldots + u_m$ there is only way to write $0 = u_1 + \ldots + u_m$ (by defn.)

[<=] Suppose the unique way to write 0 is $0 = 0 + 0 + \ldots + 0$. Suppose $v \in U_1 + \ldots + U_m$ and $v_i, w_i \in U_i$
$$\begin{array}{rl} v &= v_1 + \ldots + v_m \\ v &= u_1 + \ldots + u_m \\ v - v &= (v_1 - u_1) + \ldots + (v_m - u_m) \\ 0 &= (v_1 - u_1) + \ldots + (v_m - u_m)\end{array}$$
By our hypothesis: $v_i - u_i = 0 \implies v_i = u_i$ This is a contradiction.

> [!info] **Proposition:** If $U$ and $W$ are subspaces of $V$, then $U + W$ is a direct sum iff $U \cap W = \{ 0 \}$
> 
> *Proof:* 
> 
> [=>] Suppose $U + W$ is a direct sum. Let $v \in U \cap W$. Then
> $$\begin{array}{rl} v &= v (\in U) + 0 (\in W) \\ &= 0 (\in U) + v (\in W) \end{array}$$
> 
> These must be the same since it is a direct sum. Thus $v = 0 \implies U \cap W = \{ 0 \}$
> 
> [<=] Suppose $U \cap W = \{ 0 \}$. By the previous theorem it is sufficient to check if there is a unique way to write $0$ as a sum of elements of $U, W$. Suppose if $u \in U, w \in W$
> $$\begin{array}{rl} 0 &= u + w \\ u \, (\in U) &= -w \, (\in W) \in U \cap W \end{array}$$
> 
> Which is by our hypothesis i.e. $0 = u + w \implies u = w =0$.






