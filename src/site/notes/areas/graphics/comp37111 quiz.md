---
{"dg-publish":true,"permalink":"/areas/graphics/comp37111-quiz/"}
---

#comp37111 
1. Which of the following is true?
	* [x] B-spline curves offer better control compared to Bezier curves
	* [ ] B-Spline curve passes through the endpoints
	* [ ] The B-Spline basis functions are dependent on the number of control points
	* [ ] Bezier curves can be changed locally using one control points
2. What is C1 continuity at the seem of two curves attaching together?
	* [ ] The tangents and the curvature of the endpoints of the two curves are exactly the same
	* [x] The tangents of the endpoints of the two curves are exactly the same. 
	* [ ] The tangents of the endpoints of the two curves are pointing in the same direction
	* [ ] The curve is flat at the seam
3. Consider a cubic B-spline curve with control points (-1,-1), (-1,1), (1,1), and (1,-1). What are the endpoints?
	1. ✅ Left control point: (-2/3,2/3) Right control point:(2/3,2/3)
	2. Left control point: (-2/3,-2/3) Right control point:(2/3,-2/3)
	3. Left control point: (-1,-1) Right control point:(1,-1)
	4. Left control point: (-1/2,0) Right control point:(1/2,0)
4. In the previous question, what is the mid point on the curve? The control points of the B-Spline are at (-1,-1), (-1,1), (1,1), and (1,-1).
	1. (1, 0)
	2. (0, 1)
	3. (1/2, 0)
	4. ✅ (0, 1/2)
5. Select the true statement:
	1. A same curve cannot be defined using both bezier and b-spline curve.
	2. B-spline curves are good for interpolation when passing through an exact control point.
	3. Unlike Bezier curves, B-spline curves use high-order polynomials as the number of control points increases.
	4. ✅ B-spline curves are hard to compute and complicated to implement but easy to control the curve and more flexible.
6. You want to create a character to develop your game. Which explains the first step better? 
	1. Start by modelling inside the body using actual volumes until you reach the skin and then wear clothes on top. 
	2. ✅ Model only the visible parts of the character using a surface representation (i.e. mesh) then add textures as if it has real volume. 
	3. Modelling is the last step in the pipeline, start with making a skeleton of the character, adding animation, and rendering first.
	4. Write the equations to be able to calculate the implicit form of the character.
7. Similar to curves, surfaces also can be mostly represented in three forms: implicit, explicit and parametric. Which of the statement is NOT true?
	1. To trace a variable on the surface, implicit form is much harder than explicit and parametric.
	2. Parametric representation offers an easy fitting and manipulation of free-form shapes compared to the other two forms.
	3. Parametric representation of a curve in 2D is x = x(t) and y = y(t)
	4. ✅ An explicit representation of a surface is defined as f(x,y,z)
8. Which of the following statements is wrong about Frenet Frames?
	1. Frenet frame describes the geometric properties of the curve.
	2. The frame defines the three vectors of so-called Tangent (T), Normal (N) and Binormal (B).
	3. ✅ When curvature changes in sign, tangent vector(T) of the curve is flipped and causes inflection.
	4. Binormal obeys the right-hand rule using the cross product of tangent and normal.
9. An implicit form of defining a genus is as follows:
	$2y(y^{2}-3x^{2})(1-z^{2})+(x^{2}+y^{2})^{2}-(9z^{2}-1)(1-z^{2})=0$
    Which point is outside the genus?
	1. (0, 0, -1)
	2. ✅ (0, 0, 0)
	3. (0, 0, 1)
	4. (1/2, 1/2, 1/2)
10. Which of the following statements is true?
	1. To define a Bezier path using four cubic Bezier curves going horizontally and four going vertically, 32 control points are needed.
	2. Mesh representation is hard to use because adding new vertices to the surface is challenging.
	3. ✅ Implicit surfaces, surfaces of revolution, and tensor product splines all convert to triangle mesh in GPUs anyways.
	4. Using a displacement map is an easy approach for adding detailed geometry without adding new vertices (the displaced surface is as light as a flat plane.)
11. You modelled an imaginary character with three hands and two legs, then you augmented the character with bones (or handles). Now you need to move the character along with assigned bones. What is this step known as?
	1. Rigging
	2. ✅ Skinning
	3. Tweening
	4. Posing
12. In animating a bouncing ball, what does the rate of acceleration convey?
	1. ✅ Ball's weight
	2. Ball's stiffness
	3. fps
	4. in-between frames (tweening)
13. Which describes the standard frames per second needed for film, video, and virtual reality respectively?
	1. 24, 24, 24
	2. ✅ 24, 30, 90
	3. 90, 90, 90
	4. 24, 30, 30
14. A pinkish color is defined on a chromaticity diagram with x=0.4 and y=0.2. What is the value if the color becomes twice darker by adding black? 
	1. x=0.2 + y=0.1
	2. x=1 + y=1
	3. x=0.8 + y=0.4
	4. ✅ x=0.4 + y=0.2
