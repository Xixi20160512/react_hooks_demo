# Task

使用 typeScript + nextjs + react hooks + styled component 构建的应用

## 兼容性

- ie9+
- chrome
- firefox

## 开发+部署

``` bash
# 安装依赖
yarn

# 本地开发
yarn dev

#构建发布
yarn build

#执行测试用例
yarn test
```

## 技术栈

- [nextjs](https://github.com/zeit/next.js) - 基于 react 的同构框架，支持 ssr

  主要使用 nextjs 的服务端渲染能力，但是这个框架目前仅[支持 ie9+](https://github.com/zeit/next.js/issues/3505#issuecomment-354128007)。

- [react hooks](https://reactjs.org/docs/hooks-intro.html)

  hooks 是 react 在 16.8 版本推出的 api，目的在于提供纯函数开发模式，摆脱对 Class 写法的依赖。结合 react 的 context API 使用能够很好的在复杂组件结构中进行数据共享。

- [styled components](https://www.styled-components.com/) - 模块化 css 的另一种探索

  styled components 目前是 react 生态中热门的模块化 css 解决方案。在这个 Demo 项目中，进行了一些基础组件的封装，包括 Container, Row, Column, Text 等。可以较方便的实现布局样式。

  参考：[CSS Evolution](https://medium.com/@perezpriego7/css-evolution-from-css-sass-bem-css-modules-to-styled-components-d4c1da3a659b)

- Type Script

  编写大规模项目、可维护项目必备。