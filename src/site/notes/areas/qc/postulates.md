---
{"dg-publish":true,"permalink":"/areas/qc/postulates/","tags":["quantum-computing"]}
---

1. Physical states are represented as "rays" in a Hilbert State $\mathcal{H}$ .

	* Vectors are called ket
	* A Hilbert Space is a normed vector space with a inner product
	* Vector are represented using $| \rangle$
	* there exists a dual space $\langle |$ (bra space)
	* Inner products are defined as $\langle \psi | \psi \rangle$ (note that $\langle \psi | \psi \rangle \geq 0$)
	* the space is called linear if $\langle \psi | a\phi_1 + b \phi_2 \rangle = a\langle \psi | \phi_1 \rangle + b \langle \psi | \phi_2 \rangle$
	* $\langle \psi | \phi \rangle ^* = \langle \phi | \psi \rangle$
	* $|\langle \psi | \phi \rangle|
{ #2}
 \leq \langle \psi | \psi \rangle \langle \phi | \phi \rangle$ (**Schwarz Inequality**)
	* In the real world there is no difference between $c | \psi \rangle$ and $| \psi \rangle$ where $c \in \mathbb{C}$
	* A vector space is said to be spanned by $\{ | e_n \rangle \}$ i.e. $| \psi \rangle = \sum_n a_n |e_n\rangle$. In particular these bases can be chosen to be orthonormal $\langle e_m | e_n \rangle = \delta_{mn}$ and $a_n = \langle e_n | \psi \rangle$
	* The state may be represented by a column vector. In $n$ dimensions, one can represent a state by a set of $n$ complex numbers $| \psi \rangle = (c_1 \ldots c_n)^T$. The corresponding element in the dual space (bra) can be written by a row vector $\langle \psi | = (c_1^* \ldots c_n^*)$
	* The inner product between two vectors is given by $\langle \psi | \phi \rangle = \sum_n \psi^*_n \phi_n$

**Copenhagen Interpretation:** State $| \psi \rangle$ has a probabilistic interpretation with $| \alpha_n \rangle^2$ as the probability with which the system would be found in the state $| e_n \rangle$

2. Observables (position, momentum, energy, etc.) are represented by linear self-adjoint operators in the Hilbert Space $\mathcal{H}$
3. An arbitrary vector can be written as a linear superposition of a complete set of eigenstates of any operator in that space $$| \psi \rangle = \sum_n c_n | \lambda_n \rangle$$If a measurement of the observable is made in such a state, the result will be the eigenvalue $\lambda_n$ with a probability $|c_n|^2 = \langle \psi | P_n | \psi \rangle$ with $P_n = | \lambda_n \rangle \langle \lambda_n |$ as the projection operator.
4. Time Evolution: (**Schrodinger's Evolution**) $$\begin{align} i \hbar \frac{\partial}{\partial t} | \psi \rangle &= H | \psi \rangle \\ |\psi\rangle (t) &= U(t) | \psi(0) \rangle \\ U &= e^{-i Ht/\hbar}\end{align}$$