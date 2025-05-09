---
{"dg-publish":true,"permalink":"/areas/qc/gates/","tags":["quantum-computing"]}
---

* **NOT-Gate (X-Gate)**: $$\sigma_x = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$$|0\rangle \sigma_x = |1\rangle$  and $|1\rangle\sigma_x = |0\rangle$
* **Phase Gate (NOT-Gate in the diagonal basis)**:$$\sigma_z = \begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$$$|0\rangle \sigma_z = |0\rangle$ and $|1\rangle \sigma_z = -|1\rangle$. This could also be generalised to: $$\begin{pmatrix}1 & 0 \\ 0 & e^{i\phi}\end{pmatrix}$$ which sends $|0\rangle \mapsto |0\rangle$ and $|1\rangle \mapsto e^{i\phi}|1\rangle$
* **T-Gate($\theta=\phi/4$): $$\begin{pmatrix}1 & 0 \\ 0 & e^{i\pi/4}\end{pmatrix}$$
* **Hadamard Gate**: $$\frac{1}{\sqrt2}\begin{pmatrix} 1 & 1 \\ 1 & -1\end{pmatrix}$$$|0\rangle \mapsto \frac{|0\rangle + |1\rangle}{\sqrt2}$ and $|1\rangle \mapsto \frac{|0\rangle - |1\rangle}{\sqrt2}$
* **Controlled-NOT Gate(CNOT Gate)**

| **a** | **b** | **c** |
| :---: | :---: | :---: |
|   0   |   0   |   0   |
|   0   |   1   |   1   |
|   1   |   0   |   1   |
|   1   |   1   |   0   |
![](https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Cnot-compared-to-xor.svg/1920px-Cnot-compared-to-xor.svg.png)
* **Toffoli Gate** 