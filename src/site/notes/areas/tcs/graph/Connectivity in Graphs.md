---
{"dg-publish":true,"permalink":"/areas/tcs/graph/connectivity-in-graphs/","tags":["comp36111","graph-theory"]}
---


> [! NOTE] st-CON
> **Given:** A directed graph $G = (V, E)$ and vertices $s, t \in V$
> **Return:** YES if $t$ is reachable from $s$ in $G$, NO otherwise 
{ #f40881}


> [! NOTE] STRONG CONNECTIVITY
> **Given:** A directed graph $G = (V, E)$
> **Return:** YES if $G$ is strongly-connected, NO otherwise
{ #05c893}


## Depth First Search on Graphs
(this algorithm assumes the graph is represented as out lists)

```
begin DFS(G, v)
	mark v
	for each w in G.edges(v) do
		if w unmarked
			DFS(G, w)
```

* DFS solves [[areas/tcs/graph/Connectivity in Graphs#^f40881\|st-CON]] and with some nuance [[areas/tcs/graph/Connectivity in Graphs#^05c893\| STRONG CONNECTIVITY]]
* This algorithm runs in linear time. Easy way to see that is that **every edge is processed once**.