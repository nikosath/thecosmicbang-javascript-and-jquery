function FuncQueue() {
  'use strict';
  // queue of functions waiting to be scheduled
  this.queue = [];
  // currently scheduled function and its arguments
  this.currentlyScheduled = null;
}

FuncQueue.prototype = {
  // this is a JavaScript convention
  constructor: FuncQueue,

  // fn: function to be delayed/scheduled
  // delay: passed to setTimeout
  // that: what 'this' should be inside fn
  // arg: a single argument for fn
  schedule: function (fn, delay, that, arg) {
    // setTimeout executes the function with 'this' pointing to the global object, so we need to save it
    var self = this;
    setTimeout(function () {
      // what was scheduled, we are now executing
      self.currentlyScheduled = null;
      // check if we were given a 'this' (that) for fn
      if (that) {
        fn.call(that, arg);
      } else {
        fn(arg);
      }
      // if there are functions in the queue and there's no function scheduled, then schedule the first/oldest one
      if (self.queue.length && self.currentlyScheduled === null) {
        var item = self.queue.shift();
        self.schedule(item.fn, item.delay, item.that, item.arg);
      }
    }, delay);
    // keep track of what we just scheduled with setTimeout
    self.currentlyScheduled = arguments;
  },

  // fn: function to be delayed/scheduled
  // delay: passed to setTimeout
  // that: what 'this' should be inside fn
  // arg: a single argument for fn
  addFunc: function (fn, delay, that, arg) {
    // if there's another function scheduled, put fn in the queue
    if (this.currentlyScheduled) {
      this.queue.push({
        fn: fn,
        delay: delay,
        that: that,
        arg: arg
      });
      // else schedule it right away
    } else {
      this.schedule(fn, delay, that, arg);
    }
  }
};
