---
editLink: true
---

# NGiNX and Horizontally scaling

[Pathproxy](/livestream/expose) can run on multiple computers. With two computers, you effectively double the maximum number of viewers. We can thus horizontally scale. NGiNX is a popular web server and load balancer. We use [Pathpool](https://github.com/teamdhruva/pathpool), an NGiNX configuration that also adds a nice front page for viewing the livestream.


