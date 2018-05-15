## 介绍
    nodejs+koa+mock 简单虚拟构建接口数据

## 构建与启动

```
//安装依赖
npm install

//启动
npm start
```

## 使用说明

1、在router 文件夹中新建router module(例如：test.js)；

2、在app.js中引入;
```
const test = require('./routes/test')
app.use(test.routes(), test.allowedMethods())
```

## 访问地址

http://IP:PORT/test/string

> 项目没有引入热加载，喜欢的同事可以自行添加。