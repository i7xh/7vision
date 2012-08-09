define(function(require, exports) {
  //debugger
  var previousD3 = this.d3;
  this.d3 = require('d3');
  (function(){
    var vision = require('./core') 
    var axis;
    if (typeof exports !== 'undefined') {
      axis = exports;
    } else {
      axis = {};
    }
    axis.setX = function() {console.log('setX')}
    axis.setY = function() {console.log('setY')}
    vision.axis = axis;
  }).call(this);
  
  this.d3 = previousD3;
})
