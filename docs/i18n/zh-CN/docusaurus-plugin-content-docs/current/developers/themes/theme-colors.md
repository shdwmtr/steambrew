# 主题颜色

## 介绍
添加主题颜色是一种简单有效的方式，让终端用户无需直接修改代码即可通过主题编辑器调整 CSS 颜色变量。

要使用主题颜色功能，请在 `skin.json` 中添加 `RootColors` 键，并指定一个**仅**包含 `:root` 元素的 CSS 文件相对路径

```json title="Example skin.json"
{
    "RootColors": "path/to/colors.css",
}
```

这样即可！其余工作将自动处理，这些颜色变量将全局应用于所有 CSS 文件。用户现在可通过**设置 -> 主题 -> 编辑**来自定义这些颜色。

## 格式

* ### 支持的颜色格式
  * Raw RGB channels 
  * Raw RGBA channels
  * RGB channels
  * RGBA channels
  * Hex 
* ### 添加额外信息
  * 为颜色添加自定义名称，并在颜色上方添加注释和 `@name` 选择器
  * 为颜色添加自定义描述，在颜色上方添加注释并使用 `@description` 选择器

## 补充

```css
:root {
    /* 
    * @name 这是一个名称
    * @description 这是一个描述
    */
    --raw-rgb: 123, 123, 123; 
    /*
    * @name 这是一个名称 1
    */
    --raw-rgba: 123, 123, 123, 0.5;
    --rgb: rgb(123, 123, 123);
    --rgba: rgba(123, 123, 123, 0.5);
    --hex: #123456;

    /* 以下是无效且无法解析的颜色示例 */
    --invalid-1: hsl(123, 50%, 50%);
    --invalid-2: blue;
}
```

## 