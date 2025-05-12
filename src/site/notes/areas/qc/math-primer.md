---
{"dg-publish":true,"permalink":"/areas/qc/math-primer/","tags":["quantum-computing"]}
---

In Quantum Computing, one is interested in a *finite dimensional complex linear [[areas/math/abstract/vector space\|vector space]]*. The elements of these vector space are represented in the dirac notion using $| \alpha \rangle$ (**ket**)

* Two kets can be added to give a new vector $| \gamma \rangle \in V$$$ \begin{array}{ll} | \gamma\rangle &= | \alpha \rangle + | \beta \rangle \\ \gamma_i &= \alpha_i + \beta_i\end{array}$$vector addition has the following properties:$$\begin{array}{ll}|\alpha \rangle + | \beta\rangle  &= |\beta \rangle + |\alpha\rangle \\ | \alpha \rangle + (|\beta \rangle + | \gamma \rangle ) &= (|\alpha\rangle + |\beta\rangle) + | \gamma \rangle \end{array}$$
* We can also multiply a vector $|\alpha \rangle \in V$ with a complex number $c \in \mathbb{C}$ to obtain a new vector $c|\alpha\rangle$. The following properties hold for $c, d \in \mathbb{C}$ and $|\alpha\rangle, |\beta\rangle \in V$:$$\begin{array}{ll}c(|\alpha\rangle + |\beta\rangle) &= c|\alpha\rangle + c | \beta \rangle \\ (c+ d) |\alpha\rangle &= c |\alpha \rangle + d(|\alpha\rangle) \\ (cd) | \alpha \rangle &= c(d|\alpha\rangle)\end{array}$$
* A vector space contains the zero vector with the following properties:$$\begin{array}{ll}|\alpha\rangle + 0 &= | \alpha\rangle \\ 0|\alpha\rangle &= 0 \\ 1 |\alpha \rangle &= |\alpha\rangle \\ |\alpha\rangle - |\alpha \rangle &= 0\end{array}$$
> [!warning] We do not use the ket notation for the zero vector

