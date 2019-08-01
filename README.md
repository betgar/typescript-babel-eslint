---
title: configurate-typescript-project-step-by-step
date: 2019-08-01 13:00:00
---

# 一步一步配置Typescript前端工程

## 项目相关

[Template README](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
创建README

[CHOOSE LICENSE](https://choosealicense.com/)
选择LICENSE


## 项目初始化
- 初始化project

  ```bash
  git init

  npm init
  ```

- `.gitignore`
  [gitignore在线生成](https://www.gitignore.io/)




## babel配置

[babel presets文档](https://babeljs.io/docs/en/presets)
[babel-polyfill文档](https://babeljs.io/docs/en/babel-polyfill)
[babel config文档](https://babeljs.io/docs/en/config-files)
[babel proposal文档](https://babeljs.io/docs/en/plugins#experimental)

```bash
npm i --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-typescript

# babel 7之后proposal需要独立安装，用到那个装那个
npm i --save-dev @babel/plugin-proposal-class-properties @babel/plugin-proposal-object-rest-spread

# 如果需要polyfill
# 注意：core-js版本, babel 7.4.0之后@babel/polyfill过时，默认依赖core-js@2版本，也可以指定3
npm i @babel/polyfill core-js
```

```javascript
// babel.config.js
// targets推荐使用.browserslistrc替换
const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: 3,
    },
  ],
  [
    '@babel/preset-typescript',
  ],
];

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-optional-chaining',
];
module.exports = {
  presets,
  plugins,
  exclude: [
    'src/**/*.spec.(js|ts)',
    'src/**/*.test.(js|ts)',
  ],
  comments: false,
};

```

## eslint配置
> 因为TypeScript官方团队选择支持eslint，所以以后还是选择eslint玩吧。
```bash
# 安装
npm i -D eslint

# 生成默认的配置，因为格式化是ts，默认先不选代码风格
npx eslint --init
```

> typescript-eslint
因为eslint的解析器不认识TypeScript，所以这里需要替换掉parser
```bash
# @typescript-eslint/parser
npm i --save-dev typescript @typescript-eslint/parser
```

### 代码风格(typescript-eslint + Prettier + airbnb)
[@typescript-eslint/eslint-plugin文档](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)
[腾讯的风格eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy)
[ @typescript-eslint/eslint-plugin支持的规则](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules)

```bash
# 安装@typescript-eslint/eslint-plugin
npm i --save-dev @typescript-eslint/eslint-plugin
```

### Prettier一起使用

```bash
npm i --save-dev eslint-config-prettier
```

### airbnb一起使用

> [eslint-config-airbnb文档](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)

```bash
# npm 5+，注意看官方文档安装
npx install-peerdeps --dev eslint-config-airbnb
```

```javascript
// .eslintrc.js
module.exports = {
	parser: '@typescript-eslint/parser', // 解析器
	plugins: ['@typescript-eslint'],
	extends: [
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'prettier/@typescript-eslint',
	],
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {},
};

```

```javascript
// package.json
// eslint之后是文件夹, --ext参数才生效，如果是具体的正则表达式则--ext被忽略
{
  "scripts":{
     "lint": "eslint src --ext .js,.ts"
  }
}
```




## TypeScript配置
> tsconfig.json

```bash
npx tsc --init --declaration --allowSyntheticDefaultImports --target esnext --outDir dist
```

```javascript
// 添加命令编译文件
{
   "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint src --ext .js,.ts",
    "checktypes": "tsc --noEmit",
    "checktypes:watch": "npm run checktype -- --watch",
    "build": "npm run build:types && npm run build:js",
    "build:types": "tsc --emitDeclarationOnly",
    "build:js": "npx babel src --out-dir dist --source-maps inline --extensions .ts,.tsx"
  }
}

```

[compiler-options](https://www.tslang.cn/docs/handbook/compiler-options.html)



## webpack

```bash
npm install --save-dev webpack webpack-cli babel-loader
```



### 约定提交+commit message校验
> commitlint + husky + lint-staged

```bash
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# 安装完毕之后添加配置
echo "module.exports = {extends: ['@commitlint/config-conventional']}" > commitlint.config.js


```

```bash
# 安装
npm i husky lint-staged --save-dev

```

```javascript
// package.json 配置
{
"husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS", // 配合commitlint使用
      "pre-commit": "lint-staged" // 配置lint-staged
    }
  }
}



```


```javascript
// package.json 配置
{
    "lint-staged": {
        "src/**/*.{js,ts,css,vue,tsx,jsx}": [
            "vue-cli-service lint", // npm run lint
            "git add"
        ]
     }
}

```




