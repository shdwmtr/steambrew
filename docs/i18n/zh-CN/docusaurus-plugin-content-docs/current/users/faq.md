---
description: 各种常见问题
---
# FAQ

### 杀毒软件误报？

由于 Millennium 的工作原理，特别是在 Windows 系统上，部分杀毒软件可能会将其误判为病毒。Windows Defender 尤其容易出现这种情况，经常会将 Millennium 的 user32.dll 文件错误标记为恶意软件，尽管它完全无害。
这种误报源于 Millennium 的核心机制：我们特意将核心文件命名为 user32.dll，以此让 Steam 加载我们的文件而非 Windows 原生的 user32.dll 库文件[了解更多...](https://en.wikipedia.org/wiki/Microsoft_Windows_library_files)。这种方法使 Millennium 能够在不修改 Steam 任何文件或不干扰其进程内存的情况下，安全地改变 Steam 的外观。

正如您可能想到的，Windows 发现这个不属于操作系统本身的 user32.dll 文件时，会将其视为威胁（例如：病毒伪装成系统文件的行为）。实际上，这只是 Millennium 实现功能的技术手段，完全安全可靠。

Windows Defender 最容易出现此类误报，其他杀毒软件通常不会误判。您可以通过 virus total 自行验证检测结果。

需要提醒的是，请审慎对待所有网络信息（包括本说明）。我们建议您自行验证——编译、测试并审查 Millennium 的源代码，您将发现其行为完全符合本文描述。

请记住：最有效的“杀毒软件”是具备判断力的终端用户！

### 我会被封禁吗？

简而言之，使用 Millennium 不会导致封禁，因其未违反任何 Steam 政策。但请注意，Millennium 及其开发团队不对用户行为及其潜在后果承担责任。点击[此处](https://github.com/SteamClientHomebrew/Millennium/blob/main/LICENSE)了解 MIT 许可详情。

---

### Millennium 是否违反 Steam® 服务条款(ToS)？

Millennium 本身不会以给予用户不公平优势的方式修改 Steam®，也不会改变该服务的预期功能。

> 您使用服务的许可明确基于您同意不从事以下行为（“禁止事项”）：
> 创建、开发、修改、分发或使用任何未经授权的软件程序以获取优势或改变服务的预期运行方式；

[Steam EULA 参考...](https://store.steampowered.com/eula/471710_eula_0#:~:text=Create%2C%20develop%2C%20modify%2C%20distribute%2C%20or%20use%20any%20unauthorized%20software%20programs%20to%20gain%20any%20advantage%20or%20alter%20the%20intended%20operation%20of%20the%20Services%3B)

---

### Millennium 是否违反 Steam® 隐私政策？

不会，Millennium 不会存储或记录任何形式的用户数据，并确保经批准的插件在未经同意的情况下也不会存储用户数据。

---

### Millennium 的数据保存在哪里？

请参阅[卸载指南](/users/uninstalling)，其中包含有关二进制文件安装位置的信息。

---

### 如何卸载 Millennium？

请参阅[卸载指南](/users/uninstalling)，您将找到有关如何卸载 Millennium 组件的详细说明。