---
{"dg-publish":true,"permalink":"/areas/tcs/complexity-computability/reduction/"}
---

#complexity-theory #reduction
Let $P_1, P_2$ be languages over alphabets $\sum_1, \sum_2$ respectively. We say that $P_1$ is (*many-one logspace*) reducible to $P_2$ if there is a function $f: \sum_1^* \mapsto \sum_2^*$ s.t.
1. $f$ can be computed by a deterministic TM using at most $\log n$ space on any work tape
2. for all $x \in \sum_1^*, x \in P_1$ if and only if $f(x) \in P_2$
We denote this as:
$$\large
P_1 \leq_{m}^{\log} P_2
$$
---
This means any of the following:
* $P_2$ is at least as hard as $P_1$
* $P_1$ is no harder than $P_2$
* if anyone shows an easy way of solving $P_2$, we have an easy way of solving $P_1$

Complexity classes such as logspace, n-logspace, p-time and np-time are closed under many-one logspace reductions. Classes such as time(n), time($n^2$), etc. are not closed under many-one logspace reductions.

> [!IMPORTANT] Theorem
> If $f_1 : \sum_1^* \mapsto \sum_2^*$ and $f_2 : \sum_2^* \mapsto \sum_3^*$ are both computable in logarithmic space, then so is $f_2 \cdot f_1: \sum_1^* \mapsto \sum_3^*$

=> Logarithmic Space Reduction is a transitive notion 

---
Let $P_1, P_2$ be problems over alphabets $\sum_1, \sum_2$ respectively. We say that $P_1$ is (*many-one polytime*) reducible to $P_2$ if there is a function $f: \sum_1^* \mapsto \sum_2^*$ s.t. for all $x \in \sum_1^*, x \in P_1$ if and only if $f(x) \in P_2$
We denote this as:
$$\large P_1 \leq_{m}^{p} P_2$$
* Polynomial Time Reduction is also a transitive notion
---
> [! NOTE] 🔑 Definition
> Let $C$ be a complexity class and $P$ a problem. We say that $P$ is $C$-hard (under many-one logspace reducibility), if for all $P' \in C$, $P' \leq_m^{\log} P$. 
> 
> Moreover, we say that $P$ is $C$-complete if, $P \in C$ and $P$ is $C$-hard




