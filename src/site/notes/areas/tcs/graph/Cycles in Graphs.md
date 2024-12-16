---
{"dg-publish":true,"permalink":"/areas/tcs/graph/cycles-in-graphs/"}
---

#graph-theory 
* A **cycle** in a directed graph $G$ is a path $v_0, \ldots, v_k (k\geq 1)$ such that $(v_k, v_0)$ is also an edge.
* We call $G$ cyclic if it has a cycle, otherwise acyclic.

> [! NOTE] CYCLICITY
> **Given:** A directed graph $G = (V, E)$
> **Return:** YES if $G$ is cyclic, NO otherwise

---

**Lemma:** Let $G$ be a directed graph. If $G$ has no cycles, then there is some vertex with zero in-degree. 

**Proof:** Let there be a vertex $v_0$, this must have a vertex pointing to it since it has a non-zero in-degree. $$v_j \rightarrow \ldots v_i \rightarrow \ldots \rightarrow v_0$$ since the graph is finite at some point, $v_j = v_i$ thus creating a cycle $\square$.

---