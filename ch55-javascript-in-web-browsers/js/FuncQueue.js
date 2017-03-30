/**
 * Used with 'new', it creates a FuncQueue object.
 * @constructor
 * @classdesc A FIFO queue for functions waiting to be scheduled for execution.
 */
function FuncQueue() {
  'use strict';
  /**
   * Queue of functions waiting to be scheduled.
   * @type {Function[]}
   */
  this.queue = [];
  /**
   * An array that holds the currently scheduled function and any optional accompanying values.
   * @type {Array}
   */
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
  //


  /**
   * Adds a function in the FIFO queue, waiting for its turn to become scheduled. Or
   * schedules it immediately, if no other function has been scheduled (pending). Only one function can be scheduled, at any given time.
   * @param  {Function} fn - Function to be delayed/scheduled
   * @param  {number} delay - Time delay in milliseconds
   * @param  {Object} [that] - What 'this' will refer to, from inside fn
   * @param  {} [arg] - Argument of any type, that we'll call fn with
   */
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
