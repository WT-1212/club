aresclub
=
安装部署
Nodejs写的Nodeclub在Mac和Centos上部署运行   https://www.cnblogs.com/slimo/p/4977623.html
阿里云服务器部署Node.js社区项目Nodeclub（CentOS）http://www.bslxx.com/a/mianfeivueke/Node_js/2017/1028/1100.html
MongoDB 添加用户名和密码 https://blog.csdn.net/qq_37925422/article/details/80445591
Linux 下安装mongodb，并配置 https://www.jianshu.com/p/d8f471bdfa3b



[![build status][travis-image]][travis-url]
[![codecov.io][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![node version][node-image]][node-url]

[travis-image]: https://img.shields.io/travis/cnodejs/aresclub/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/cnodejs/aresclub
[codecov-image]: https://img.shields.io/codecov/c/github/cnodejs/aresclub/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/cnodejs/aresclub?branch=master
[david-image]: https://img.shields.io/david/cnodejs/aresclub.svg?style=flat-square
[david-url]: https://david-dm.org/cnodejs/aresclub
[node-image]: https://img.shields.io/badge/node.js-%3E=_4.2-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/

## 介绍

aresclub 是使用 **Node.js** 和 **MongoDB** 开发的社区系统，界面优雅，功能丰富，小巧迅速，
已在Node.js 中文技术社区 [CNode(http://cnodejs.org)](http://cnodejs.org) 得到应用，但你完全可以用它搭建自己的社区。

## 安装部署

*不保证 Windows 系统的兼容性*

线上跑的是 [Node.js](https://nodejs.org) v8.12.0，[MongoDB](https://www.mongodb.org) 是 v4.0.3，[Redis](http://redis.io) 是 v4.0.9。

```
1. 安装 `Node.js[必须]` `MongoDB[必须]` `Redis[必须]`
2. 启动 MongoDB 和 Redis
3. `$ make install` 安装 aresclub 的依赖包
4. `cp config.default.js config.js` 请根据需要修改配置文件
5. `$ make test` 确保各项服务都正常
6. `$ node app.js`
7. visit `http://localhost:3000`
8. done!
```

## 测试

跑测试

```bash
$ make test
```

跑覆盖率测试

```bash
$ make test-cov
```

## 贡献

有任何意见或建议都欢迎提 issue，或者直接提给 [@alsotang](https://github.com/alsotang)

## License

MIT
