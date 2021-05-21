---
title: Resources
weight: 5
aliases:
- /rancher/v2.0-v2.4/en/installation/options
---

### Docker Installations

The [single-node Docker installation](./installation/other-installation-methods/single-node-docker) is for Rancher users that are wanting to test out Rancher. Instead of running on a Kubernetes cluster using Helm, you install the Rancher server component on a single node using a `docker run` command.

Since there is only one node and a single Docker container, if the node goes down, there is no copy of the etcd data available on other nodes and you will lose all the data of your Rancher server.

### Air Gapped Installations

Follow [these steps](./installation/other-installation-methods/air-gap) to install the Rancher server in an air gapped environment.

An air gapped environment could be where Rancher server will be installed offline, behind a firewall, or behind a proxy.

### Advanced Options

When installing Rancher, there are several advanced options that can be enabled during installation. Within each install guide, these options are presented. Learn more about these options:

| Advanced Option                                                                                                         | Available as of |
| ----------------------------------------------------------------------------------------------------------------------- | --------------- |
| [Custom CA Certificate](./installation/options/custom-ca-root-certificate.md)                 | v2.0.0          |
| [API Audit Log](./installation/options/api-audit-log.md)                                      | v2.0.0          |
| [TLS Settings](./installation/options/tls-settings.md)                                        | v2.1.7          |
| [etcd configuration](./installation/options/etcd.md)                                          | v2.2.0          |
| [Local System Charts for Air Gap Installations](./installation/options/local-system-charts) | v2.3.0          |
