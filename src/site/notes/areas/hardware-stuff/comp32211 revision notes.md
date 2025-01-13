---
{"dg-publish":true,"permalink":"/areas/hardware-stuff/comp32211-revision-notes/","tags":["comp32211"]}
---

### Timing
* Difference in arrival time is referred to be as **clock skew**.
* **Timing closure** is making the logic fit within the desired clock period.
* Static Timing Analysis rules help figure out critical path (longest/slowest part between registers)
* Negative Slack -> Too Slow

---

* **Technology Mapping:** Converting a design into standard cells that can be laid out on the chip
* **Hardened:** Part of a design which has been transformed to a layout
* **Floor-planning:** Placement of macrocells
* **Mixed Signal Design:** When both digital and analogue parts are on a chip

### Power
* **Dynamic Dissipation:** Power dissipation caused by switching gates
* **Static Dissipation:** Charge leakage that happens continuously regardless of switching activity
* **Sub-threshold Leakage:** Current through a transistor which is "turned off"
* **Gate Leakage:** Leakage of charge from transistor gate to the silicon channel.
* **Power Domains:** When different parts of the SoC are powered from different voltages
* Lower supply voltages typically mean slower switching speeds and also have reduced power consumption.
* A problem encountered with different supply voltages is the interpretation of signals at domain boundaries.
* **Clock Gating:** certain components on a SoC can be put into a "rest" mode on reduced voltage wherein the memory is able to retail its state although it cannot be accessed until the full supply is restored.
* **Dark Silicon:** parts of a system which are present but may be unpowered. By switching off domains of an SoC which are not in use at a particular time all the dissipation can be avoided, including leakage currents.
* **Dynamic Voltage/Frequency Scaling:** Power dissipation can be reduced by reducing clock frequency and supply voltage at the cost of slower logic evaluation.
### ASICs in Production
* **Package-on-Package** allows a package to be mounted in a stack on the back of another package.
* Lower voltages or higher temperatures slow down switching.
* **PVT** -> Process, Voltage, Temperature.
* **Cell Phantom:** Chip manufacture often don't provide exact layouts of their macro/standard cells. They mostly only provide size and possible connections points (interface) along with enough information to run simulations.
* **Placement and Routeing (P&R):** Placement is the process of laying out components on the chip without overlap and routeing is the process of interconnecting them with wires.
* **Buffer Insertion:** When a network is routed it may happen that due to excessive capacitance there is a decrease in signal edge speed (common in data busses), modern processes allow for automatic insertion of buffers which act as amplifiers.
* **Threshold:** Gates have a nominal voltage threshold value beyond which it flips from 0 to 1 and vice versa (typically half the power supply voltage for CMOS)
* **Back annotation** is the process of extracting the physical characteristics and feeding them back to improve the accuracy of earlier models.
* **Design Rule Checks (DRC)** see that the layout obeys geometry rules for fabrication
* **Electrical Rule Checks (ERC)** ensure that electrical connections, (power etc.) are legal
* A scan path makes some or all of the flip-flops in a circuit directly **controllable** and directly **observable**.
* _Straining_ the silicon involves distorting the lattice distances, which can improve the carrier mobility and thus the [transconductance](https://en.wikipedia.org/wiki/Transconductance). Makes the transistor "faster".