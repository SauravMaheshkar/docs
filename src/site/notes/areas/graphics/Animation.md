---
{"dg-publish":true,"permalink":"/areas/graphics/animation/"}
---


#comp37111 

## Overview
* Animation is mostly an extension of modelling where we try to represent a model as a sequence of images which when viewed sequentially gives us a sense of motion.
* Film requires 24 fps and VR requires 90 fps.
* *Artist driven animation:* rigging, skinning and posing
	* *Rigging* is the process of building such controls.
		* Forward kinematics describes position of body parts as a function of joint angles. Given angles determine end effector
		* Inverse kinematics. Given end effector determine joint angles.
	* *Skinning:* (Skeleton Subspace Deformation) Inferring how skin deforms with bone transformations. 
		* We usually connect a vertex with multiple bones and define the movement as a weighted combination. 
			* weights must be non-negative
			* sum over all bones must be unity for every vertex
		* $p'_{ij} = T_j B^{-1}_{j} p_i$ ; $p_i$ bind pose (rest) $B_j$ bone transformation matrix; $T_j$ transformation matrix
			* $T_j \times B^{-1}_{j}$ is the relative change between the current pose and the bind pose
* *Data driven animation:* motion capture
	* records real world and extracts poses as a function of time using optical markers and multiple high speed cameras
	* *Retargeting:* Marker positions from motion capture must be translated into character controls.
* *Procedural animation:* describing the motion algorithmically and describing the motion using a small number of parameters
* Fundamental concepts in animation:
	* Squash and Stretch
	* Timing
	* Key Framing (Specify only certain frames and then generate the ones in between, this generation is called tweening)
* Animation is defined using some low dimensional form of control rather than redefining geometry such as joint angles.
---
## Physics Based Animation
 * Assign physical properties to objects ex: mass, force, gravity and procedural forces such as wind
 * With these properties we then simulate physics by solving equations of motion
#### 1. Particle Systems
* points are generated using emitters
* all points are independent of each other
#### 2. Mass Spring Model
* generalised variant of particle systems
* surface is represented as a set of points which is kept coherent using the forces between neighbouring points
* These could be modelled using Newtonian Mechanics or Euler's Method (approximate at each step)
* Sometimes we add damping to stabilise the solver (for the equations)
* Sometimes there also exists spatial fields, which are predefined external forces acting on particles depending on their location
* Types of forces:
	* *Structural Forces:* Enforce invariance in the system like distance between two points
	* *Internal Deformation Forces*
	* *External Forces:* gravity, friction, air resistance

---
## Simulation
* Rigid Body Simulation:
	* Different from particles in the sense that apart from the location (3 DOF x,y,z for a particle), rigid body simulations act on geometries that also have orientation (6 DOF x,y,z + rotation along the axes).
	* A common approach is to use impulse based collision (based directly on velocity)
	* We also define a rest state for the object at which point we don't simulate any forces between surfaces. (avoids unnecessary vibrations when at rest)
	* *Stacking:* when you stack rigid bodies on top of each other (duh)
* Deformable Body Simulation:
	* A common approach is to use Finite Element Method (FEM)
		* Convert mesh to tetrahedral (tetrahedralisation) because its the simplest 3D object
		* FEM allows to compute forces to go from deformed to rest shape
* Mass-spring systems can also be used for fracture simulation i.e. if the force passes a threshold the springs break with some propagation to the nearby springs
* Fluid Simulation:
	* Common approach is particle-based fluid simulation solved using Lagrangian methods.
	* Grid-based fluid solution involves analysing the voxels of the bounding box surrounding the fluid. These are modelled using Eulerian methods.
	* Lagrangian + Eulerian = Hybrid Fluid Simulation
---
## Collisions
* geometry of the colliding object is the main factor in choosing which algorithm to use 
* It's easy to find intersection points using equations for surfaces (if equation is zero then on surface, less than zero inside surface, ....)
* *Collision Response:* Model changes in body after collision
* Intersection is usually detected late, i.e. already inside the surface, in this case we usually perform *backtracking*
* Another method *fixing* involves project the the object to the closest point on the surface
* Collision detection has complexity $N^2$ for $N$ objects
* *Bounding Volumes:* find intersection between bounding boxes that contain the objects
	* commonly used AABB (Axis Aligned Bounding Box), Sphere, OBB (Oriented Bounding Box) and k-DOP (k-Discrete Bounding Box)