---
{"dg-publish":true,"permalink":"/areas/os/lock/","tags":["operating-systems","ucb-cs162"]}
---

An object only one [[areas/os/threads\|thread]] can hold at a time (provide mutual exclusion)

It performs two atomic operations:
* **lock.acquire()** wait until lock is free, then mark it as busy
	* after this returns, we say that the calling thread holds a block
* **lock.release()** mark lock as free
	* should only be called by a thread that currently holds the lock
	* after this returns, the calling thread no longer holds the lock