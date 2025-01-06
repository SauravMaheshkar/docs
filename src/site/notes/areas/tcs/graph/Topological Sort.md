---
{"dg-publish":true,"permalink":"/areas/tcs/graph/topological-sort/","tags":["comp36111","graph-theory"]}
---

A **topological sort(ing)** of a directed graph $G= (V, E)$ is an ordering of its vertices as $V = \{ u_0, \ldots , u_{n-1} \}$ such that for all edges $(u_i, u_j)$ we have $i < j$

* Clearly a cyclic directed graph does not have a topological sorting

> [! NOTE] TOPOLOGICAL SORTING
> **Given:** A directed graph $G = (V, E)$
> **Return:** A topological sorting of $G$ or "Impossible" if none exists

 > [!warning]
 > A directed graph is cyclic if and only if it has no topological sorting
 
```
begin topSort(G)
	compute all in-degress and store in G.inDeg
	let S be a stack and i = 0, arr = []
	for each v in G.vertices
		if G.inDeg(v) = 0 then push v on stack S
	while stack S is non-empty:
		v = pop(S)
		arr[i] = v
		i++
		for each w in G.edges(v) do
			decrement G.inDeg(w)
			if G.inDeg(w) = 0 then push w on stack S
	if i = n
		return arr
	return "Impossible"
```
* **Why does this work?:** When a vertex is assigned an index i.e. `arr[i] = v` that means that all the vertices that point to it must already have been assigned an index.
* Runs in $O(|V| + |E|)$
	* can only process edge once (`decrement G.inDeg(w)`)
	* size of stack is bounded by number of vertices