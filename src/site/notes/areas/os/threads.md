---
{"dg-publish":true,"permalink":"/areas/os/threads/","tags":["operating-systems","ucb-cs162"]}
---

* Thread (Execution Context): Fully describes a programs' state (PC, Registers, Execution Flags, Stack)
* Each thread has its own virtual address space which gets converted into physical address using a page translation table.
* Motivation:
	* OS must handle multiple things at once (processes, interrupts, background maintenance, scan-codes, mouse movement)
* Threads are a unit of concurrency provided by the OS
* each thread can represent one thing or one task or one idea
* What does it mean to run two threads concurrently ?
	* Scheduler is free to run threads in any order and interleaving
	* Thread may run to completion or time-slice in big chunks or small chunks
* Concurrency is about handling multiple things at once, parallelism is about doing multiple things simultaneously. 
* A thread is in one of the following states:
	* running
	* ready
	* blocked
* the programmer has the illusion that there are infinite number of processors which can run any number of threads.
* Non-determinism:
	* scheduler can run threads in any order
	* scheduler can switch threads at any time
	* thereby making testing very difficult
* synchronisation refers to coordination among threads, usually regarding shared data
	* a type is mutual exclusion: ensuring only one thread does a particular thing at a time
