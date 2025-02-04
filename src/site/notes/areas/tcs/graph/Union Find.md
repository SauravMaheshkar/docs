---
{"dg-publish":true,"permalink":"/areas/tcs/graph/union-find/","tags":["graph-theory"]}
---

* Let $G = (V, E)$ be a graph. A **partition** of $V$ is a collection of sets $\{ A_1, A_2, \ldots , A_m \}$ such that:
	* $A_1 \cup \ldots \cup A_m = V$
	* $A_i \cap A_j = \phi$ for all $i, j (1 \leq i < j \leq m)$
	* $A_i \neq \phi$ for all $i (1 \leq i \leq m)$
* makeSet(v) - given a (pointer to) vertex v, add the singleton set {v} to P
* union($A_i, A_j$) - given (pointers to) the cells $A_i$ and $A_j$, remove these from $P$ and add the cell $A_i \cup A_j$
* find(v) - given a (pointer to) vertex v, return (a pointer to) the cell of P containing v
```
union-find(V, E)
	let P = empty set
	for v in V:
		makeSet(v)
	for (u, v) in E:
		if find(u) != find(v)
			union(find(u), find(v))
```
* A naive implementation of union-find runs in $O(|V| \times |E|)$. 
---
## Optimisation
* we ensure that always the smaller cell is added into the bigger cell by adding a size heuristic. In makeSet($v$) set size to 1 and update size in union.

**Lemma:** In a series of operations of makeSet, union and find on $n$ elements using the size-heuristic, no element can have its cell field assigned more than $\lfloor \log n \rfloor + 1$ times.
**Proof:** Whenever the cell value of a node changes, its cardinality will at-least double (only way cells get merged is if its size is bigger than some other cell). But $1 \leq | v \rightarrow \text{cell}| \leq n$. This can happen no more than $\lfloor \log n \rfloor$ times.

* With this implementation, the running-time of union find is $O(|E| + |V| \log |V|)$. Total number of calls to makeSet, union and find is $O(|V| + |E|)$, and each union will update cell pointer $\lfloor \log n \rfloor$ times.

* Further optimisation can be done by representing cells as *trees*. The union operation now simply *updates the parent pointer* and updates size. More in the find operation we flatten the tree as we go along i.e.
  
```
find(v)
	if v -> parent is not a root:
		v -> parent = find(v -> parent)
	return v -> parent
```