15. Which of the statements is wrong about colours?
	1. The human eye has three cones known as S,M,L
	2. HSV (hue, saturation, value) is the most natural colour space for users to edit.
	3. Achromatic colours have the same amount of each channel (i.e. R,G,B)
	4. ✅ White objects absorb all the wavelengths and don't reflect any light
16. What is the purpose of the rigging step?
	1. ✅ To add virtual bones that allow the model to move.
	2. To connect points on the mesh surface to corresponding bones.
	3. It fills out the intermediate frames in between two key frames.
	4. It ensures that there is no long thin triangle in the mesh model.
17. What is the main benefit of Motion Capture?
	1. It cannot produce movements that do not obey the laws of physics.
	2. The need for a studio and real actor/actress and an actual capturing setup.
	3. ✅ Provides accurate motion, unusual performance, and personalities for characters.
	4. If something goes wrong, it would be easier to start from the scratch for recording that to edit.
18. The posing step in animation involves adjusting the character's skeletal rig and creating keyframes to define the character's specific positions and movements within a scene.
	1. ✅ True
	2. False
19. In the context of 3D character animation and modeling, what does "skinning" refer to?
	1. Applying textures and colors to a character model.
	2. Creating the character's skeleton and control structures.
	3. ✅ Deforming the character's mesh to follow the movement of its skeleton.
	4. Adding special effects to the character animation.
20. In Forward Kinematics (FK), joint angles are calculated to achieve a desired end effector position, while in Inverse Kinematics (IK), the end effector position is known and joint angles are computed.
	1. ✅ True
	2. False
21. There are three types of joints: ball, universal and hinge and each offer different degrees of freedom. Which of the following is a ball joint example?
	1. Wheels of a car
	2. ✅ Human Shoulder
	3. Human Knee
	4. Window
22. Which of the following is less useful for the simulation of milk?
	1. Eulerian Method
	2. ✅ Mass Spring Method
	3. Finite Element Method
	4. Lagrangian Method
23. Instead of solving collision equations for every complex objects in the scene, we can use their bounding volumes. Which of the following is the simplest to compute?
	1. k-DOP
	2. Oriented Bounding Box
	3. ✅ Axis Aligned Bounding Box
24. What is the time complexity of solving collisions of N objects?
	1. log(N)
	2. ✅ $N^2$
	3. N
	4. constant
25. What is the main purpose of building hierarchical data structures?
	1. ✅ Allow determining quickly if two objects are in close proximity useful for collisions as well as rendering
	2. Offer good control for users to track the particles during simulation
	3. To simply the model and replacing very complex models
	4. Allows more accurate collision detection
26. The physical basis for The Rendering Equation is derived from
	1. ✅ The first law of thermodynamics.
	2. The second law of thermodynamics.
	3. Lambert's cosine law.
	4. Inverse Square Law
	5. Snell's Law
27. The Rendering Equation takes into account the position in space from which the scene is being viewed
	1. True
	2. ✅ False
28. Lambert's cosine law means that maximum light hits a surface when
	1. The plane of the surface is perpendicular to its normal.
	2. ✅ The surface normal is parallel to the light direction.
	3. The surface normal is perpendicular to the light direction
	4. The light direction is parallel to the plane of the surface
29. *Assertion (A):* The Rendering Equation can be solved analytically. *Reason (R):*  because it is a Fredholm Equation of the Second Kind
	1. Both A and R are true and R is the correct explanation of A
	2. Both A and R are true but R is not the correct explanation of A
	3. A is true but R is false
	4. ✅ A is false but R is true
	5. Both A and R are false
30. *flux is the* name given to the thermodynamic radiosity arriving at a point on the given surface. The term roughly means "flow of particles"
31. In radiosity the measure of how visible two surfaces are to one another is known as the *form factor*
32. Which of the following is not taken into consideration when calculating a form factor?
	1. Occluding between patches
	2. Relative orientation of patches
	3. Distance between patches
	4. ✅ Surface Material of patches
33. Which of the following lists contain only features that can be reproduced using the Radiosity approach?
	1. Colour bleed, caustics, soft shadows
	2. ✅ Soft shadows, colour bleed, diffuse surfaces
	3. Diffuse surfaces, reflections, soft shadows
	4. Diffuse surfaces, transparency, soft shadows
34. Radiosity solutions are viewpoint dependent
	1. True
	2. ✅ False
35. Which of these effects are easily inherited/reproduced by Classical Whitted style ray tracing?
	* [x] Specular highlights
	* [x] Reflection
	* [x] Refraction
	* [ ] Colour bleed
	* [x] Hard shadows
	* [ ] Diffuse inter-reflection
	* [x] Participating media
	* [x] Depth of field
	* [ ] Soft shadows
