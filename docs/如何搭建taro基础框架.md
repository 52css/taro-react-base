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