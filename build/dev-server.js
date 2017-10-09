require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
//path是对路径进行操作的模块,node本身提供的
var path = require('path')
//express 是对node服务功能的api
var express = require('express')
//打包工具
var webpack = require('webpack')
//一个node代理中间
var proxyMiddleware = require('http-proxy-middleware')
//webpack打包工具的配置
var webpackConfig = (process.env.NODE_ENV === 'testing' || process.env.NODE_ENV === 'production')
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

//启动express服务
var app = express()

//拿到模拟数据
var appData = require('../data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings
// console.log(seller);
//注册一个express路由
var apiRoutes = express.Router();

apiRoutes.get('/seller', function (req, res) {
  res.json({
    errno: 0,
    data: seller
  })
});
apiRoutes.get('/goods', function (req, res) {
  res.json({
    errno: 0,
    data: goods
  })
});
apiRoutes.get('/ratins', function (req, res) {
  res.json({
    errno: 0,
    data: ratings
  })
});

app.use('/api', apiRoutes);


//启动webpack 进行编译
var compiler = webpack(webpackConfig)


//启动webpack开发中间件, 我们使用run dev的时候
//index.html中的代码并没有改变,但是我们还是看到页面了,这是因为数据存储在内存中的
//这个功能是devmiddleware做的
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

//热更新中间
var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
