---
title: 介绍
---
# 介绍

Millennium 使我们能够通过插件修改 Steam 客户端的部分功能。这些插件包含两个主要部分：用 TypeScript 编写的前端和用 Python 编写的后端。前端负责与 Steam 用户界面交互，而后端则可以与终端用户的电脑系统进行交互。

是否需要同时具备后端和前端？简而言之，并非必须。与 Steam 交互的大部分代码通过 TypeScript 即可实现。后端与前端的设计初衷是构建两种语言间的无缝衔接——后端主要用于与用户 PC 系统交互，而前端则专注于 Steam 客户端内部的功能调用。

# 开始使用

创建插件是一个非常简单直接的过程，只需按照 Millennium 代码库中[插件示例](https://github.com/SteamClientHomebrew/Millennium/tree/main/examples/plugin#readme)提供的 README 说明操作即可。

## API 参考

* [Python API](/developers/plugins/python)
    * 主文件 `backend/main.py`
* [TypeScript API](/developers/plugins/typescript)
    * 主文件 `frontend/index.tsx`