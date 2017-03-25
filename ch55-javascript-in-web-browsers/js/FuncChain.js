function FuncChain() {
  // queue of functions waiting to be scheduled
  this.queue = [];
  // currently scheduled function and its arguments
  this.currentlyScheduled = null;
}

FuncChain.prototype = {
  // this is a JavaScript convention
  constructor: FuncChain,

  // fn: function to be delayed/scheduled
  // delay: passed to setTimeout
  // that: what 'this' should be inside fn
  // arg: a single argument for fn
  schedule: function (fn, delay, that, arg) {
    var self = this;
    setTimeout(function () {
      self.currentlyScheduled = null;
      if (that) {
        fn.call(that, arg);
      } else {
        fn();
      }
      if (self.queue.length && self.currentlyScheduled === null) {
        var item = self.queue.shift();
        self.schedule(item.fn, item.delay, item.that, item.arg);
      }
    }, delay);
    self.currentlyScheduled = arguments;
  },

  addFunc: function (fn, delay, that, arg) {
    if (this.currentlyScheduled) {
      this.queue.push({
        fn: fn,
        delay: delay,
        that: that,
        arg: arg
      });
    } else {
      this.schedule(fn, delay, that, arg);
    }
  }
};
