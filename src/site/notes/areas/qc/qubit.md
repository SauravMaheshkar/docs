---
{"dg-publish":true,"permalink":"/areas/qc/qubit/","tags":["quantum-computing"]}
---

* The smallest unit of Quantum Information i.e. a qubit stores a linear combination of the bases as opposed to 0 or 1 for a classical bit
* The act of measuring a qubit yields either $| 0 \rangle$ or $| 1 \rangle$ with some probability.
* A qubit can contain infinite amounts of information since the binary expansion of $\theta$ and $\phi$ may not be terminating. However, a measurement of the qubit will make the state collapse to $| 0 \rangle$ or $| 1 \rangle$
* Consider:$$\begin{align}|\psi\rangle &= \frac{1}{\sqrt2} |0\rangle + \frac{e^{i\phi}}{\sqrt2} |1\rangle \\ &= \frac{1}{\sqrt2} [|+\rangle + | - \rangle] + \frac{e^{i \phi}}{\sqrt2}[|+ \rangle - |-\rangle] \\ &= e^{i\phi/2} [\cos \frac{\theta}{2} |+ \rangle - i \sin \frac{\theta}{2} |-\rangle] \end{align}$$This now allows us to measure the relative phase

### Multi-Qubit States

* Classical: 00, 01, 10, 11
     Quantum: $|00\rangle = |0 \rangle \otimes |0\rangle, \ldots$
* Not all two qubit states can be written as a product of two single qubit states
* For a $n$ qubit system, we have $2^n$ bases and therefore require $2^n$ complex coefficients. However, measurement only reveals $n$ bits of information.
* If a state is expressed in computational basis i.e. $\{ |0\rangle, |1\rangle \} := \alpha |0\rangle + \beta|1\rangle$ one can get information about $|\alpha|^2$ and $|\beta|^2$ but not their relative phase. A measurement in the diagonal basis can yield information about relative phase as well.

## Action of a unitary operator on a single qubit

* After the action of a unitary operator each state on a bloch sphere goes to another point on the bloch sphere
* operations are rigid body rotations and reflections
* Any 2x2 unitary matrix can be written as: $$\begin{align} U &= e^{i\alpha} \exp(-i \theta \hat{n} . \vec{\sigma}/2 ) \\ U &= aI + b \sigma_x + c \sigma_y + d \sigma_z \end{align}$$