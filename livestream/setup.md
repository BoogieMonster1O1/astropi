---
editLink: true
---

# Setting up a livestream

We use [Pathfinder](https://github.com/teamdhruva/pathfinder) for livestreaming.

Pathfinder is a camera controller for Raspberry Pi cameras. It allows livestreaming, remotely taking pictures, adjusting parameters, and checking server health.

1. Clone `https://github.com/teamdhruva/pathfinder.git`
2. Install the dependencies by `python3 -m pip install -r requirements.txt`
3. Run `sudo python3 main.py`. You will need root access (sudo).

The server listens on port 80. Simply typing in the IP address of the Raspberry Pi into your browser will take you to the livestream. 

The actual livestream is located at `http://<ip address>/stream.mjpg`
