seajs.config({
  alias: {
    //'jquery': 'lib/jquery/dist/jquery.js',
    'jquery': 'lib/jquery/dist/jquery-cmd.min.js',
    'underscore': 'lib/underscore/underscore-cmd.min.js',
    'backbone': 'lib/backbone/backbone-cmd.js',
    'd3': 'lib/d3/d3-cmd.v2.js'
  },
  base: 'file://localhost/Users/i7xh/workspace/7lab/works/7vision/',
  debug: true,
  charset: 'utf-8'
});

define(function(require) {
  var $ = require('jquery');
  var underscore = require('underscore');
  var backbone = require('backbone');
  var vision = require('./src/core')
  var axis = require('./src/axis')
  //var d3 = require('d3');
  //d3.select("body").style("background-color", "gray")
})

//seajs.use(['jquery'], function($){
  //debugger;
  //underscore
  //$('div#zh-chart').html('i am i7xh')
//})
