# TypeScript-Babel-Eslint-Starter
本项目是一个集成前端工具的模板项目，没有其它的作用，只是方便每次的项目初始化，不重复配置。
提供另一种选择使用Babel编译TypeScript，Eslint校验，放弃Tslint（官方团队现在支持Eslint）。
项目集成了:

- TypeScript
- Babel
- Eslint
- Webpack
- standard-version

  > 完成CHANGELOG生成，自动打tag
- [Conventional Commits](https://www.conventionalcommits.org/zh/v1.0.0-beta.4/)

  > commitlint + husky + lint-staged保证代码风格和commit message格式

> 工具的版本看`package.json`

## 起步
> [工程配置步骤移步wiki](https://github.com/betgar/typescript-babel-eslint/wiki/typescript-babel-eslint%E5%B7%A5%E7%A8%8B%E9%85%8D%E7%BD%AE%E6%AD%A5%E9%AA%A4)

### 前置条件
> 先安装node环境, 建议使用nrm管理registry, npm安装。

- Node.js 8+
- npm 6+


### 安装

```bash
npm i
```

### lint

```bash
npm run lint
```

### TypeScript的类型检查
```bash
npm run checktypes
```


```bash
# 监听文件变化，实时检查类型
npm run checktypes:watch
```

### 构建
```bash
# 同时生成TypeScript的类型声明和JavaScript文件
npm run build
```

```bash
# 只生成TypeScript的类型声明
npm run build:types
```

```bash
# 只编译TypeScript
npm run build:js
```

### 打包

```bash
npm run bundle
```


## License

MIT License

Copyright (c) 2019~present betgar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
