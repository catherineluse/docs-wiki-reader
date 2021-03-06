---
title: "Running on ARM64 (Experimental)"
weight: 3
aliases:
  - /rancher/v2.0-v2.4/en/installation/options/arm64-platform
---

> **Important:**
>
> Running on an ARM64 platform is currently an experimental feature and is not yet officially supported in Rancher. Therefore, we do not recommend using ARM64 based nodes in a production environment.

The following options are available when using an ARM64 platform:

- Running Rancher on ARM64 based node(s)
  - Only [Docker Install](./installation/other-installation-methods/single-node-docker)
- Create custom cluster and adding ARM64 based node(s)
  - Kubernetes cluster version must be 1.12 or higher
  - CNI Network Provider must be [Flannel](./faq/networking/cni-providers/#flannel)
- Importing clusters that contain ARM64 based nodes
  - Kubernetes cluster version must be 1.12 or higher

Please see [Cluster Options](./cluster-provisioning/rke-clusters/options.md) how to configure the cluster options.

The following features are not tested:

- Monitoring, alerts, notifiers, pipelines and logging
- Launching apps from the catalog
