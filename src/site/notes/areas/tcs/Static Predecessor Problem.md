---
{"dg-publish":true,"permalink":"/areas/tcs/static-predecessor-problem/"}
---

## Problem Definition
* desire a data structure representing a set $S$ of items $\{ x_1 \ldots x_n \}$ with a query of the form $\text{pred}(z) = \max \{ x \in S : x < z \}$ that requires low space and fast query times.
* Static simply implies the set doesn't change, dynamic would mean we support insertion and deletion
* Ex: 
	* Static: store sorted numbers and do binary search
	* Dynamic: Balanced BST (query = $\log n$)
## Word RAM Model
* items are integers in $\{ 0 , 1 \ldots 2^{w}-1 \}$ where $w$ is the word size and the universe thus has size $u = 2^w - 1$.
* We also assume that all pointers fit in a world i.e. $u \geq n$ and $w \geq \log n$
* All normal operations such as +, -, / (int), x, | , &, >>, << can be done in constant time
 ---
> [!NOTE] 
> By choosing the better of vEB trees or Fusion trees we can achieve query times $\min (\log w, \log_w n) \leq \sqrt{\log n}$. Thus with dynamic fusion trees we can get $O(n \sqrt{\log n})$.

## Van Emde Boas Tree (vEB)

* Dynamic
* Update and Query in $O(\log w)$ 
* Naive version uses $O(u)$ space but can be made $O(n)$ with randomisation

* **Basic Idea:** divide and conquer with bit manipulation
* vEB trees are defined recursively: If $\text{vEB}_u$ denotes a a vED tree of size u, then each $\text{vEB}_u$ stores
	* the minimum elements (V.min)
	* the maximum elements (V.max)
	* a top $\text{vEB}_{\sqrt{u}}$ subtree (V.summary)
	* $\sqrt{u}$ bottom subtrees (V.cluster) (a $\sqrt{u}$ size array)

We express every element $x \in \{ 0, \ldots, u-1 \}$ in binary form and split it into it's lower half and upper half (in terms of bits) say $\langle c, i \rangle$. This essentially rewrites x in base $\sqrt{u}$. **We store $i$ in the $c$-th cluster**. During the insertion if the $c$-th cluster was empty we add $c$ to the summary i.e. *the summary tracks which clusters are non-empty*.

The query can be defined in the following manner:
```
pred(V, x = <c, i>):
	if x > v.max: return V.max
	else if V.cluster[c].min < x:
		return pred(V.cluster[c], i)
	else:
		c' = pred(V.summary, c)
		return V.cluster[c'].max
```
Query time: $T(u) = T(\sqrt{u}) + O(1) = O(\log \log u) = O(\log w)$

We define insertion as follows:
```
insert(V, x = <c, i>):
	if V is empty:
		V.min = x;
		return;
	if x < V.min: swap(x, V.min)
	if x > V.max: V.max = x
	if V.cluster[c].min == null:
		insert(V.summary, c)	
	insert(V.cluster[c], i)
```
Insertion time: 
* $T(u) \leq 2 T(\sqrt{u}) + O(1)$: the case in which we make two recursive calls i.e. cluster is empty, however the immediate call returns immediately (first if branch), thus is actually is:
* $T(u) = T(\sqrt{u}) + O(1) = T(u) = O(\log \log u)$

Space:
* $S(u) = (\sqrt{u} + 1) S(\sqrt{u}) + O(1)$, ($\sqrt{u} + 1$) for the summary + $S(\sqrt{u})$ for the clusters and some constant for min and max
* This reduces to $S(u)$ ❌ POOR ❌
* We can however exploit the fact that most clusters are empty and use hashing to map a cluster id $c$ to a pointer to the corresponding non-empty cluster. This results in a space complexity of $O(n)$
## Y-Fast tries
* Use a bit array of length $u$ where bits are set to 1 if the element is in the set and 0 otherwise. This uses $O(u)$ time ❌
* We can build a perfect binary time where each internal node stores the logical OR of its children. We store all the 1s in a doubly linked list. 
	* To get the predecessor of a 1 we go backwards in the linked list
	* To get the predecessor of a 0 we go up the tree and find the nearest 1, we then follow the 1's to find the nearest 1 in the other branch. 
		* if we get the ancestor from the right branch (going to the left) we find the maximum which gives the predecessor
		* if we get the ancestor from the left branch (going to the right) we find the minimum which gives the successor and since all the 1's are stored in a double linked list we just go one step back to find the predecessor.
	* This uses $O(\log u)$ time to find a ancestor that is a 1.
* We use the fact that all paths to the root are monotone (0 for a while and then all 1s) and thus we can do a binary search to find where it changes from a 0 to 1. If we store the tree as an array(root at 0, node $x$ has left child at $2x + 1$ and right child at $2x + 2$), we can find the $k$-th ancestor simply by right shifting the index by k bits. Thus we can find the ancestor in $O(\log \log u)$

**x-fast trie:** We can improve the space usage by storing the 1's in a hash table; where the key is the index of a particular node. Thus when we search we simply check whether a key exists. This takes $O(nw)$ space since each level contains at most n 1's.

**y-fast trie:** We use indirection. If we have a x-fast trie on $n/w$ items where each item is a balanced BST with ~w sub-items whose smallest element is the representative element for the top level x-fast trie. This takes $O(n)$ space. Insertion and deletion takes $O(\log w) = O(\log \log u)$.

## Fusion Trees
* Static for now
* Query in $O(\log_w n)$
* Linear space

## References
* https://people.seas.harvard.edu/~cs224/fall14/lec/lec1.pdf
* https://users.cs.utah.edu/~pandey/courses/cs6968/spring23/papers/yfast.pdf
  
  ## Implementations
* https://github.com/AhmedAbdelaal2001/van-Emde-Boas-Tree/tree/master
* https://github.com/jhomswk/Van_Emde_Boas_Tree
* https://github.com/TISparta/Van-Emde-Boas-tree
* https://github.com/zrneely/veb-tree/blob/master/src/lib.rs