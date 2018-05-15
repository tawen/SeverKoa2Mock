const Koa = require('koa')
//const koaWebpack = require('koa-webpack');
const app = new Koa()

// app.use(koaWebpack({
//   // options
// }))
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors') // 新增部分处理跨域

//这里提一点题外话 假如routes文件新增一个路径就的在下面增加路劲
//假设routes新增一个user.js
//新增一个user需要修改两个地方这里是一个 下面还有一个地方
//这里需要 const user = require('./routes/user')
const test = require('./routes/test')
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(cors()) // 新增部分处理跨域
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
//这里提一点题外话 假如routes文件新增一个路径就的在下面增加路劲
//假设routes新增一个user.js
//这里需要 app.use(user.routes(), user.allowedMethods())
app.use(test.routes(), test.allowedMethods())


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
