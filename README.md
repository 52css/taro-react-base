# taro-react-base

1. [如何搭建taro基础框架](./docs/%E5%A6%82%E4%BD%95%E6%90%AD%E5%BB%BAtaro%E5%9F%BA%E7%A1%80%E6%A1%86%E6%9E%B6.md)
- [x] 官方cli构建（代码规范、构建等）** 目录规范：统一连字符 **
- [x] 增加alias
- [x] 增加output
- [x] 增加跨平台开发
- [x] 增加路由
- [x] 增加组件
- [] 增加readme

2. [自定义tabbar](./docs/%E8%87%AA%E5%AE%9A%E4%B9%89tabbar.md)
- [x] 新建4个页面+路由
- [x] 新建custom-tab-bar + images
- [x] 新建hooks

## 组件通用属性
- [x] Props
  - [x] 增加className属性
  - [x] 增加style属性
  - [x] 增加onClick属性

3. [基础组件-icon](./docs/%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6-icon.md)
- [x] 增加字体，如何生成图标字体
- [x] Props
  - [x] 增加name属性
  - [x] 增加size属性

4. 基础组件-button
- [x] Props
  - [x] 增加block属性, 是否是块状
  - [x] 增加children属性，按钮内容，同 content。TS 类型：string | TNode。通用类型定义
  - [x] 增加content属性，按钮内容。TS 类型：string | TNode。通用类型定义
  - [x] 增加disabled属性，是否禁用按钮
  - [x] 增加ghost属性，是否为幽灵按钮（镂空按钮）
  - [x] 增加icon属性,	按钮内部图标，可完全自定义。TS 类型：TNode。通用类型定义
  - [x] 增加loading属性, 是否显示为加载状态
  - [x] 增加shape属性, 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形。可选项：`rectangle`/square/round/circle
  - [x] 增加size属性, 组件尺寸。可选项：small/`medium`/large。TS 类型：SizeEnum。通用类型定义
  - [x] 增加theme属性, 组件风格，依次为品牌色、危险色。可选项：`default`/primary/danger
  - [x] 增加type属性, 按钮类型。可选项：submit/reset/`button`
  - [x] 增加variant属性, 按钮形式，基础、线框、文字。可选项：`base`/outline/text

5. 基础组件-fab
- [x] Props
  - [x] 增加buttonProps属性, 透传至 Button 组件
  - [x] 增加icon属性，图标。TS 类型：TNode。通用类型定义
  - [x] 增加text属性，文本内容

6. 数据展示-badge
- [x] Props
  - [x] 增加children属性, 徽标内容，同 content。TS 类型：string | TNode。通用类型定义
  - [x] 增加color属性，颜色
  - [x] 增加content属性，徽标内容。TS 类型：string | TNode。通用类型定义
  - [x] 增加count属性，徽标右上角内容。可以是数字，也可以是文字。如：'new'/3/99+。TS 类型：string | number | TNode。通用类型定义
  - [x] 增加dot属性，是否为红点
  - [x] 增加maxCount属性，封顶的数字值
  - [x] 增加offset属性，设置状态点的位置偏移，示例：[-10, 20] 或 ['10em', '8rem']。TS 类型：Array<string | number>
  - [x] 增加shape属性，形状。可选项：`circle`/round
  - [x] 增加showZero属性，当数值为 0 时，是否展示徽标
  - [x] 增加size属性，尺寸。可选项：small/`medium`

7. 布局-cell
- [x] Props
  - [x] 增加align属性, 内容的对齐方式，默认居中对齐。可选项：top/`middle`/bottom
  - [x] 增加arrow属性，是否显示右侧箭头
  - [x] 增加bordered属性，是否显示下边框
  - [x] 增加description属性，下方内容描述。TS 类型：string | TNode。通用类型定义
  - [x] 增加hover属性，是否开启点击反馈
  - [x] 增加image属性，主图。TS 类型：string | TNode。通用类型定义
  - [x] 增加leftIcon属性，左侧图标，出现在单元格标题的左侧。TS 类型：TNode。通用类型定义
  - [x] 增加note属性，和标题同行的说明文字。TS 类型：string | TNode。通用类型定义
  - [x] 增加required属性，是否显示表单必填星号
  - [x] 增加rightIcon属性，最右侧图标。TS 类型：TNode。通用类型定义
  - [x] 增加title属性，标题。TS 类型：string | TNode。通用类型定义
  - [x] 增加url属性，点击后跳转链接地址。如果值为空，则表示不需要跳转

8. 布局-divider
- [x] Props
  - [x] 增加align属性, 文本位置（仅在水平分割线有效）。可选项：left/right/`center`
  - [x] 增加children属性，子元素，同 content。TS 类型：string | TNode。通用类型定义
  - [x] 增加content属性，子元素。TS 类型：string | TNode。通用类型定义
  - [x] 增加dashed属性，是否虚线（仅在水平分割线有效）
  - [x] 增加layout属性，分隔线类型有两种：水平和垂直。可选项：`horizontal`/vertical
  - [x] 增加lineColor属性，分隔线颜色

9. 布局-grid
- [x] Grid Props
  - [x] 增加align属性, 内容对齐方式。可选项：left/`center`
  - [x] 增加border属性，边框，默认不显示。值为 true 则显示默认边框，值类型为 object 则表示自定义边框样式。TS 类型：boolean | { color?: string; width?: string; style?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset' }
  - [x] 增加column属性，每一行的列数量, 默认4
  - [x] 增加gutter属性，间隔大小
- [x] GridItem Props
  - [x] 增加badgeProps属性, 头像右上角提示信息，继承 Badge 组件的全部特性。如：小红点，或者数字。TS 类型：BadgeProps，Badge API Documents。详细类型定义
  - [x] 增加description属性，文本以外的更多描述，辅助信息。可以通过 Props 传入文本，也可以自定义标题节点。TS 类型：string | TNode。通用类型定义
  - [x] 增加image属性，图片，可以是图片地址，也可以自定义图片节点。TS 类型：string | TNode。通用类型定义
  - [x] 增加layout属性，内容布局方式。可选项：`vertical`/horizontal
  - [x] 增加text属性，文本，可以通过 Props 传入文本，也可以自定义标题节点。TS 类型：string | TNode。通用类型定义
