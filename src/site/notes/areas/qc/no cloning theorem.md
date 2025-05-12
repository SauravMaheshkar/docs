---
{"dg-publish":true,"permalink":"/areas/qc/no-cloning-theorem/","tags":["quantum-computing"]}
---

The no-cloning theorem states that:

> An **unknown** quantum system cannot be cloned by unitary transformations

**Proof:** Suppose there is a unitary transformation $\mathcal{U}$ that can clone a quantum system i.e. for any state $| \psi \rangle$$$\mathcal{U}(|\psi 0\rangle) = |\psi \psi \rangle$$Suppose $|\phi\rangle$ is linearly independent to $|\psi\rangle$$$\begin{array}{ll}\mathcal{U}(|\psi 0\rangle) &= | \psi \psi \rangle \\ \mathcal{U}(| \phi 0 \rangle) &= |\phi \phi \rangle \end{array}$$Consider the action of $\mathcal{U}$ on the composite system $|\gamma \rangle = \frac{1}{\sqrt2}(|\psi\rangle + | \phi \rangle)$$$\mathcal{U}(|\gamma 0\rangle) = \frac{1}{\sqrt2}\mathcal{U}(|\psi 0\rangle + | \phi0 \rangle) = \frac{1}{\sqrt2}(|\psi \psi \rangle + |\phi\phi\rangle)$$But since $\mathcal{U}$ is a cloning transformation we also have$$\mathcal{U}(|\gamma0\rangle) = |\gamma \gamma \rangle = \frac{1}{2}(|\psi\psi\rangle + |\psi\phi\rangle + |\phi\psi\rangle + |\phi\phi\rangle)$$
Which is a contradiction to the previous result. Therefore no such unitary transformation exists. 
### Copying bit strings as an exception

Classical bit strings such as 10 or 101 can be encoded into quantum states using the computational basis. For example:$$|101\rangle = |1\rangle \otimes |0\rangle \otimes |1\rangle$$This is a product of **known** states (not *entangled* or *superposition*)

Since the standard states are **orthogonal** and **known**, we can indeed "copy" quantum encoded bit strings. 

For example: to copy a single quantum state we can use the CNOT gate with the target bit set to $|0\rangle$. Since the CNOT gate performs an XOR computation, for an arbitrary state $|\phi\rangle$ $\text{CNOT} (| 0 \rangle \otimes |\phi \rangle) = |\phi\rangle \otimes |\phi\rangle$.

This does not violate the no-cloning theorem because:
* the states are **known** and **orthogonal**
* there is no quantum superposition or entanglement involved
* the operation is unitary and reversible