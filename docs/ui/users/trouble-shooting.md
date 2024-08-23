---
sidebar_position: 3
description: When things don't go as expected.
---

# Troubleshooting

- #### Issues with another app running on port 8080: 
  Steam has been hardcoded to use port 8080, meaning we can't change it. This means you'll either have to close/uninstall the conflicting app, or remove Millennium.

  You can locate the conflicting app by running the following command in PowerShell
  ```powershell
  (Get-Item -Path (Get-Process -Id (Get-NetTCPConnection -LocalPort 8080 -State Listen).OwningProcess).Path).FullName
  ```

- #### Installed, but not showing in Settings: 

  Start steam with `-dev`, this will open Millennium in developer mode. Here you'll find more verbose logs on specific issues within steam. 
  If you don't find any errors, The issue might be caused by Millennium's frontend. To check, go to http://localhost:8080 with steam open, from there navigate
  to `SharedJSContext` and select it. When that new page loads, on the panel on the right side, click console on the top right. 

  
  If you can't solve the error by yourself, which might be the case, report it as a bug on the [GitHub repository](https://github.com/SteamClientHomebrew/Millennium/issues/new?assignees=&labels=bug&projects=&template=BUG-REPORT.yml&title=%5BBug%5D)

  **Example:**

  ![alt text](sharedjscontext.png)

- #### DLL Error / Windows Dependency Error Message Boxes
  Ensure you're running Windows 10 or greater, support for Windows 7 and 8 has been dropped. 