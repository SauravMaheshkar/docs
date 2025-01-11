---
{"dg-publish":true,"permalink":"/areas/hardware-stuff/vdu/","tags":["comp32211"]}
---


* **VDU Controller:** It is a simple programmable SM which is responsible for generating synchronisation signals + blanking signals + frame-store addresses and reading the frame-store data.
### frame-store
* 2D array of memory representing a pixel along with colour:
	* Each location has an address (in bytes or less)
	* Each pixel's data represents a colour typically separated into Red, Green and Blue
* A frame-store can occupy significant memory and pixels must be read/refreshed many times per second. This impacts the:
	* output rate to the display
	* frame-store RAM bandwidth