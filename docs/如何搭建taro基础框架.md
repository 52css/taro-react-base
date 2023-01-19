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
