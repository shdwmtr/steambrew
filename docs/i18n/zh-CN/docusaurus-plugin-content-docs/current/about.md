# 关于 Millennium

## Millennium 是什么？
Millennium（于2023年4月正式发布）是一款开源的低代码修改框架，支持用户无需底层交互即可为 Steam 桌面客户端创建、管理和使用主题/插件。

## Millennium 如何工作？
Millennium 的运行机制基于 Steam 客户端内部的若干技术特性实现其功能。

Steam客户端支持远程CEF调试功能，该功能将Chrome开发者工具本地暴露给用户系统。Millennium正是基于此特性，将其作为与客户端交互的通道。

正如[非官方文档](https://chromedevtools.github.io/devtools-protocol/)所述，我们无需修改 Steam 内部内存即可通过编程方式与客户端交互。这使我们能够创建一个 SDK，用于向上下文窗口注入 CSS 和 JS。

## 为什么 Millennium 采用 DLL 形式？
正如前文所述，基于补丁机制的设计，我们需要一个持续运行的线程/进程来维持窗口控制。但我们强烈反对在后台运行独立进程与 Steam 客户端共存，因此选择了替代方案。

Millennium 的核心二进制文件 **User32.dll** 并非通过独立的进程加载，而是借助 Steam 客户端自身的机制。它不实用任何 DLL 注入技术，也不会永久改变 Steam 客户端的状态。其实现方式是利用 Steam 开发者在很久以前遗留在应用中的一个特性。Steam 客户端尝试加载 user32.dll（Windows API 的主库）以支持一个已经被弃用但尚未删除的颜色接口。这意味着如果我们创建自己的库并模仿 Windows API 的入口点，我们就可以劫持这个连接，并在 Steam 进程中启动自己的线程。