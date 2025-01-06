---
{"dg-publish":true,"permalink":"/areas/tcs/stable-matching/","tags":["comp36111"]}
---

Consider the following (idealised) matchmaking problem. We are given
* a set of $n$ boys and $n$ girls
* a strict ranking, for each boy, of all the girls
* a strict ranking, for each girl, of all the boys
We want to compute:
* a 1-1 pairing of boys with girls in which, for every boy $a$ and girl $b$, either $a$ prefers his partner to be $b$ or $b$ prefers her partner to be $a$. Such a match is called a **stable matching**.
This problem is often visualised as a complete (everyone can marry anyone) bipartite graph.
---
## The Gale-Shapley Algorithm $O(n^2)$

```
begin Gale-Shapley(Boys' ranking, Girls' rankings):
	until all boys are engaged do
		for each boy a with no fiances do
			a proposes to the girl he most prefers among those that 
			a has not yet proposed to
		for each girl b with new proposals do
			let a be b's most preferred new suitor
			if b has no fiance
				b gets engaged to a
			if b prefers a to her exisiting fiance
				b cancels her existing engagement
				b gets engaged to a
	All the engaged couples get married
end
```

* **Proof that Gate-Shapely produces a stable matching:**
	* this algorithm terminates, since no boy proposes to any girl twice, so any unengaged girl must eventually get a proposal from some unengaged boy.
	* Once a girl has received a proposal, she always a partner. Hence we have a matching
	* Suppose $a, b'$ and $a', b$ are distinct couples produced by the algorithm. If $b$ prefers $a'$ to $a$ then $a$ never proposed to $b$. But $a$ proposed to all girls better than or equal to $b'$. Therefore $a$ does not prefer $b$ to $b'$ and thus never proposed to $b$.