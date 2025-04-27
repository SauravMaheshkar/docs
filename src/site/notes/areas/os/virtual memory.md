---
{"dg-publish":true,"permalink":"/areas/os/virtual-memory/","tags":["operating-systems"]}
---

* 3 main problems w/o virtual memory:
	* Not enough RAM/Memory:
		* each program has its own address space and corresponding memory. Usually the address space covers more memory than actually available (back in the old days), thus we would run into errors if we try and fetch from addresses which don't exist.
	* Holes in our address space
		* multiple programs share the same memory space, however as we proceed with multiple [[areas/os/processes\|processes]] we will free up space over time. This causes memory fragmentation causing non-contiguous chunks of memory
	* programs writing over each other
		* what if multiple programs try and access the same address?
* All these problems share one key factor i.e. they all have the same memory space.
	* solution: give each program its own memory space (virtual) and map it to physical memory (RAM/disk)
* Virtual Memory
	* indirection: creates a virtual address space for each program which maps to a address space on physical memory (RAM/disk)
	* a program now uses only virtual addresses for computation which then gets translated into a physical address 
	* A page table is used for store such translations
		* we can now have a bigger virtual address space that maps to a smaller physical address space (only translate the page number, keeping offset as constant)
	* A page fault occurs when there is no mapping for some virtual address or the page is not in RAM (in this case, some page is pushed out to disk, the needed page is put on RAM and then accessed again)
### References
* https://youtube.com/playlist?list=PLiwt1iVUib9s2Uo5BeYmwkDFUh70fJPxX&si=VjeIj3CdNBn_QrBF