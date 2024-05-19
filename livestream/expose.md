---
editLink: true
---

# Exposing a livestream to the internet

Although you can directly expose the livestream from [here](/livestream/setup), it is recommended to proxy it behind a more powerful computer. The Raspberry Pi on its own can handle around 30-40 concurrent viewers before it begins bottlenecking. Delegating to a different device can help increase this limit.

We use [Pathproxy](https://github.com/teamdhruva/pathproxy) for this purpose. Pathproxy allows a different device to act as the livestream server. It creates only a single connection to the Raspberry Pi, and then serves the livestream to its viewers. It shifts the load from the Raspberry Pi to a more capable server. It takes the limit from 30 viewers to over 100 viewers.

You need to have Podman installed.

1. Clone `https://github.com/teamdhruva/pathproxy`
2. Run `./app.sh build`. This builds the container
3. Run `./app.sh install`. This deploys and starts the container

This starts a server on port 8080. You can expose this to the internet safely, without creating unnecessary load on the Raspberry Pi. 

To stop, run `./app.sh stop`. To start a stopped container, run `./app.sh start`.

