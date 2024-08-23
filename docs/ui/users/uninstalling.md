---
sidebar_position: 2
description: Quick guide on removing Millennium.
---

# Uninstalling

### Automatic

To uninstall Millennium on windows, we use a PowerShell installer script. To run the script, open PowerShell, paste the following command, and press enter.
The uninstaller lets you uninstall Millennium components in modules, and everything it will/ever has put on the disk will be caught by the uninstaller. 

```powershell
iwr -useb "https://steambrew.app/uninstall.ps1" | iex
```

:::info
If you receive any errors while trying to uninstall Millennium, [reinstall it](/users/installing). This will clean your installation of Millennium. 
You can then proceed with the removal process. 
:::

### Manual

Close Steam and navigate to your Steam directory and then look through the [assets repository](https://github.com/ShadowMonster99/millennium-steam-binaries), or find manually find the filenames associated with Millennium.

The installed binaries on your system may be listed below depending on the version of Millennium. 
As of Millennium@v2.2.2 the binaries are:

* `user32.dll`
* `python311.dll`

If you want a deeper clean of Millennium, you can also remove all of its assets. As of Millennium@v2.2.2, the assets are found in the paths below (replacing \{steam\} with steams actual location)

* `{steam}/steamui/skins` - User Themes
* `{steam}/plugins` - User Plugins
* `{steam}/ext` - Millennium Internal Data

If you don't know where steam is installed, you can run this in powershell

```powershell
(Get-ItemProperty -Path "HKLM:\SOFTWARE\WOW6432Node\Valve\Steam" -Name "InstallPath").InstallPath
```
