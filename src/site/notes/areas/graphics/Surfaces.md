---
{"dg-publish":true,"permalink":"/areas/graphics/surfaces/"}
---

#comp37111 

Various ways to represent surfaces:
* **Explicit:** Mesh (analogous to [[areas/graphics/Curves#^b2cfa1\|polylines]]), Point Clouds.
	* Can be triangle or polylines meshes. Each polygon is called a face and each point is called a vertex.
* **Tensor Product Splines**: Analogous to [[areas/graphics/Curves#^d3c475\|Spline Curves]].
* **Implicit:** Formulaic
* **Procedural**
---
## 1. Point Set / Clouds

* When scanning some object with a laser the output is a point cloud.
* Being favoured recently in combination with implicit surfaces.
---
## 2. Tensor Product Splines
 
 * Cubic Bezier Surface  $$P(u, v) = (1-u)^3 P_1 (v) + 3u (1-u)^2 P_2(v) + 3u^2 (1-u) P_3 (v) + u^3 P_4(v)$$
 * A small part of a surface is known as a **patch**.
 * Matrix Notation: $$P^x(u ,v) = \begin{pmatrix} B_1 (u) \ldots B_4(u) \end{pmatrix} \begin{pmatrix} P^x_{1, 1} \ldots  P^x_{1, 4} \\ . \\ . \\ P^x_{4, 1} \ldots P^x_{4, 4}\end{pmatrix} \begin{pmatrix} B_1 (v) \\ . \\ . \\ B_4(v) \end{pmatrix}$$
 * Tensor Product Splines:
	 * **Pros:** resulting surface is quite smooth + can be described using small set of points
	 * **Cons:** harder to render (converted to triangle meshes) + tricky to ensure continuity at patch boundaries

* **Displacement** is a way to add discontinuity to a surface. Some noise (displacement map) is added to the surface and points are displaced by the corresponding value in the direction of the surface normal. We can then use [[areas/graphics/Curves#^c7d2dc\|Tessellation]] to render the curve.
* **Corner Cutting Subdivision Technique (Chaikin's Algorithm):**
	* Starting from a polygon mesh (control polygon), connect the mid points of the line segment joining the control points
	* Results in a smoother surface
	* This produces a quadratic B-Spline curve
---
## 3. Implicit Surfaces (Formulaic)
* Pros:
	* Efficient to check if a point is in the surface or not (just plug into the formula)
	* Efficient for boolean operations
	* Can handle weird topology (holes in objects)
* Cons:
	* Hard to generate points on the surface or add points to the surface. 
---
## 4. Procedural
* Ex: Surface of Revolution, revolve a base shape around the basis $s(u, v) = R(v) q(u)$.
* Ex: Generalised Cylinder, move a 2D curve along a trajectory $s(u, v) = M(c(v))q(u)$. Surface of a revolution can be seen as a special case of this.
---
## Differential Properties of Surfaces
* **Frenet Frame:**
	* derivatives of a surface. 
	* problem with using the 2nd derivative because of inflection points, points where the direction of normal changes its sign.