36. Which of these effects are naturally produced from basic Radiosity?
	* [ ] Specular highlights
	* [ ] Specular Reflection
	* [ ] Refraction
	* [x] Colour bleed
	* [ ] Crisp shadows
	* [x] Diffuse inter-reflection
	* [ ] Participating media
	* [x] Soft shadows
37. Which of these effects are naturally produced by Path tracing?
	* [x] Specular highlights
	* [x] Specular reflection
	* [x] Refraction
	* [x] Colour bleed
	* [x] Soft shadows
	* [x] Hard shadows
	* [x] Diffuse inter-reflection
38. Which of these effects are represented by the Rendering Equation using only a BRDF?
	* [x] Specular highlights
	* [x] Reflection
	* [ ] Refraction
	* [ ] Colour bleed
	* [ ] Penumbral Shadows
	* [ ] Umbral Shadows
	* [x] Diffuse inter-reflection
	* [ ] depth of field
	* [x] relativistic effects
	* [x] luminescence 
39. Which of the following effects can texture baking approximate for a scene in which the viewpoint moves?
	* [ ] Specular highlights
	* [ ] Reflection
	* [ ] Refraction
	* [x] Colour bleed
	* [x] Diffuse inter-reflection
	* [x] Soft Shadows
	* [x] Hard Shadows
40. Insufficient samples per pixel when path tracing results results in scenes that are
	* [x] Noisy
	* [x] Inaccurate
	* [ ] Diffuse 
	* [ ] Dark
41. Increasing the samples per pixel when path tracing
	* [ ] Increases computational complexity exponentially with to the number of pixels
	* [x] Increases computational complexity based on the size of the view plane
	* [ ] Increases computational complexity based on the number of light sources
	* [ ] Decreases computational complexity based on the number of transmissive surfaces
42. Which of the following techniques are viewpoint independent?
	* [ ] ray tracing
	* [ ] path tracing
	* [x] radiosity
	* [x] texture baking
43. Direct Volume Rendering creates viewpoint independent results?
	* [ ] True
	* [x] False
44. The data structure used for Direct Volume Rendering is called a grid-cell or a *voxel* structure/array
45. Which of the following statements about direct volume rendering are true? Select all true answers. 
	* [ ] The original data set represents the density of the object being rendered, sampled at various points in space
	* [x] The value of a given pixel is accumulated as a combination of the colour and opacity associated with voxels along a ray traced from the eye point, through the view plane and into the 3D data structure
	* [x] The colour and opacity associated with voxels isn't necessarily inherent in the underlying data, but is usually calculated by inspecting the frequency of each value range
	* [ ] Moving the view plane or eye position requires the colour and opacity to be recalculated
46. What is the main disadvantage of indirect volume rendering techniques?
	* [x] The use of proxy geometry (either for splatting or as an iso surface) risks important features of the underlying data being missed in the final rendering
	* [ ] Creation of an iso surface results in a large number of polygons, often too many to be rendered in realtime
	* [ ] The resulting image looks 'flattened' rather like an x-ray and it is difficult to perceive depth
	* [ ] The result is viewpoint dependent, and has to be recalculated if anything changes
47. Which of the following is not an appropriate source of data for volume rendering?
	* [ ] Temperature data created by simulation of climate change
	* [ ] Sonar data from a survey of ocean floor
	* [x] A polygonal mesh representing a human hand
	* [ ] The results of an MRI scan of a kiwi fruit
48. Which of the following spatial enumeration techniques has spatial complexity of order $n^3$?
	* [ ] Hierarchical bounding volumes
	* [ ] Binary space partitioning
	* [x] grid cell
	* [ ] oct-tree
49. Which of the following data structures provides the fastest guaranteed access time (i.e. requires the smallest number of operations to find out whether an object exists in a given point in space)?
	* [ ] Hierarchical bounding volumes
	* [ ] Binary space partitioning
	* [x] grid cell
	* [ ] oct-tree
50. Which of the following are all regular spatial enumeration techniques?
	* [ ] oct-tree and HBV
	* [ ] HBV and grid cell
	* [ ] BSP and oct-tree
	* [x] grid cell and oct-tree
51. Which of the following techniques encodes a 'front / back' relationship between objects?
	* [ ] Hierarchical bounding volumes
	* [x] Binary space partitioning
	* [ ] grid cell
	* [ ] oct-tree
52. Which of the following terms describes the tendency of scenes to consists of clusters of objects?
	* [x] Spatial coherence
	* [ ] Temporal coherence
	* [ ] Spatial intensity
	* [ ] Spatial enumeration
53. Why is using the projected winding of a polygon have limited benefits in terms of back-face culling?
	* [ ] The projected winding isn't always consistent, even if the polygon winding in world space is
	* [x] It occurs too late in the pipeline to provide much of a speedup
	* [ ] It doesn't reliably tell you if the polygon is back-facing
	* [ ] It only works for convex polygons