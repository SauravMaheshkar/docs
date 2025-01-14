---
{"dg-publish":true,"permalink":"/areas/tcs/complexity-computability/complexity-theory/"}
---

#complexity-theory 
* NOTE: Throughout #complexity-theory we use language and computational problem interchangeably

> [!tip] Why?
> To classify problems/languages by the amount of "computational resources" required to solve them. These resources are:
> * Time
> * Space (memory requirement)
> * Non-determinism
## Notation, Vocabulary, ....
* A language is **recursively enumerable (r.e.)** if there is a (deterministic) Turing Machine which recognises it
* A language $L$ over alphabet $\Sigma$ is **co-recursively enumerable** if $\Sigma^* \setminus L$ is r.e.
* A language is **recursive** iff it is both r.e. and co r.e.

> [! IMPORTANT] Definition
> 
> Let $M$ be a Turing machine with alphabet $\Sigma$, and let $g : N \mapsto N$. We say $M$ **runs in time** $g$ if, for all but finitely many strings $x \in \Sigma^{*}$ , any run of $M$ on input $x$ halts within at most $g(|x|)$ steps. Similarly, $M$ **runs in space** $g$ if $M$ always terminates and, for all but finitely many strings $x \in \Sigma^{*}$ , any run of $M$ on input $x$ uses at most $g(|x|)$ squares on any of its work-tapes.

> [! IMPORTANT] Definition (TIME)
> 
> Let $L$ be a language over some alphabet, and let $g : N \mapsto N$ be a function. We say that $L$ is in **Time($g$)** if there exists a deterministic Turing machine M recognising $L$ such that $M$ runs in time $g$.

If there is a polynomial time algorithm for the language then we also have a polynomial time algorithm for it's complement (flip the outputs !!). Thus $\mathbb{coP} = \mathbb{P}$

> [! IMPORTANT] Definition (NTIME)
> 
> Let $L$ be a language over some alphabet, and let $g : N \mapsto N$ be a function. We say that $L$ is in **NTime($g$)** if there exists a Turing machine M (possibly non-deterministic) recognising $L$ such that $M$ runs in time $g$.

If a language is in $\mathbb{NPTIME}$ then:
* If $x \in \mathcal{L} \, \exists$ certificate $y$ ($|y| = \text{poly}|x|$) s.t. a verifier accepts $(x, y)$
* If $x \not\in \mathcal{L} \, \forall$ certificate $y$ ($|y| = \text{poly}|x|$) verifier rejects $(x, y)$

Consider SAT, if a formula is not satisfiable then no certificate **can** exist that verifies the SAT problem. Alternatively, if a formula is satisfiable some certificate can exist that verifies it. Thus, SAT is canonically related to $\mathbb{NPTIME}$ 

|                   **$\mathbb{NP}$**                    |                          **$\mathbb{coNP}$**                          |
| :----------------------------------------------------: | :-------------------------------------------------------------------: |
|                          SAT                           |                               TAUTOLOGY                               |
|                 Is $\phi$ satisfiable?                 |                        Is $\phi$ always true?                         |
| $\exists$ verifiable certificate $y$ of the fact (YES) | $\exists$ verifiable certificate $y$ of negation of the the fact (NO) |


> [! IMPORTANT] Definition (SPACE)
> 
> Let $L$ be a language over some alphabet, and let $g : N \mapsto N$ be a function. We say that $L$ is in **Space($g$)** if there exists a deterministic Turing machine $M$ recognising $L$ such that $M$ runs in space $g$.

> [! IMPORTANT] Definition (NSPACE)
> 
> Let $L$ be a language over some alphabet, and let $g : N \mapsto N$ be a function. We say that $L$ is in **NSpace($g$)** if there exists a Turing machine $M$ (possibly non-deterministic) recognising $L$ such that $M$ runs in space $g$.

> [! IMPORTANT] Linear "Speed-Up" Theorems
> 
> * **Theorem:** Let $f: \mathbb{N} \mapsto \mathbb{N}$ be a function and $c>0$. Then $\text{TIME}(f(n)) \subseteq \text{TIME}(c \cdot f(n) + n)$.
> * **Theorem:** Let $f: \mathbb{N} \mapsto \mathbb{N}$ be a function and $c>0$. Then $\text{SPACE}(f(n)) \subseteq \text{SPACE}(c \cdot f(n))$.

* **co-Classes:** Given any class $\mathbb{C}$ of languages, the $\text{co}-\mathbb{C}$ class is $\{ \bar{\mathcal{L}} | \mathcal{L} \in \mathbb{C} \}$
* **$\mathbb{C}$-complete:** "Hardest" language in $\mathbb{C}$. Some $\mathcal{L}$ is $\mathbb{C}$-complete if $\forall \mathcal{L}' \in \mathbb{C} \mathcal{L}' \leq_{\text{poly}} \mathcal{L}$  (polynomial time reducible.)
 
---

* Let $G$ be a set of functions from $\mathbb{N}$ to $\mathbb{N}$: $$\begin{array}{ll} \text{TIME}(G)  = \bigcup\limits_{g \in G} \text{TIME}(g)  \\ \text{SPACE}(G) = \bigcup\limits_{g \in G} \text{SPACE}(g) \\ \text{NTIME}(G)  = \bigcup\limits_{g \in G} \text{NTIME}(g) \\ \text{NSPACE}(G) = \bigcup\limits_{g \in G} \text{NSPACE}(g) \end{array}$$
* Some important function classes: $$\begin{array}{ll} P &= E_0 &= \{n^c | c > 0 \} \\ E &= E_1 &= \{ 2^{n^c}  | c > 0 \} \\ &= E_2 &= \{2^{2^{n^c}} | c > 0 \}  \\ &= E_k &=  k-\text{times} \end{array}$$
* Important classes of problems. $$\begin{array}{ll} \text{PTIME} &= \text{TIME}(P) \\ \text{EXPTIME} &= \text{TIME}(E) \\ \text{k-EXPTIME} &= \text{TIME}(E_k) \\ \\ \text{NPTIME} &= \text{NTIME}(P) \\ \text{NEXPTIME} &= \text{NTIME}(E) \\ \text{k-NEXPTIME} &= \text{NTIME}(E_k) \\ \\ \\ \text{LOGSPACE} &= \text{SPACE}(\log n) \\ \text{PSPACE} &= \text{SPACE}(P)\\ \text{EXPSPACE} &= \text{SPACE}(E)\\ \text{k-EXPSPACE} &= \text{SPACE}(E_k) \\ \\ \text{NLOGSPACE} &= \text{NSPACE}(\log n) \\ \text{NPSPACE} &= \text{NSPACE}(P)\\ \text{NEXPSPACE} &= \text{NSPACE}(E)\\ \text{k-NEXPSPACE} &= \text{NSPACE}(E_k)\end{array}$$
## Inclusions

* Basic Inclusions$$\begin{array}{ll} \text{TIME}(G) \subseteq \text{NTIME}(G) \\ \text{SPACE}(G) \subseteq \text{NSPACE}(G) \\ \\ \text{TIME}(G) \subseteq \text{SPACE}(G) \\ \text{NTIME}(G) \subseteq \text{NSPACE}(G) \end{array}$$
* If $G \subseteq H$, then $\text{TIME}(G) \subseteq \text{TIME}(H)$ (similarly for $\text{NTIME}, \text{SPACE}, \text{NSPACE}$)

### Configuration Graphs of Turning Machines
Let $M$ be a $K$-tape Turing machine $\langle K, \Sigma, Q, q_0,T \rangle$ and suppose that the maximum amount of space used on any work-tape, for an input of size $n$ is $s(n)$.

---
