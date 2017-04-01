# A Tab Manager that uses a Function Scheduler
(TheCosmicBang task assignment: Javascript in web browsers)

## What is it?
Class **TabManager** is a... tab manager. More specifically, a grouping of tabs that we can manage (to a small extent). The tabs we open get added to an instance of this class, and those we close, get removed. We can open/close multiple tabs, with a specified delay in between every single opening/closing.

TabManager relies on another class, **FuncScheduler**, which is a... function scheduler. It allows the invocation of a series of functions one after the other, with a specified delay before each invocation. It utilizes a FIFO queue for any functions waiting to be scheduled for invocation. Only one function can be at the scheduled state/slot, at any given time.

## Usage

If you want to see the demo in action, please visit the [github project page](http://www.nikosath.space/thecosmicbang-javascript-and-jquery/ch55-javascript-in-web-browsers/index.html).

#### Class TabManager example
```javascript
var URLS = ['https://www.google.com', 'http://www.nationalgeographic.com', 'http://cnn.com'];

var OPENING_DELAY = 2000; // 2s delay between each tab opening
var CLOSING_DELAY = 1000; // 1s delay between each tab closing

var tabs = new TabManager();

tabs.openMany(URLS, OPENING_DELAY);

// Select the even positioned tabs.
// evenTabs is a Array of Window objects
var evenTabs = tabs.filter(function (tab, idx) {
  return idx % 2 !== 0;
});

tabs.closeMany(evenTabs, CLOSING_DELAY);

```

#### Class FuncScheduler example
```javascript
// In the following example f2 gets invoked after 7sec, and f4 after 9sec

var scheduler = new FuncScheduler();
var delay1 = 2000; // in milliseconds
var delay2 = 5000;

scheduler.addFunc(function f1 () {
// do stuff
}, delay1);

scheduler.addFunc(function f2 () {
// do even more stuff
}, delay2);

// If we need 'this' inside f3 or f4 to refer to something other than the global
//  object, we have to pass it to addFunc. We can also pass a single argument
//  for f3/f4

scheduler.addFunc(function f3 () {
// do stuff
}, 1000, this);

scheduler.addFunc(function f4 () {
// do even more stuff
}, 1000, this, arg);
```

## The problem

After an initial delay of 5sec, open a bunch of tabs with a delay of 2sec in between each opening. Then wait 5sec and start closing those tabs with a 2sec delay in between each closing. The closing should happen in the following order: first the even positioned tabs (e.g. the 2nd, the 4th, the 6th, the 8th and the 10th) and then the odd positioned tabs (e.g. the 1st, the 3rd, the 5th, the 7th and the 9th). At the end, prompt the user, asking whether a new phase/circle of openings/closings should begin. Use setTimeout() or/and setInterval().

## My solution

In my analysis, I decided that, for each circle/phase of openings and closings, I had to schedule 3 + (2 * number_of_tabs) events/actions. One after the other with a specified delay in between each event. I think that, if I could use something like a pause(), things would be simpler. With the restriction of having to use setTimeout() or/and setInterval(), I came up with a solution that uses setTimeout to set timers, which when they fire, they use setTimeout to schedule the next event/action.

In particular this is the series of events we have to schedule/delay for one circle:
  Start(Openings(Closing phase(Closings(Start over()))))

For my implementation, I created two classes. Firstly, TabManager, that holds all our tabs together as one group, and has methods for opening/closing those tabs with a specified delay in between each action. Secondly, FuncScheduler, which TabManager relies on, is a quite generic function scheduler, in the sense that it doesn't know anytyhing about tabs, and it can schedule any action whatsoever, as long as, it's in the form a function.

The reasoning for having two separate classes, was that I attemped to minimize the perceived complexity of my solution, and increase the aspects of code reusability and maintainability. Thus, I opted to decouple as much as I could, the process of tab management from the process of scheduling actions.
