---
{"dg-publish":true,"permalink":"/areas/hardware-stuff/simulation/","tags":["comp32211"]}
---

* A part of modelling process wherein the accuracy of the model is refined as the design progresses.
* Types/Levels:
	* Functional (does the code **perform the desired logical operation**)
	* Timing
	* Electrical
	* Physical??
---
### Functional Simulation
* Objective is to verify the logic behaviour of the design.
* Can be assisted by test-coverage tools:
	* which statements have (not) been executed.
	* which branches have (not) been taken.
* **Cycle accuracy is inherent** (can count clock pulses)
* tests can be as parallel as the chip.
* The `req` signal may be timed by **reacting** to the behaviour of `ack`. (I'll check till this produces some value once it does assert condition)
* Sample at edge not later
	* `x <= #2 a` (samples immediately assigns after 2 time units)
	* `#2 x <= a` (samples after 2 time units)
* Use of delays:
	* Sequencing I/O in a test run
	* Modelling "real" components
	* Cosmetic delays to make waveforms more readable
* Parallelism: each `initial` and `always` block is a parallel thread