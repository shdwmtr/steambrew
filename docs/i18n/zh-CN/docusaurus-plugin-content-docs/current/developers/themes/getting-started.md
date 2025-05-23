---
sidebar_position: 2
---

# 开始使用

此处将介绍模板主题代码库的基础知识，以及如何准备制作主题

## 创建一个主题

创建主题是一个非常简单直接的过程，只需按照 Millennium 代码库中[主题示例](https://github.com/SteamClientHomebrew/Millennium/tree/main/examples/theme#readme)提供的 README 说明操作即可。

## 准备就绪

1. 启动 Steam 时添加参数 `-cef-enable-debugging -dev`，这将启用 CEF 远程调试和开发者模式，允许您对 Steam 进行*开发*。
2. 访问 http://localhost:8080/

本页面可显示 Steam 客户端中所有可检查的窗口，包括通常无法直接审查元素的窗口。当您需要选择特定窗口注入 CSS 或 JS 时，这些窗口名称非常有用。
