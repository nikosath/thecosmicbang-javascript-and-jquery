function FuncChain() {
  // private instance variables
  this.queue = [];
  //  self, timer;
  this.scheduledFunc = null;
  // this.self = this;

}

FuncChain.prototype = {
  constructor: FuncChain,
  schedule: function (fn, t, that, arg) {
    var self = this;
    console.log(arguments);

    // var queue = this.queue;
    // var scheduledFunc = this.scheduledFunc;

    self.scheduledFunc = fn;
    // timer = setTimeout(function () {
    setTimeout(function () {
      self.scheduledFunc = null;
      // timer = null;
      if (that) {
        fn.call(that, arg);
      } else {
        fn();
      }
      if (self.queue.length && self.scheduledFunc === null) {
        var item = self.queue.shift();
        self.schedule(item.fn, item.t, item.that, item.arg);
      }
    }, t);
  },
  addFunc: function (fn, t, that, arg) {
    // console.log(arguments);
    // if already queuing things or running a timer,
    //   then just add to the queue
    // if (queue.length || timer) {
    if (this.scheduledFunc) {
      this.queue.push({
        fn: fn,
        t: t,
        that: that,
        arg: arg
      });
    } else {
      // timer = true;
      // no queue or timer yet, so schedule the timer
      this.schedule(fn, t, that, arg);
    }
    // return self;
  }
};

// function time() {
//   var time = new Date();
//   return (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
// }
// var log = console.log;
//
// function log1() {
// 	  log(time() +  " Message 1");
// }
// function log2() {
// 	  log(time() + " Message 2");
// }
// function log3() {
// 	  log(time() + " Message 3");
// }

// var d = addFunc(log1, 2000)
//     .addFunc(log2, 2000)
//     .addFunc(log3, 2000);
