# 如何搭建taro基础框架

## CLI工具安装

首先，你需要使用 npm 或者 yarn 全局安装 `@tarojs/cli`，或者直接使用 npx:

```sh
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli

# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

> 值得一提的是，如果安装过程出现sass相关的安装错误，请在安装 mirror-config-china 后重试。
> 
> ```sh
> $ npm install -g mirror-config-china
> ```

## 通过命令行初始化工程

```sh
$ taro init taro-react-base
$ 工程直接回车
$ 选择框架React
$ 选择Ts
$ 选择Sass
$ 选择Webpack5
$ 选择yarn
$ 选择gitee
$ 选择默认模板
```

## 增加alias

在 `config/index.js` 增加配置, 头部引用
```js
import * as path from 'path'; //引入node的path模块
```
```js
module.exports = {
  // ...
  alias: {
    '@/components': path.resolve(__dirname, '..', 'src/components'),
    '@/utils': path.resolve(__dirname, '..', 'src/utils'),
    '@/services': path.resolve(__dirname, '..', 'src/services'),
    '@/hooks': path.resolve(__dirname, '..', 'src/hooks'),
  }
}
```
为了让编辑器（VS Code）不报错，并继续使用自动路径补全的功能，需要在项目根目录下的 `jsconfig.json` 或者 `tsconfig.json` 中配置 `paths` 让编辑器认得我们的别名，形式如下：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/components/*": ["./src/components/*"],
      "@/utils/*": ["./src/utils/*"],
      "@/services/*": ["./src/services/*"],
      "@/hooks/*": ["./src/hooks/*"],
    }
  }
}
```

## 增加output

使用taro最大的好处就是可以发布多端，目前生成都是dist，修改dist生成对应小程序，方便同时调试, 在 `config/index.js` 的dist修改成

```js
module.exports = {
  outputRoot: `dist/${process.env.TARO_ENV}`,
}
```

## 增加跨平台开发

可以通过`process.env.TARO_ENV` 取值：`weapp` / `swan` / `alipay` / `tt` / `qq` / `jd` / `h5` / `rn`

可以通过这个变量来区分不同环境，从而使用不同的逻辑。在编译阶段，**会移除不属于当前编译类型的代码，只保留当前编译类型下的代码**，例如：

1. 在微信小程序和 H5 端分别引用不同资源：

```js
/** 源码 */
if (process.env.TARO_ENV === 'weapp') {
  require('path/to/weapp/name')
} else if (process.env.TARO_ENV === 'h5') {
  require('path/to/h5/name')
}

/** 编译后（微信小程序）*/
if (true) {
  require('path/to/weapp/name')
}
/** 编译后（H5）*/
if (true) {
  require('path/to/h5/name')
}
```

2. 决定不同端要加载的组件

```js
/** 源码（React JSX） */
<View>
  {process.env.TARO_ENV === 'weapp' && <ScrollViewWeapp />}
  {process.env.TARO_ENV === 'h5' && <ScrollViewH5 />}
</View>

/** 编译后（微信小程序）*/
<View>
  {true && <ScrollViewWeapp />}
</View>
/** 编译后（H5）*/
<View>
  {true && <ScrollViewH5 />}
</View>
```

> 不要解构 process.env 来获取环境变量，请直接以完整书写的方式（process.env.TARO_ENV）来进行使用。


## 增加路由

在`app.config.ts` 下 pages 新增 `pages/about/index`

```js
export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/about/index'
  ],
})
```

以新建 about 为例， 新建 `pages/about/index.tsx`

```jsx
import { View, Text } from '@tarojs/components'
import { useRouter } from '@tarojs/taro'

function About() {
  const router = useRouter()

  console.log('router', router)
  return (
    <View>
      About
    </View>
  );
}

export default About;
```

### 路由跳转
```js
Taro.navigateTo({
  url: `pages/about/index?id=1`
})
```

## 增加公共组件

在 `src/components` 下新建 `hello/index.tsx`

```jsx
import { View, Text } from '@tarojs/components'

function Hello({name}) {
  return (
    <View>
      Hello, {name}
    </View>
  );
}

export default Hello;
```

为了方便引用, 新建 `src/components/index.ts`

```ts
export { default as Hello } from './hello'
```

正式引用组件, 导入组件

```js
import { Hello } from '@/components/index'
```

```jsx
<Hello name='world' />
```

