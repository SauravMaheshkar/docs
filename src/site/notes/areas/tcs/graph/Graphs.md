---
{"dg-publish":true,"permalink":"/areas/tcs/graph/graphs/","tags":["comp36111","graph-theory"]}
---


The **in-degree** of a vertex $v$ in $G = (V, E)$ is the number of incoming edges $$|\{ w \in V : (w, v) \in E\}|$$ similarly with out-degree.

---

**Theorem:** If $G$ is a *simple graph* with $m$ edges, then $$\sum_{v \in G} \text{deg}(v) = 2m$$
**Proof:** An edge $(u ,v)$ is counted twice. Thus, the total contribution of the edges to the degree of the vertices is twice the number of edges.

---

**Theorem:** If $G$ is a *directed graph* with $m$ edges, then $$\sum_{v \in G} \text{indeg} (v) = \sum_{v \in G} \text{outdeg} (v) = m$$
**Proof:** In a directed graph an edge $(u, v)$ contributes one unit to the in-degree and one unit to the out-degree.

---

**Theorem:** Let $G$ be a *simple graph* with $n$ vertices and $m$ edges. If $G$ is undirected then $m \leq n(n-1)/2$ and if $G$ is directed then $m \leq n(n-1)$

**Proof:** 
* If $G$ is undirected then maximum degree of a vertex is $n-1$. Since we're dealing with a simple graph and not a complete graph, the number of edges $m$ but be less than the maximum number of edges $\binom{n}{2}$. Thus $m \leq n(n-1)/2$.
* In case of a directed graph, the maximum number of edges are $\binom{n}{2}$ since every edge is counted once.

---
 * If $G = (V, E)$ and $G' = (V', E')$ are directed graphs, we say that $G'$ is a **sub-(directed) graph** pf $G$ if $V' \subseteq V$ and $E' \subseteq E$

* If $G = (V, E)$ and $G' = (V', E')$ are directed graphs, we say that $G'$ is an **induced sub-(directed)** graph pf $G$ if $V' \subseteq V$ and $E' = \{ (u,v) \in E \, | \, u \in V' \, \text{and} \, v \in V' \}$

* A **spanning subgraph** of $G$ is a subgraph of $G$ that contains all vertices of the graph $G$.

---

* A **path** in a directed graph $G$ is a sequence of distinct vertices $v_0 , \ldots v_k (k\geq 0)$ such that for all $i (0 \leq i < k), (v_i, v_{i+1})$ is an edge.
* If $G = (V, E)$ is a directed graph, and $s, t \in V$ we say that $t$ is **reachable** from $s$ if there exists a path from $s$ to $t$.
* A graph is **connected** if for any two vertices there is a path between them.
* A directed graph is **strongly connected** is every vertex is reachable from every other.
* A **forest** is a graph without [[areas/tcs/graph/Cycles in Graphs\|cycles]].
* A **tree** is a connected graph without [[areas/tcs/graph/Cycles in Graphs\|cycles]] , i.e. a *connected forest*.
* A **spanning tree** of a graph is a spanning subgraph that is a tree.

---

**Theorem:** Let $G$ be an undirected graph with $n$ vertices and $m$ edges. Then if $G$ is connected $m \geq n-1$

**Proof:** If $G$ is connected then there exists a **path** between all pairs of vertices. The simplest case for this if all vertices are in a straight line connected with each other (spanning tree). This will contain $n-1$ edges (one between each pair of vertex). Thus $m \geq n-1$

---

**Theorem:** Let $G$ be an undirected graph with $n$ vertices and $m$ edges. Then if $G$ is a tree $m = n-1$

**Proof:** A tree is a connected graph without cycles. This will the simplest case wherein the $n$ vertices are connected with each other in a straight line only to one other vertex. If they were to be connected with any other vertex this would create a cycle. Therefore, if $G$ is a tree then $m = n-1$ (one edge between each pair of vertex)

---

**Theorem:** Let $G$ be an undirected graph with $n$ vertices and $m$ edges. Then if $G$ is a forest $m \leq n-1$

**Proof:** A forest is a graph without cycles. Since there is no restriction on the graph to be connected (but it can be). The number of edges $m \leq n-1$.

---
