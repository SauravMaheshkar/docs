---
{"dg-publish":true,"permalink":"/areas/hardware-stuff/verification/","tags":["comp32211"]}
---

 * design the tests !!
	 * does it reset ?
	 * is the initial state achieved?
	 * does it do the most straightforward questions ? (does the PC increase)
	 * can you break it?
 * What to look for: **Control**
	 * is the FSM behaving as intended?
	 * have all the transitions in the FSM been observed?
	 * termination
 * What to look for: **Data**
	 * check against ground truth values
	 * incorrect values
	 * out of range values
	 * wrong number of operations
	 * Stress Testing:
		 * *individual targeted tests*: once case of every known input type
		 * *algorithmically generated*: all possible cases, regular input patterns
		 * *random patterns* ("Monte Carlo")