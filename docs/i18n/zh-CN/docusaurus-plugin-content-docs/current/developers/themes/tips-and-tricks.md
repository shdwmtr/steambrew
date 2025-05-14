# 提示与技巧

让主题制作更轻松的方法。

## 难以设置样式的窗口

部分窗口在失去焦点或执行某些操作后会消失，请将以下代码复制粘贴到 SharedJSContext 控制台中重新打开它们：

```js
g_PopupManager.AddPopupCreatedCallback((e) => {
  setTimeout(() => {
    const popup = e.m_popup;
    const popup_doc = popup.document;
    const new_wnd = window.open(
      "about:blank?browserType=6",
      popup_doc.title,
      `width=${popup.innerWidth},height=${popup.innerHeight}`
    );

    new_wnd.document.write(popup_doc.documentElement.outerHTML);
  }, 1_000);
});
```

这将打开一个完全相同但不会消失的窗口。请注意，所创建窗口的标题栏按钮（及其他所有功能）将失效，系统会自动添加默认标题栏。如需移除标题栏，请删除 `?browserType=6` 部分。

 `1_000` 表示窗口的 HTML 内容将在 1 秒后被复制到新窗口。此方法可能不总是有效，您可能需要增加该数值。

请注意，这会影响到所有窗口（包括通知、游戏内覆盖界面等）。完成调试后，您需要撤销此操作：

```js
g_PopupManager.m_rgPopupCreatedCallbacks.pop();
```

## 可读类名

自[某次更新](https://github.com/SteamDatabase/SteamTracking/commit/a0f82423f4c422f616253d5825fd8bf453367f3a)后，类名已被完全混淆。请将以下页面的代码复制粘贴到 SharedJSContext 控制台中，并聚焦您想获取实际类名的窗口：https://gist.github.com/ricewind012/3e74b297d28d88af3c84dee028f9cc46

然后每次需要时复制粘贴以下内容：

```js
pClassDeminifier.DoTheThing();
```

此过程可能需要一些时间才能完全生效，因此暂时无响应是正常现象。对于应用后可能新出现的元素，该操作无法生效，您需要重新执行一次。

此方法同样适用于其他Steam页面（如积分商店），但需在对应页面的控制台中单独粘贴代码。

请注意，此方法仅适用于在主题中添加注释，不可用于代码中，因为这些修改仅在当前会话有效。
