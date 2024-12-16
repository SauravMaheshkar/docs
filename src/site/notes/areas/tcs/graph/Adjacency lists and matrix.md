---
{"dg-publish":true,"permalink":"/areas/tcs/graph/adjacency-lists-and-matrix/"}
---

#graph-theory 

For adjacency lists ($O(n+m)$ Memory):

* Returning the incident edges or adjacent vertices for a vertex $v$ runs in $O(\deg(v))$ time (size of the list)
* Determining whether two vertices $u$ and $v$ are adjacent can be performed by inspecting list for $u$ or that of $v$. By choosing the smaller of the two, we get $O(min \{ \text{deg}(u), \text{deg}(v) \})$ time.

---

For adjacency matrices ($O(n^2)$ Memory):

* Determining adjacencies between pairs of vertices occurs in constant time (a single lookup operation)