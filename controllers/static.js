var multiline = require('multiline');
// static page
// About
exports.about = function (req, res, next) {
  res.render('static/about', {
    pageTitle: '关于我们',
    fulcrums: [],
    fulcrumNow: ''
  });
};

// FAQ
exports.faq = function (req, res, next) {
  res.render('static/faq');
};

exports.getstart = function (req, res) {
  res.render('static/getstart', {
    pageTitle: 'Node.js 新手入门',
    fulcrums: [],
    fulcrumNow: ''
  });
};


exports.robots = function (req, res, next) {
  res.type('text/plain');
  res.send(multiline(function () {
    ;
    /*
    # See http://www.robotstxt.org/robotstxt.html for documentation on how to use the robots.txt file
    #
    # To ban all spiders from the entire site uncomment the next two lines:
    # User-Agent: *
    # Disallow: /
    */
  }));
};

exports.api = function (req, res, next) {
  res.render('static/api', {
    fulcrums: [],
    fulcrumNow: ''
  });
};