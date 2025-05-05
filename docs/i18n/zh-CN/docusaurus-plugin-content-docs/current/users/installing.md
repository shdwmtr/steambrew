---
sidebar_position: 1
description: Millennium 快速安装指南
---

# 安装

Millennium 快速安装指南

<details>
  <summary>Windows</summary>

### 自动安装

使用 PowerShell 安装器脚本在 Windows 上安装 Millennium。只需要运行脚本、打开 PowerShell、粘贴以下命令，然后按下回车即可。

本安装程序为完全开源项目，我们鼓励社区开发者参与 [源代码](https://github.com/SteamClientHomebrew/Millennium/blob/main/scripts/install.ps1) 审计工作。

**Millennium 采用完全便携式设计，以下脚本不会修改任何系统配置。**

```powershell
iwr -useb "https://steambrew.app/install.ps1" | iex
```

<!-- ![Installing Millennium Preview](https://raw.githubusercontent.com/shdwmtr/steambrew/refs/heads/main/static/install.gif) -->

### 手动安装

请先从[此仓库](https://github.com/SteamClientHomebrew/Millennium/releases/latest)下载  Millennium 的 Windows 资源包，文件名为 `millennium-v0.0.0-windows-x86_64.zip`。只需将所有文件放入您的 Steam 目录中，该目录可通过运行以下 PowerShell 命令找到。

```powershell
(Get-ItemProperty -Path "HKLM:\SOFTWARE\WOW6432Node\Valve\Steam" -Name "InstallPath").InstallPath
```

</details>

<details>
  <summary>Linux</summary>

:::caution
我们不支持通过 [Flatpak](https://flatpak.org/) 或 [Snap](https://snapcraft.io/) 安装的 Steam。
同样不支持任何基于 ARM 架构的系统，因为它们需要定制化的 Steam 安装。
:::

:::note
想为你的发行版打包 Millennium 吗？这个过程应该相对简单，文件系统层级可以轻松地[在此](https://github.com/shdwmtr/millennium/blob/main/src/sys/env.cc#L111C1-L134C11)修改。之后你就可以构建 Millennium 来适应任何文件系统标准了！
:::

### Arch Linux (AUR)

我们正式为 [Arch 用户仓库 (AUR)](https://aur.archlinux.org/packages/millennium) 上的 Millennium 提供支持。

### NixOS

我们目前尚未提供 NixOS 的软件包，但相关开发工作已在 [#227](https://github.com/shdwmtr/millennium/issues/227) 展开。
欢迎参与贡献，协助完成该软件包的开发。

<details>
    <summary>其他发行版</summary>

### 自动安装

**Shell (预编译二进制文件)**

本安装程序完全开源，我们诚挚邀请社区共同审查[源代码](https://github.com/SteamClientHomebrew/Millennium/blob/main/scripts/install.sh)。

```bash
curl -fsSL "https://raw.githubusercontent.com/shdwmtr/millennium/main/scripts/install.sh" | sudo sh
```

</details>

&nbsp;

## 安装后配置

若您使用的是基于 Arch 的 Linux 发行版，可直接运行 `millennium patch` 命令。其他发行版用户请下载 [Millennium 启动脚本](https://github.com/shdwmtr/millennium/blob/main/scripts/posix/start.sh)，并将其中 `/usr/lib/steam/steam` 路径替换为您的 Steam 安装路径（可通过 `whereis steam` 查询）。

修改完成后，运行此脚本即可启动带 Millennium 的 Steam。

</details>