### Linear Independence
$$c_1 |\alpha_1\rangle + c_2 | \alpha_2 \rangle + \ldots | c_m |\alpha_m\rangle = 0$$
iff $c_1, \ldots c_m = 0$
### Inner Product
* denoted $\langle \alpha | \beta \rangle$
* **Prop:** $\langle \alpha | \beta \rangle = \langle \beta | \alpha \rangle^*$ (*skew-symmetric*)
* **Prop:** $\langle \alpha | c \beta + d \gamma \rangle = c \langle \alpha | \beta \rangle + d\langle \alpha | \gamma \rangle$ (*linearity*)
* **Prop:** $\langle \alpha | \alpha \rangle \geq 0$ (*positivity*)
* $\langle \alpha |$ is called the **dual vector/bra**. The dual vector is a linear operator from the vector space $V$ to the complex numbers $\mathbb{C}$, defined by $\langle \alpha | (| \beta \rangle) = \langle \alpha | \beta \rangle$. For example is $| \alpha \rangle = (\alpha_1 \ldots \alpha_n)$ and $| \beta \rangle = (\beta_1 \ldots \beta_n)$ then $\langle \alpha | \beta \rangle = \sum_{i=1}^{n} \alpha_i^* \beta_i$
* norm of a ket is defined as $|| |\alpha \rangle || = \sqrt{\langle \alpha | \alpha \rangle}$. The normalised unit vector $|\alpha \rangle / || (| \alpha \rangle) ||$ has unit norm$$|| ( | \alpha \rangle )|| = \sqrt{\sum_{i=1}^{n} | \alpha_i|^2}$$
* Hilbert Space $\equiv$ Complex [[areas/math/abstract/vector space\|vector space]] equipped with an inner product
### Cauchy-Schwartz Inequality
$$| \langle \alpha | \beta \rangle |
{ #2}
 \leq \langle \alpha | \alpha \rangle \langle \beta | \beta \rangle$$
**Proof:** For any $|\alpha\rangle, |\beta\rangle \in V$ and $c \in \mathbb{C}$ we have$$\begin{array}{ll}\langle \alpha - c \beta | \alpha - c \beta \rangle \geq 0 \\ \langle \alpha | \alpha \rangle - c \langle \alpha | \beta \rangle - c^* \langle \alpha | \beta \rangle - c c^* \langle \beta | \beta \rangle \geq 0\end{array}$$ we set $c = \frac{\langle \beta | \alpha \rangle}{\langle \beta | \beta \rangle}$$$\begin{array}{ll}\langle \alpha | \alpha \rangle - \frac{\langle \alpha | \beta \rangle \langle \beta | \alpha \rangle}{\langle \beta | \beta \rangle} - \frac{\langle \alpha | \beta \rangle \langle \beta | \alpha \rangle}{\langle \beta | \beta \rangle} - \frac{\langle \alpha | \beta \rangle \langle \beta | \alpha \rangle}{\langle \beta | \beta \rangle} &\geq 0 \\ \langle \alpha | \alpha \rangle \langle \beta | \beta \rangle - 3 | \langle \alpha | \beta \rangle |
{ #2}
 &\geq 0 \\ \langle \alpha | \alpha \rangle \langle \beta | \beta \rangle &\geq  | \langle \alpha | \beta \rangle |^2 \end{array}$$
### Orthonormality Condition
$| \alpha \rangle, | \beta \rangle$ are said to be orthogonal if their product is zero$$\langle \alpha | \beta \rangle = 0$$A set of vectors $|\alpha_1\rangle, |\alpha_2\rangle \ldots |\alpha_n\rangle$ is said to be orthogonal if:$$\langle \alpha_i | \alpha_j\rangle = \delta_{ij}$$
* Orthonormal vectors are linearly independent
* Dimension $n$ of vector spaces is given by the maximum number of linearly independent vectors
* A set of linearly independent vectors $|\alpha_1\rangle \ldots |\alpha_n\rangle$ in an $n$-dimensional vector space is said to be a basis for for the vector space. Any vector $|\alpha \rangle$ can be expanded over a basis $\{ |\alpha_1\rangle , \ldots , |\alpha_n\rangle \}$$$|\alpha\rangle = \displaystyle\sum_{i=1}^{n} a_i |\alpha_i\rangle$$
* $|\alpha_i\rangle$ are known as the complete set of vectors
* $a_i \in \mathbb{C}$ are the components of the vector $|\alpha\rangle$ w.r.t. basis $\{ |\alpha_1\rangle , \ldots , |\alpha_n\rangle \}$
* $a_i$'s are uniquely determined for an orthonormal basis$$a_i =\langle \alpha_i | \alpha\rangle$$
* The ordered collection of components $\{ a_1 \ldots a_n \}$ constitutes a representation of the vector $| \alpha \rangle$
### Linear Operators
An operator $A$ maps each vector $|\alpha\rangle \in V$ into another vector $|\beta\rangle \in V$:$$|\beta\rangle = A |\alpha\rangle$$This operator $A$ is said to be linear if$$A(a|\alpha\rangle + b |\beta\rangle) = aA|\alpha\rangle + bA|\beta\rangle$$Two operators are said to be equal if$$A|\alpha\rangle = B|\alpha\rangle$$The sum of two linear operators is defined as$$C|\alpha\rangle = (A + B) | \alpha \rangle = A |\alpha\rangle + B|\alpha\rangle$$The product of two operators is defined as$$D|\alpha\rangle = AB|\alpha\rangle = A(B|\alpha\rangle)$$
### Completeness Relation
We know that $a_i = \langle \alpha_i | \alpha \rangle$$$\begin{array}{ll} |\alpha\rangle &=\sum a_i |\alpha_i\rangle \\ &= \sum \langle\alpha_i | \alpha\rangle  | \alpha_i \rangle \\ &= \sum (|\alpha_i \rangle \langle \alpha_i |) |\alpha\rangle \end{array}$$Thus $\sum |\alpha_i\rangle\langle\alpha_i| = \mathbb{I}$
### Matrix Representation of an Operator
Consider a linear operator$$A |\alpha\rangle = |\beta\rangle$$Expanding over an orthonormal basis $\{ | \gamma_1 \rangle \ldots | \gamma_n \rangle \}$$$|\alpha \rangle =  \sum a_i | \gamma_i \rangle  \hspace{2em} |\beta\rangle = \sum b_i | \gamma_i \rangle$$Using $b_i = \langle \gamma_i | \beta\rangle$$$\begin{array}{ll}&= \langle \gamma_i | A \alpha\rangle \\ &= \sum_j \langle \gamma_i | A | \gamma_i \rangle a_j \\ &= \sum_j \langle \gamma_i | A \gamma_j \rangle a_j \\ &= A_{ij}a_j \end{array}$$
### Pauli Matrices
$$\sigma_x = \begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix}$$$$\sigma_y = \begin{pmatrix}0 & -i \\ i & 0\end{pmatrix}$$$$\sigma_z = \begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$$
* **Prop:** $\sigma_x^2 = \sigma_y^2 = \sigma_z^2 = \mathbb{I}$
* **Prop:** $$\begin{array}{ll}\sigma_x\sigma_y &= i\sigma_z \\ \sigma_y\sigma_z &= i\sigma_x \\ \sigma_z\sigma_x &= i\sigma_y\end{array}$$

|                      Pauli Matrices                      |                                                Eigenvectors                                                 | Eigenvalues |
| :------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------: | :---------: |
| $\sigma_x = \begin{pmatrix}0 & 1 \\ 1 & 0\end{pmatrix}$  | $\frac{1}{\sqrt2}\begin{pmatrix}1 \\ 1\end{pmatrix}$, $\frac{1}{\sqrt2}\begin{pmatrix}1 \\ -1\end{pmatrix}$ |   $\pm$ 1   |
| $\sigma_y = \begin{pmatrix}0 & -i \\ i & 0\end{pmatrix}$ | $\frac{1}{\sqrt2}\begin{pmatrix}1 \\ i\end{pmatrix}$, $\frac{1}{\sqrt2}\begin{pmatrix}1 \\ -i\end{pmatrix}$ |   $\pm$ 1   |
| $\sigma_z = \begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$ |                 $\begin{pmatrix}1 \\ 0\end{pmatrix}$, $\begin{pmatrix}0 \\ 1\end{pmatrix}$                  |   $\pm$ 1   |

### Projectors
If $|\alpha\rangle \in V$ is a unit vector, the uni-dimensional projector $P_{\alpha}$ is defined for some $|\beta\rangle$ as$$\begin{array}{ll}P_{\alpha} | \beta \rangle &= |\alpha\rangle\langle \alpha | \beta \rangle \\ &= \langle \alpha | \beta \rangle |\alpha\rangle\end{array}$$This operator is called a projector since it projects a generic vector $|\beta\rangle$ along the dimension $|\alpha\rangle$
* **Prop:** $P_{\alpha} | \alpha \rangle = | \alpha \rangle$
* **Prop:** $P_{\alpha} | \gamma \rangle = 0$ when $| \gamma \rangle$ is orthogonal to $| \alpha \rangle$
* **Prop:** $P_{\alpha}^2 = P_{\alpha}$
### Eigenvalues and Eigenvectors
An eigenvector of a linear operator $A$ is a non-zero vector $|\alpha\rangle$ s.t.$$A |\alpha\rangle = \alpha | \alpha\rangle$$$$\begin{array}{ll}|\alpha\rangle &= \displaystyle \sum_{i=1}^{n} \alpha_i | \gamma_i\rangle \\ A |\alpha\rangle &= \displaystyle \sum_{i=1}^{n} (\sum_j A_{ij} a_j) | \gamma_i  \rangle \\ A | \alpha\rangle &= \alpha | \alpha \rangle \\ A | \alpha \rangle - \alpha | \alpha \rangle &= 0 \\ \displaystyle \sum_{i=1}^{n} (\sum_{j=1}^{n} A_{ij}a_j - \alpha a_i) | \gamma_i \rangle &= 0\end{array}$$
### Hermitian Operators
For any linear operator A on a Hilbert Space $\mathcal{H} \,\, \exists$ a unique linear operator $A^{\dagger}$ on $\mathcal{H}$ called the adjoint or Hermitian conjugate s.t.$$\langle \alpha | A \beta \rangle = \langle A^{\dagger} \alpha | \beta \rangle $$$$\begin{array}{ll}\langle A \alpha | \beta \rangle &= \langle \beta | A \alpha\rangle^* \\ &= \langle A^{\dagger}\beta | \alpha \rangle \\ &= \langle \alpha | A^{\dagger} \beta \rangle\end{array}$$
* The eigenvectors of an Hermitian operator form an orthonormal set in the Hilbert Space $\mathcal{H}$
* Any vector in the Hilbert Space $\mathcal{H}$ can be expressed as a linear superposition of vectors of said basis
* We know $A_{ij} = \langle \gamma_i | A \gamma_j \rangle$ (from [[areas/qc/math-primer#Matrix Representation of an Operator\|#Matrix Representation of an Operator]]). Then $A_{ji} = \langle \gamma_j | A \gamma_i \rangle \implies A_{ji}^* = \langle A \gamma_i | \gamma_j \rangle = \langle \gamma_j | A^{\dagger} \gamma_i \rangle$$$A_{ji}^{*} = A^{\dagger}_{ij}$$
* Matrix elements of $A^{\dagger}$ are the complex conjugates of the matrix elements of $A^{\top}$
### Inverse Operators
For an operator $A$, an operator $B$ is said to be the inverse if $AB = BA = I$

> [! important] The inverse of an operator $A$ exists iff $\det A \neq 0$

### Unitary Operator
An operator $\mathcal{U}$ is said to be unitary if $$\mathcal{U}\mathcal{U}^{\dagger} = \mathcal{U}^{\dagger}\mathcal{U} = I$$
* this definition implies $\mathcal{U}^{\dagger} = \mathcal{U}^{-1}$
* The product $\mathcal{U}\mathcal{V}$ of two unitary operators is unitary$$(\mathcal{U}\mathcal{V}) = (\mathcal{U}\mathcal{V})^{\dagger} = \mathcal{U}\mathcal{V}\mathcal{V}^{\dagger}\mathcal{U} = I$$
* Unitary operators preserve inner products$$\langle \mathcal{U} \alpha | \mathcal{U}\beta \rangle = \langle \alpha | \mathcal{U}^{\dagger}\mathcal{U} | \beta\rangle$$
* [[areas/qc/math-primer#Pauli Matrices\|#Pauli Matrices]] are both Hermitian and Unitary
### Change of Basis
We can convert from one basis $| \gamma_i \rangle$ to another basis $| \gamma_i^{'} \rangle$ using unitary transformation $\mathcal{S}$$$|\gamma_i^{'} \rangle = \sum_j S_{ji} | \gamma_i \rangle$$
Thus if $| \alpha \rangle = \sum_i a_i | \gamma_i \rangle$ then we can write$$\begin{array}{ll}|\alpha\rangle &= \sum_j a_j^{'} | \gamma_j^{'} \rangle \\ &= \sum_{j} a_j^{'} S_{ji} | \gamma_i\rangle \end{array}$$where $a_j^{'} = \langle \gamma_j^{'} | \alpha \rangle$
### Diagonal Representation
An operator can be represented using its eigenvectors as basis:$$A = \displaystyle \sum_{i=1}^{n} \lambda_i | i \rangle \langle i | $$
* An operator is said to be diagonalisable if it has a diagonal representation
* Hermitian and Unitary operators are diagonalisable

> [!success] defn: Normal Operators
> $$AA^{\dagger} = A^{\dagger}A$$
## Commutators and Anti-Commutators
* We say two operators commute if $AB = BA$. The commutator of two operators $A$ and $B$ is defined as$$[A, B] = AB - BA$$
	* **Prop:** $[A, B] = - [B ,A]$
	* **Prop:** $[AB, C] = A[B,C] + [A, C]B$
* The anti-commutator of two operators is defined by:$$\{ A, B\} = AB + BA$$Two operators anti-commute is $\{ A, B\} = 0$

> [! success] [[areas/qc/math-primer#Pauli Matrices\|#Pauli Matrices]] anti-commute

### Trace
Trace of a matrix is the sum of its diagonal elements$$\text{Tr(A)} = \displaystyle \sum_{i=1}^{n} A_{ii}$$
* **Prop:** $\text{Tr(A+B)} = \text{Tr(A)} +  \text{Tr(B)}$
* **Prop:** $\text{Tr(cA)} = c  \text{Tr(A)}$
* **Prop:** $ \text{Tr(AB)} =  \text{Tr(BA)}$

* For a unitary operator $\mathcal{U}$$$\text{Tr}(\mathcal{U}^{\dagger}A\mathcal{U}) = \text{Tr}(\mathcal{U}\mathcal{U}^{\dagger}A) = \text{Tr}(A)$$**i.e.** Trace is invariant under Unitary Transformations
