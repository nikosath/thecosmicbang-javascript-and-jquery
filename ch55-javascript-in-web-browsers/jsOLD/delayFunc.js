function funcChain(fn, t) {
  // private instance variables
  var queue = [],
    self, timer;
    var isFuncScheduled = false;

  function schedule(fn, t, that, arg) {
    console.log(arguments);

    isFuncScheduled = true;
    timer = setTimeout(function () {
      isFuncScheduled = false;
      // timer = null;
      if (that) {
        fn.call(that, arg);
      } else {
        fn();
      }
      if (queue.length && isFuncScheduled === false) {
        var item = queue.shift();
        schedule(item.fn, item.t, item.that, item.arg);
      }
    }, t);
  }
  self = {
    addFunc: function (fn, t, that, arg) {
      // console.log(arguments);
      // if already queuing things or running a timer,
      //   then just add to the queue
      // if (queue.length || timer) {
      if (isFuncScheduled) {
        queue.push({
          fn: fn,
          t: t,
          that: that,
          arg: arg
        });
      } else {
        // timer = true;
        // no queue or timer yet, so schedule the timer
        schedule(fn, t, that, arg);
      }
      return self;
    },
    cancel: function () {
      clearTimeout(timer);
      queue = [];
    }
  };
  return self.addFunc(fn, t);
}

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
