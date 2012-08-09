define(['d3'], function(require, exports) {
  //debugger
  var previousD3 = this.d3;
  this.d3 = require('d3');
  
  (function(){
    
    var root = this;

    if (typeof exports !== 'undefined') {
      vision = exports;
    } else {
      vision = root.vision = {};
    }

    vision.version = '0.0.1';

    vision.graphs = [];
    vision.charts = [];
    vision.log = {}

    vision.dispatch = d3.dispatch('render_start', 'render_end');

    vision.dispatch.on('render_start', function(e) {
      vision.log.startTime = +new Date;
    });

    vision.dispatch.on('render_end', function(e){
      vision.log.endTime = +new Date;
      vision.log.totalTime = vision.endTime - vision.log.startTime;
      console.log('total', vision.log.totalTime);
    });

  }).call(this)

  this.d3 = previousD3;
  
})
