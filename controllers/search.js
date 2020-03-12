exports.index = function (req, res, next) {
  var q = req.query.q;
  console.log(req);
  console.log(q);
  console.log();
  
  q = encodeURIComponent(q);
  console.log(q);
  // res.redirect('https://www.google.com.hk/#hl=zh-CN&q=site:cnodejs.org+' + q);
  res.redirect('https://www.baidu.com/s?ie=UTF-8&wd=' + q);
  //https://www.baidu.com/s?ie=UTF-8&wd=ares
};
