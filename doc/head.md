---
title: webpack-dndc API文档
date: 2018-03-01 09:35:58
tags:
- api
- 规范
- webpack
---

> 🔧 车巴巴SPA分别有经销商后台、督导后台，每个项目都是用`webpack`构建的，相似度较高。
> 🔧 抽取公共部分移到私服，方便维护及开发。


<!-- more -->

## 项目概况

* 每个项目都有3个配置文件分别是
* webpack.base.babel.js  基础配置
* webpack.dev.babel.js   开发配置
* webpack.pro.babel.js   生产配置
* 以上配置文件分别引用对应的公共库方法


## API文档
