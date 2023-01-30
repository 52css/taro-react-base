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

4. [基础组件-button](./docs/%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6-button.md)
- [x] 增加字体组件
  - [x] 增加className，类名
  - [x] 增加style，样式
  - [x] 增加block属性, 是否是块状
  - [x] 增加children，按钮内容，同 content。TS 类型：string | TNode。通用类型定义
  - [x] 增加content，按钮内容。TS 类型：string | TNode。通用类型定义
  - [x] 增加disabled，是否禁用按钮
  - [x] 增加ghost，是否为幽灵按钮（镂空按钮）
  - [x] 增加icon,	按钮内部图标，可完全自定义。TS 类型：TNode。通用类型定义
  - [x] 增加loading, 是否显示为加载状态
  - [x] 增加shape, 按钮形状，有 4 种：长方形、正方形、圆角长方形、圆形。可选项：`rectangle`/square/round/circle
  - [x] 增加size, 组件尺寸。可选项：small/`medium`/large。TS 类型：SizeEnum。通用类型定义
  - [x] 增加theme, 组件风格，依次为品牌色、危险色。可选项：`default`/primary/danger
  - [x] 增加type, 按钮类型。可选项：submit/reset/`button`
  - [x] 增加variant, 按钮形式，基础、线框、文字。可选项：`base`/outline/text
  - [x] 增加onClick, TS 类型：(e: MouseEvent) => void 点击时触发

