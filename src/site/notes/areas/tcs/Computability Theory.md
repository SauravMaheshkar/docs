---
{"dg-publish":true,"permalink":"/areas/tcs/computability-theory/"}
---

#computability-theory 
## Undecidable Problems

> [! IMPORTANT] Definition (Halting Problem)
> 
> **Given:** A pair of strings $m ,x$
> **Return:** Yes if $m$ is the code of a deterministic Turing Machine $M$ and $x$ a string in the alphabet of $M$ such that $M$ accepts $x$. No if otherwise

* The ==Halting Problem is an undecidable problem==. (Theorem; Turing 1986)
* Turing realised that for cases where a TM doesn't halt you can write a formula in FOL to accept a given input. This solves the Halting Problem and the Entscheidungsproblem.
---
