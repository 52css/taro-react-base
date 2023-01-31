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

3. [基础组件-icon](./docs/%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6-icon.md)
- [x] 增加字体，如何生成图标字体
- [x] 增加字体组件
  - [x] 增加name属性
  - [x] 增加size属性

4. 基础组件-button
- [x] 增加字体组件
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
  - [x] 增加onClick属性, TS 类型：(e: MouseEvent) => void 点击时触发

5. 基础组件-fab
- [x] 增加字体组件
  - [x] 增加buttonProps属性, 透传至 Button 组件
  - [x] 增加icon属性，图标。TS 类型：TNode。通用类型定义
  - [x] 增加text属性，文本内容
  - [x] 增加onClick属性，TS 类型：(context: {e: MouseEvent}) => void悬浮按钮点击事件

6. 数据展示-badge
- [x] 增加组件
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
