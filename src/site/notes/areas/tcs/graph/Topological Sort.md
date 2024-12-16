---
{"dg-publish":true,"permalink":"/areas/tcs/graph/topological-sort/"}
---

#graph-theory 

A **topological sort(ing)** of a directed graph $G= (V, E)$ is an ordering of its vertices as $V = \{ u_0, \ldots , u_{n-1} \}$ such that for all edges $(u_i, u_j)$ we have $i < j$

* Clearly a cyclic directed graph does not have a topological sorting

> [! NOTE] TOPOLOGICAL SORTING
> **Given:** A directed graph $G = (V, E)$
> **Return:** A topological sorting of $G$ or "Impossible" if none exists

 > [!warning]
 > A directed graph is cyclic if and only if it has no topological sorting
 
