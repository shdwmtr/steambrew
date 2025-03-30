---
sidebar_position: 3
description: When things don't go as expected.
---

# Troubleshooting

### Issues with another app running on port 8080:

Steam has been hardcoded to use port 8080, meaning we can't change it. This means you'll either have to close/uninstall the conflicting app, or remove Millennium.

You can locate the conflicting app by running the following command in PowerShell

```powershell
(Get-Item -Path (Get-Process -Id (Get-NetTCPConnection -LocalPort 8080 -State Listen).OwningProcess).Path).FullName
```

### Installed, but Steam is crashing / Millennium's not showing or loading / or Steam's not loading.

1. Close Steam, and relaunch it holding **ALT + M**. This will open the Millennium developer console. Sift through the logs and check for errors.

1. If you find nothing of use, hit **⊞ + R** and run **steam://millennium/devtools/open**. This will open another set of developer tools. Go to the **Console** tab and check for any errors.

If nothing is found, try contacting us on our [discord](https://steambrew.app/discord) providing the logs you found in the previous steps.
