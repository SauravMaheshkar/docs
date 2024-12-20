---
{"dg-publish":true,"permalink":"/areas/graphics/curves/"}
---

#comp37111
## Representations of Geometry

- **Explicit:** point clouds, polygon meshes, [[areas/graphics/Curves#3. Non-Uniform Rational Basis Spline (NURBS)\|NURBS]]
- **Implicit:** Level Sets, Algebraic surfaces

---
## Definitions

### Polylines
Polylines are sequence of vertices connected by straight line segments. Suitable for drawing simple shapes but lack any notion of smoothness required for modelling complex objects and surfaces.

* A smooth curve is always converted to a polyline for rendering.

### Curves
1. A curve can be seen as a continuous set of points in n dimensions. This definition allows us to easily generate points along a curve and visualise its shape.
    
2. A curve can be seen as a mapping from a interval S onto a plane. This definition allows us to describe trajectories and manipulate the speed at which we traverse the curve.$$ P : \mathbb{R} \ni S \mapsto \mathbb{R}^2 \hspace{2em} P(t) = \begin{pmatrix} x(t) \\ y(t) \end{pmatrix} $$
### Spline

- A **Spline** is a curve that connects two or more points, based on control points. These control points determine the trajectory and shape of the spline.
- **Tessellation** is the process of displaying the points on the curve $P(t)$ by discretising it at discrete $t$ values. This involves sampling the curve at intervals to create a series of points that approximate the curve.
- **Interpolation** refers to the process of constructing a curve in such a way that it precisely passes through all points.
- **Approximation** involves constructing a curve that doesn’t necessarily pass through all the points. Used to represent curves with few control points.

---
## Differential Properties of Curves
> [!tip] 🧠 Motivation:
> * Computing Normals of a Surface
> * Finding velocity of an animation
> * Analysing smoothness of a curve
    
- **Velocity** can be computed using the derivative of the curve $P(t)$ w.r.t $t$, and then normalised using the magnitude a unit vector.
- **Curvature/Acceleration is the derivative of the unit tangent**. It helps us understand how quickly the curve is changing direction at each point.
### Orders of Continuity
- **C0 Continuity:** This simply means that the curve is continuous, with no abrupt jumps or gaps. However, there might be sharp kinks or corners at the seams where curves connect.
- **G1 Continuity:** Geometric continuity ensures that tangents at the seams of connected curves point in the same direction.
- **C1 Continuity:** This form of parametric continuity goes a step further ensuring that the tangents themselves are the same at the seams.
- **C2 Continuity and Higher:** As we increase the order of continuity, the derivatives of the curves at the seams also match.
---
## Types of Splines
### 1. Bezier Curves
- A Bezier curve interpolates through some points (**first and last**) while approximating others. These curves need ($n+1$) control points, where $n$ is the degree of the curve
- These curves are always **bounded by the convex hull of its control points**.
- The tangents at the starting point and the endpoint; point in the direction of the line formed by their respective control points.
- A cubic bezier curve in particular is represented by cubic polynomials. These four coefficients represent basis functions.

$$ P(t) = (1-t)^3 P_1 + 3t(1-t)^2P_2 + 3t^2(1-t)P_3 + t^3P_4 $$
* These four coefficients/basis functions are [**Bernstein polynomials**](https://en.wikipedia.org/wiki/Bernstein_polynomial).
#### Matrix Notation

$$ P(t) = GBT(t) = \text{Geometry} \times \text{Spline Basis} \times \text{Power Basis} $$

$$ P(t) = \begin{pmatrix} x(t) \\ y(t) \end{pmatrix} = \begin{pmatrix} x_1 & x_2 & x_3 & x_4 \\ y_1 & y_2 & y_3 & y_4 \end{pmatrix}\begin{pmatrix} 1 & -3 & 3 & -1 \\ 0 & 3 & -6 & 3 \\ 0 & 0 & 3 & -3 \\ 0 & 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} 1 \\ t \\ t^2 \\ t^3\end{pmatrix} $$
$$\begin{pmatrix}B_1(t) \\ B_2(t) \\ B_3(t) \\ B_4(t)\end{pmatrix} = \begin{pmatrix}1 & -3 & 3 & -1 \\ 0 & 3 & -6  & 3\\ 0 & 0 & 3 & -3 \\ 0 & 0 & 0 & 1 \end{pmatrix} \begin{pmatrix}1 \\ t \\ t^2 \\ t^3 \end{pmatrix}$$
$$ \begin{pmatrix}1 \\ t \\ t^2 \\ t^3 \end{pmatrix} = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1/3 & 2/3 & 1 \\ 0 & 0 & 1/3 & 1 \\ 0 & 0 & 0 & 1 \end{pmatrix} \begin{pmatrix}B_1(t) \\ B_2(t) \\ B_3(t) \\ B_4(t)\end{pmatrix} $$

- Bernstein functions are bounded in $[0, 1]$.
- Bernstein functions always sum to unity for any value of $t$ (*Partition of Unity*). This ensures that all curves are within the convex hull.
{ #0da778}

- The **basis functions are linearly independent**, i.e. we can express any of the monomials as a linear combination of the others.
- An essential characteristic of Bezier curves is that **each control point influences the entire curve, not just its local vicinity**. This means that adjusting any control point can significantly impact the entire curve’s shape.
#### Subdivision
* Subdivision allows us to split a single Bezier curve into two separate curves.
* **De Casteljau Construction for Subdivision of Bezier Curves:**
	* Take the middle point of each of the 3 segments.
	- Construct the two segments joining them.
	- Join the middle point of those two segments
	- Take the middle point.
---
### 2. B-Spline Curves
- Need at least 4 control points.
- B-Splines are locally cubic, meaning each segment of the curve is defined by a cubic polynomials.
- Unlike Bezier curves, B-Spline curves are **not constrained to pass through any control points**, giving us more flexibility in shaping the curve.
- B-Spline curves are also bounded by the convex hull of its control points.
- Bezier curves also employ Bernstein polynomials (therefore [[areas/graphics/Curves#^0da778\|partition of unity]]).
#### Conversion between Bezier and B-Spline curves
- **Bezier to B-Spline:** Multiplying the bezier basis matrix by the inverse of the B-Spline basis matrix, obtaining new control points in the B-Spline basis.
- **B-Spline to Bezier:** Multiplying the B-Spline basis matrix by the inverse of the Bezier basis matrix, obtaining new control points in the Bezier basis.
---
### 3. Non-Uniform Rational Basis Spline (NURBS)
- Use homogenous coordinates, specifying weights for each control point known as knots in this context.
- Additionally they require a knot vector to control the curve’s shape.
- “_**Non-Uniform**_” refers to the varying spacing between the blending functions or knots in the curve. 
- “_**Rational**_” means the curve is defined by the ratio of cubic polynomials instead of just cubic terms.