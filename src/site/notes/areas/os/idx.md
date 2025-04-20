---
{"dg-publish":true,"permalink":"/areas/os/idx/","tags":["operating-systems"]}
---

* some piece of software that manages the hardware 
	* *do?:* memory management, I/O management, scheduling, communication, multi-tasking, ...
* special layer of software that provides application software access to hardware resources
* **Kernel:** The one program running at all times on the computer
* provides an **easy to use** simple interface to interact with devices and use applications through consistent abstractions
	* We take a lot of things for granted these days. However most tasks occur through complex interactions of multiple components in multiple administrative domains (Web Search: DNS Request, DNS Servers, route through internet, data centre, load balancer, search, retrieve from page store, create result page and then show result)
* User applications help solve computing problems using the same set of hardware, i.e. hardware resources are shared between multiple programs and thus need to be managed and allocated carefully + **efficiently** + safely
	* *Robustness requires an engineering mindset:* Meticulous error handling, defending against malicious or careless users
* Key Building Blocks:
	* Processes
	* Threads, Concurrency, Scheduling, Coordination
	* Address Space
	* Protection, Isolation, Sharing Security
	* Communication, Protocols
	* Persistent Storage, Transactions, Consistency, Resilience
	* Interface to all devices
* **Processor:** Interface -> Threads 
* For an OS area we can ask the following:
	* What hardware interface to handle? (*physical reality*)
	* What software interface to provide? (*nicer abstraction*)
## Process (managing the CPU)
* Execution environment with restricted rights provided by OS
* What's in a process?:
	* Address Space
	* one or more threads of control executing in that address space
	* additional state(open files, open sockets, ...)
* provide nicer interface than raw hardware

* OS isolates processes from each other
* OS isolates itself from other processes

... even though they are running on the same hardware

* a single core CPU can only run a single program at a time, if multiple applications need to be run then they must share the resource (*time sharing*) i.e. there is a *illusion* of a private CPU for each program
* **Scheduling:** allocate CPU time to different processes
	* each process must get time on the CPU
	* priorities must be respected 
	* should be able to handle multiple cores
	* overhead of switching processes must be low
	* CPU utilisation must be high, i.e. must be busy all the time; minimise waiting time
## Address Space (managing the memory)
* **Interface:** Address Space
* memory interactions are either read or write operations
* a virtual address space is created for each process giving the *illusion* of access to the full physical address space
## Device Drivers (managing I/O)
* From the perspective of an OS, an I/O device is just a bunch of registers
* each device will have its own unique and complex interface, the OS defines a single uniform interface for all devices and it becomes the responsibility of the device driver to talk with the device controller
* 3rd party device drives are one of the most unreliable aspects of OS
	* Poorly written by non-stake holders
	* Ironically, the attempt to provide clean abstractions can lead to crashes
## Files & Directories (managing storage)
* **Interface:** Files
* Storage - special class of I/O devices
* File - abstraction for persistent storage
* in unix systems, I/O devices are modelled as files

## Network
* **Interface:** Sockets
## References
* https://pages.cs.wisc.edu/~remzi/OSTEP/
* https://csc-knu.github.io/sys-prog/books/Andrew%20S.%20Tanenbaum%20-%20Modern%20Operating%20Systems.pdf
* https://os-book.com/
* https://pages.cs.wisc.edu/~remzi/Classes/736/Spring2000/papers.html
* https://pages.cs.wisc.edu/~remzi/Classes/736/Spring2000/papers-aux.html
* https://cs162.org/