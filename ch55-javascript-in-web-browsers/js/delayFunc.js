function delayFunc(fn, t) {
    // private instance variables
    var queue = [], self, timer;

    function schedule(fn, t, that, arg) {
        timer = setTimeout(function() {
            timer = null;
            if (that) {
              that.fn(arg);
            } else {
              fn();
            }
            if (queue.length) {
                var item = queue.shift();
                schedule(item.fn, item.t, item.that, item.arg);
            }
        }, t);
    }
    self = {
        delayFunc: function(fn, t, that, arg) {
          console.log(arguments);
            // if already queuing things or running a timer,
            //   then just add to the queue
        	  if (queue.length || timer) {
                queue.push({fn: fn, t: t, that: that, arg: arg});
            } else {
                // no queue or timer yet, so schedule the timer
                schedule(fn, t, that, arg);
            }
            return self;
        },
        cancel: function() {
            clearTimeout(timer);
            queue = [];
        }
    };
    return self.delayFunc(fn, t);
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

// var d = delayFunc(log1, 2000)
//     .delayFunc(log2, 2000)
//     .delayFunc(log3, 2000);
