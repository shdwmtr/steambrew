---
sidebar_position: 2
description: Millennium 快速卸载指南
---

# 卸载

### 自动卸载

在 Windows 上卸载 Millennium，我们使用 PowerShell 安装脚本。要运行该脚本，请打开 PowerShell，粘贴以下命令并按回车。
卸载程序支持模块化卸载 Millennium 组件，能够彻底清除所有已安装或曾安装过的磁盘文件。

```powershell
iwr -useb "https://steambrew.app/uninstall.ps1" | iex
```

:::info
如果在卸载 Millennium 时遇到任何错误，请先[重新安装](/users/installing)以清理现有安装，然后再继续卸载流程。
:::

### 手动卸载

关闭 Steam 并进入您的 Steam 目录，然后查看[资源仓库](https://github.com/ShadowMonster99/millennium-steam-binaries)，或手动查找与 Millennium 相关的文件名。

您系统上安装的二进制文件可能如下所列，具体取决于 Millennium 的版本。
Millennium@v2.2.2 的二进制文件包括：

* `user32.dll`
* `python311.dll`

如需彻底清理 Millennium，您还可以移除其所有资源文件。在 Millennium@v2.2.2 中，资源文件位于以下路径（请将 \{steam\} 替换为 Steam 的实际安装路径）：

* `{steam}/steamui/skins` - 用户主题
* `{steam}/plugins` - 用户插件
* `{steam}/ext` - Millennium 内部数据

如果你不知道 Steam 被安装在哪里，您可以在 PowerShell 中运行以下命令：

```powershell
(Get-ItemProperty -Path "HKLM:\SOFTWARE\WOW6432Node\Valve\Steam" -Name "InstallPath").InstallPath
```
