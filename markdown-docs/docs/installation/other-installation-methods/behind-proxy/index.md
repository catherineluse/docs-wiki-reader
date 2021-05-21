---
title: Installing Rancher behind an HTTP Proxy
weight: 4
---

In a lot of enterprise environments, servers or VMs running on premise do not have direct Internet access, but must connect to external services through a HTTP(S) proxy for security reasons. This tutorial shows step by step how to set up a highly available Rancher installation in such an environment.

Alternatively, it is also possible to set up Rancher completely air-gapped without any Internet access. This process is described in detail in the [Rancher docs](./installation/other-installation-methods/air-gap.md).

# Installation Outline

1. [Set up infrastructure](./installation/other-installation-methods/behind-proxy/prepare-nodes.md)
2. [Set up a Kubernetes cluster](./installation/other-installation-methods/behind-proxy/launch-kubernetes.md)
3. [Install Rancher](./installation/other-installation-methods/behind-proxy/install-rancher.md)
