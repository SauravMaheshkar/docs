---
{"dg-publish":true,"permalink":"/areas/graphics/rendering/"}
---

#comp37111 
## Rendering Equation

### BRDF
* **Bidirectional Reflectance Distribution Function**
* Talks about the ratio between radiance and irradiance 
* Similarly, BTDF (Transmission) and BSDF (Scattering)
### Reflection
* *Specular Reflection:* light is being reflected in a single direction. Surface is mostly shiny and smooth.
* *Diffuse Reflection:* light is being reflected in lots of different directions. This happens because light penetrates the surface before being reflected
* *Subsurface Scattering:* light bounces inside the surface before being reflected out again
---
## Ray Tracing
* **Explicit Ray Equation:** $R(t) = R_0 + R_d \times t$
* *Ray-casting:* casting a ray into the scene (duh)
* Whitted's Algorithm:
	* "Every ray that reaches a viewpoint originated at a light source, but every ray from a light source doesn't not make it to the viewpoint"
	* Thus we can invert the process and trace rays from the viewpoint rather than the light source.
	* Once a ray hits a surface we generate another ray called the shadow ray that gets reflected towards the light source and another ray that gets transmitted through. We then recursively process these rays as well.
	* This algorithm models all surfaces as specular reflectors/transparent and doesn't deal with diffuse surfaces. Thus all surfaces look hard and shiny.
---
## Radiosity
* treats light as energy being exchanged between various areas of the scene
* this helps model diffuse surfaces quite well while specular reflection is more tricky
* *thermodynamic radiosity/radiance:* flux leaving the surface, *irradiance:* flux arriving at surface
* models interaction between surfaces in terms of light being emitted from the surface + light being reflected from it
* breaks down surfaces into smaller patches (discrete sum over the surfaces)
* There is no viewpoint in radiosity whereas in ray tracing one would have to recalculate if the view point changed
* *form factor:* number between 0 and 1 that determines visibility of one patch to another. Depends on
	1. size of patches
	2. distance b/w patches
	3. orientation of patches
	4. occlusion b/w patches
* This implies that we're treating all patches equally, a more pragmatic solution might be to look at patches that are emitting light.
* *progressive/shooting radiosity:* take a rough initial pass from the light source and then over iterative cycles improve 
---
## Path Tracing
* realistic shadows have a umbra (darker region) and a penumbra (around the edges, more blurry and light). If we treat light as a point source, we don't get penumbras since light rays that are blocked by some object don't pass through and leave a full (crisp) shadow.
* In path tracing, we (also) pass a ray form the view point onto the scene. The difference from ray tracing is every time we encounter a surface, we pick a direction and go that way. This is different from ray tracing since now we don't have a hierarchy.
* We sample lots of rays uniformly distributed around the hemisphere (real world surfaces aren't perfectly Lambertian !!). 
* **Samples Per Pixel (SPP)**: Initial # of rays
---
## Direct Volume Rendering
* rendering data without explicitly defined surfaces.
* CAT scanner records density values without any colour or opacity. Those are added using a *transfer function*. These are added by associating a particular colour with a given value, while opacity is determined using ray/path tracing (consider a opacity budget progressively deduct throughout the trace).
* fake surface normal can be generated using the relative difference in density values. These can then be used for local illumination calculations and generate surface shading.
---
## Spatial Enumeration
* **Regular:** Grid-cell, Quad-tree, Oct-tree 
* **Irregular**
	* *Spatial Cohesion:* things occur together in the real world
	* **Hierarchical Bounding Volume:** start with objects and wrap them with increasingly bigger spaces until the whole scene is covered
	* **Binary Space Partitioning:** recursively partitions space into 2 sections