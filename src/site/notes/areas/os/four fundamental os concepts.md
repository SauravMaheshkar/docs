---
{"dg-publish":true,"permalink":"/areas/os/four-fundamental-os-concepts/","tags":["ucb-cs162","operating-systems"]}
---

The Operating System is a:
* **Referee**
	* Manage protection, isolation, and sharing of resources
	* Resource allocation and communication
* **Illusionist**
	* Provide clean, easy-to-use abstractions of physical resources
	* Infinite memory, dedicated machine
	* Higher level objects: files, users, messages
	* Masking limitations, visualisation
	* *fight complexity:* remove software/hardware quirks
	* *help the programmer:* optimise for convenience, utilisation, reliability, ...
* **Glues common services**
	* Storage, Window System, Networking
	* Sharing, Authorisation
	* Look and feel

* An OS abstracts underlying hardware to help tame complexity
	* Processor :: Thread
	* Memory :: Address Space
	* Disks, SSDs, ... :: File System
	* Networks :: Sockets
	* Machines :: Processes
---
## 1. Thread: Execution Context
* Single unique execution context
* A thread is executing on a processor (core) when it is *resident* in the processor registers
	* Resident here refers to the fact that registers hold the context (program counter, registers, execution flags, stack, memory state) of a thread
* A thread is not executing (suspended) when its state is not loaded (resident) into the processor
* If there is a single processor (core). How do we provide the illusion of multiple processors? Multiplex in time
* all threads share **non**-CPU resources
* ==Threads are virtual cores==
	* If the thread is running it is on the physical core otherwise it is saved in a chunk of memory (Thread Control Block)
* How does (Context) Switching occur ?
	* The OS ran
	* Saved context of thread 1 in Thread Control Block (memory)
	* Loaded context of thread 2 from TCB and jumped to PC
	* **Triggered?:** Timer, Voluntary yield, I/O, ...
* The time taken for context switching must be minimised
* Threads encapsulate concurrency
## 2. Address Space 
* the set of accessible addresses and the state associated with them
* What happens when we attempt to read/write to an address?
	* perhaps acts like regular memory
	* perhaps ignores writes
	* perhaps causes I/O operation
	* perhaps causes exception (fault)
	* communicates with another program
	* ...
* A simple implementation of multiplexing has no protection !!:
	* Must protect itself from user programs
		* Reliability: compromising the operating system generally causes it to crash
		* Security: limits the scope of what threads can do
		* Privacy: limits each thread to the data it is permitted to access
		* Fairness: each thread should be limited to its appropriate share of the system resources
	* Must protect user programs from each other
		* Prevent threads owned by one user from impacting threads owned by another user
* Address Spaces encapsulate protection
## 3. Process: an instance of a running protection
* Execution environment with restricted rights
	* protected address space with one or more threads
	* owns memory (address space)
	* owns file descriptors, file system context,
	* encapsulate one or more threads sharing process resources
* a programs executes as a process
* Why?
	* Reliability: bugs can only overwrite memory of process they are in
	* Security: A malicious or compromised process can't read or write other process' data
* Fundamental tradeoff:
	* communication easier within a process
	* communication harder between processes

## 4. Dual mode operation / Protection
* Hardware provides at least 2 modes:
	* Kernel (or supervisor) mode
	* User mode
* Certain operations are prohibited when running in user mode
* carefully controlled transitions between user mode and kernel mode
* How do we transfer/switch??
	* syscall:
		* process requests a system service
		* like a function call but outside the process
		* does not have the address of the system function to call
	* interrupt:
		* external asynchronous event triggers a context switch
		* independent of user process
	* trap or execution:
		* internal asynchronous event in process triggers context switch