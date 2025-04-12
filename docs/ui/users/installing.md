---
sidebar_position: 1
description: Quick guide to getting Millennium.
---

# Installing

A quick guide to installing Millennium.

<details>
  <summary>Windows</summary>

### Automatic

To install Millennium on windows, we use a PowerShell installer script. To run the script, open PowerShell, paste the following command, and press enter.

This installer is entirely open source and we encourage the community audit the [source code](https://github.com/SteamClientHomebrew/Millennium/blob/main/scripts/install.ps1).

**Millennium is entirely portable, and the following script doesn't change any system configuration.**

```powershell
iwr -useb "https://steambrew.app/install.ps1" | iex
```

<!-- ![Installing Millennium Preview](https://raw.githubusercontent.com/shdwmtr/steambrew/refs/heads/main/static/install.gif) -->

### Manual

Start by downloading the Millennium's Windows assets from [this repository](https://github.com/SteamClientHomebrew/Millennium/releases/latest) under the name `millennium-v0.0.0-windows-x86_64.zip`. Simply put all files into your Steam directory, which you can find by running the PowerShell command below

```powershell
(Get-ItemProperty -Path "HKLM:\SOFTWARE\WOW6432Node\Valve\Steam" -Name "InstallPath").InstallPath
```

</details>

<details>
  <summary>Linux</summary>

:::caution
We don't support Steam installed via [Flatpak](https://flatpak.org/) or [Snap](https://snapcraft.io/).
We also don't support any ARM based distributions as they require custom Steam installations.
:::

:::note
Looking to package Millennium for your favorite distribution? It should be a relatively simple process, the filesystem hierarchy is easily change-able [here](https://github.com/shdwmtr/millennium/blob/main/src/sys/env.cc#L111C1-L134C11). From there you can build Millennium to use any filesystem standard!
:::

### Arch Linux (AUR)

We officially offer support for Millennium on the [Arch User Repository (AUR)](https://aur.archlinux.org/packages/millennium).

### NixOS

We don't currently have a package for NixOS but it's somewhat in development in [#227](https://github.com/shdwmtr/millennium/issues/227).
Feel free to contribute and help finish the package.

<details>
    <summary>Other Distributions</summary>

### Automatic

**Shell (pre-built binary)**

This installer is entirely open source and we encourage the community audit the [source code](https://github.com/SteamClientHomebrew/Millennium/blob/main/scripts/install.sh).

```bash
curl -fsSL "https://raw.githubusercontent.com/shdwmtr/millennium/main/scripts/install.sh" | sudo sh
```

</details>

&nbsp;

## Post Installation

Run `millennium patch`, this will patch your Steam start script to bootstrap Millennium.

</details>
