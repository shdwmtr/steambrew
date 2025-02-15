---
sidebar_position: 1
description: Quick guide to getting Millennium.
---

# Installing

## Windows

### Automatic
To install Millennium on windows, we use a PowerShell installer script. To run the script, open PowerShell, paste the following command, and press enter.

This installer is entirely open source and we encourage the community audit the [source code](https://github.com/SteamClientHomebrew/Millennium/blob/main/scripts/install.ps1). 

**Millennium is entirely portable, and the following script doesn't change any system configuration.**

```powershell
iwr -useb "https://steambrew.app/install.ps1" | iex
```
![Installing Millennium Preview](https://raw.githubusercontent.com/shdwmtr/steambrew/refs/heads/main/static/install.gif)

### Manual

Start by downloading the Millennium's Windows assets from [this repository](https://github.com/SteamClientHomebrew/Millennium/releases/latest) under the name ` millennium-v0.0.0-windows-x86_64.zip `. Simply put all files into your Steam directory, which you can find by running the PowerShell command below

```powershell
(Get-ItemProperty -Path "HKLM:\SOFTWARE\WOW6432Node\Valve\Steam" -Name "InstallPath").InstallPath
```

## Linux

Like to see Millennium apart of your distributions user package repository? Anyone is permitted to package Millennium and upload it to your favorite package manager; Just keep in mind solely you will maintain said package.

### Automatic
**Shell (pre-built binary)**

This installer is entirely open source and we encourage the community audit the [source code](https://github.com/SteamClientHomebrew/Millennium/blob/main/scripts/install.sh). 

Steam Snap & Steam Flatpak are Unsupported

```bash
curl -fsSL "https://raw.githubusercontent.com/SteamClientHomebrew/Millennium/main/scripts/install.sh" | sh
```

You can then run Steam with Millennium from `~/.millennium/start.sh`

### Manual

Start by downloading the Millennium's Linux assets from [this repository](https://github.com/SteamClientHomebrew/Millennium/releases/latest) under the name ` millennium-v0.0.0-linux-x86_64.tar.gz `. Extract and put all files in `~/.millennium/`. Then make the following files executable 
* `~/.millennium/ext/data/cache/bin/python3.11` (Used to manage plugin packages; is not daemon)
* `~/.millennium/ext/bin/millennium`
* `~/.millennium/start.sh`

by running `chmod +x path/to/file`

You can then run Steam with Millennium from `~/.millennium/start.sh`

Optionally, you can also add `~/.millennium/ext/bin/` to `$PATH` to be able to globally run Millenniums config CLI, although you can alternatively just configure Millennium from Steam's UI (**Steam -> Settings -> Plugins & Updates & Themes**) 

