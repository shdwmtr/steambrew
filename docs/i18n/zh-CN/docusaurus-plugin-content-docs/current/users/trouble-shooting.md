---
sidebar_position: 3
description: 如果未按照预期运行
---

# 故障排查

### 8080 端口被其他应用占用的问题：

Steam 强制使用 8080 端口且无法修改，因此您需要关闭/卸载冲突应用或移除 Millennium。

可通过以下 PowerShell 命令定位冲突应用：

```powershell
(Get-Item -Path (Get-Process -Id (Get-NetTCPConnection -LocalPort 8080 -State Listen).OwningProcess).Path).FullName
```

### 安装后，Steam 崩溃 / Millennium 无法显示或加载 / Steam 无法加载

1. 请关闭 Steam 后，按住 <kbd>ALT</kbd> + <kbd>M</kbd> 重新启动，这将打开 Millennium 开发者控制台。请仔细查看日志并检查错误信息。

2. 若未发现有效信息，请按 <kbd>⊞</kbd> + <kbd>R</kbd> 并运行 `steam://millennium/devtools/open`，这将打开另一组开发者工具。前往 **Console** 选项卡检查是否存在错误。

如果仍未发现问题，请通过我们的 [discord](https://steambrew.app/discord) 联系我们，并提供您在前述步骤中获取的日志信息。
