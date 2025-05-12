---
{"dg-publish":true,"permalink":"/areas/qc/grover-s-search-algorithm/","tags":["quantum-computing"]}
---

**Problem:** Given $N = 2^n$ items, find a particular item

* We have a function $f(x)$ s.t. $f(x) = 1 ; x = z$ where z is the item of interest and $0$ everywhere else
* A classical algorithm takes $O(N)$ steps on average while Grover's algorithm takes $O(\sqrt N)$ steps

> [! tip] This is accomplished by amplifying the amplitude of the vector $|z\rangle$ while cancelling the amplitude of $|x\rangle (x \neq z)$

### $P_0$ Transformation

We define the conditional phase shift transformation as$$P_0 : |x\rangle \mapsto \begin{cases} |x\rangle  &\quad{} x=0 \\ -|x\rangle &\quad{} x>0\end{cases}$$$$P_0 = 2|0\rangle\langle0| - I$$
### $\mathcal{U}_f$ Transformation

Consider the standard oracle setup$$\mathcal{U}_f: |x \rangle |y \rangle \mapsto|x\rangle |y \oplus f(x)\rangle$$
* If $f(x) = 1$ then $|y \oplus f(x) \rangle = -|y\rangle$
* If $f(x) = 0$ then $|y \oplus f(x) \rangle = |y\rangle$

> [!success] $\mathcal{U}_f$ inverts the amplitude of $z$ alone !!

We can generalize this to$$\mathcal{U}_f: |x\rangle | y\rangle \mapsto (-1)^{f(x)} |x\rangle |y\rangle$$Rewriting $|x\rangle$ as $\sum_x \alpha_x |x\rangle$ and dropping $|y\rangle$ for simplicity we get$$\mathcal{U}_f: \sum_x \alpha_x |x\rangle \mapsto (-1)^{f(x)} \alpha_x |x\rangle$$
**Example:** $$|s\rangle := |00\rangle + |01\rangle + |10\rangle + |11\rangle \hspace{3em} z:= |10\rangle$$$$\mathcal{U}_f |s\rangle = |00\rangle + |01\rangle - |10\rangle + |11\rangle $$
### $\mathcal{U}_s$ Transformation
$$\begin{array}{ll}\mathcal{U}_s &= H^{\otimes n} P_0 H^{\otimes n} \\ \mathcal{U}_s &= H^{\otimes n}(2 |0\rangle \langle0| - I) H^{\otimes n} \\&=2|s\rangle\langle s| - I\end{array}$$

Consider an arbitrary ket $|\psi \rangle$ $$|\psi\rangle = \sum a_x|x\rangle$$ $$\begin{array}{ll}\langle s|\psi\rangle &= \displaystyle \frac{1}{\sqrt 2^n} \sum_{x,x'} a_x \langle x|x'\rangle \\ &= \displaystyle \frac{1}{\sqrt 2^n} \sum_x a_x\end{array}$$
$$\bar{a} = \frac{1}{2^n} \sum_x a_x$$
$$\langle s | \psi \rangle =  \sqrt{2^n} \,\bar{a}$$

**Action of** $\mathcal{U}_s$ **arbitrary key**$$\begin{array}{ll}\mathcal{U}_s |\psi \rangle &= (2|s\rangle\langle s| - I)|\psi \rangle\\&=2|s\rangle\langle s | \psi \rangle - |\psi\rangle\\&= (2 \sqrt{2^n} \bar{a})|s\rangle - |\psi\rangle \\ &= \displaystyle(2 \sqrt{2^n} \,\bar{a}) \frac{1}{\sqrt{2^n}} \sum_x |x\rangle - \sum_x a_x |x\rangle \\ &= \sum_x(2\bar{a} - a_x) |x\rangle\end{array}$$
Compare this to the original value of ket $|\psi\rangle = \sum_x \alpha_x |x\rangle$. Let's compare the **Amplitude w.r.t mean**

|   **Before**    |                   **After**                   |
| :-------------: | :-------------------------------------------: |
| $a_x - \bar{a}$ | $2\bar{a} - a_x  - \bar{a}= -(a_x - \bar{a})$ |
> [!tip] Thus $\mathcal{U}_s$ inverts the amplitude w.r.t. the mean of an arbitrary ket

### Grover's Operator
$$G = \mathcal{U}_s \mathcal{U}_f$$
Grover's operator causes a rotation of $2 \theta$ where $\frac{\pi}{2} - \theta$ is the angle between $|s\rangle$ and $|z\rangle$

Thus, we can perform this operation $m$ times to align the ket's together. Since each operation of this operator rotates it by $2\theta$ and we want to align it with $\frac{\pi}{2} - \theta$ $$\begin{array}{ll}m(2\theta) &= \frac{\pi}{2} - \theta \\ m &= \frac{\pi}{4\theta} - \frac{1}{2} \\ m &\approx\frac{\pi \sqrt N}{4}\end{array}$$ since $\theta \approx \sin \theta = \frac{1}{\sqrt N}$

---

**Example:** Consider the 3 qubit case wherein we are interested in $z = |4\rangle$ from $|\psi\rangle = \frac{1}{\sqrt{2^2}} \sum_{x} |x\rangle$.In the standard ket $|s\rangle$ each basis has an amplitude of $\frac{1}{\sqrt8}$
Consider the application of $\mathcal{U}_f$:$$\mathcal{U}_f | \psi \rangle = \frac{1}{\sqrt 8}( |0\rangle + |1\rangle + \ldots | 8\rangle) - \frac{1}{\sqrt8} |4\rangle$$The new mean amplitude $\bar{a}$ becomes:$$\bar{a} = \frac{1}{8}[\frac{7}{\sqrt8} - \frac{1}{\sqrt8}] = \frac{3}{8 \sqrt2}$$Now, consider the application of $\mathcal{U}_s$:
* for every unmarked state the amplitude becomes $$2(\frac{3}{8 \sqrt2}) - \frac{1}{2\sqrt2} = \frac{1}{4\sqrt2}$$
* for every marked state the amplitude becomes $$2(\frac{3}{8 \sqrt2}) + \frac{1}{2\sqrt2} = \frac{5}{4\sqrt2}$$
