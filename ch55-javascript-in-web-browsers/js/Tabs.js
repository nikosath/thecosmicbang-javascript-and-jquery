/**
* A collection of open tabs. The tabs we open get added to the group, and those we close, get removed. We can open/close multiple tabs with a specified delay in between every single opening/closing.
* @constructor
* @requires FuncQueue
*/
function Tabs() {
  'use strict';
  // Holds all the windows we open
  this.openTabs = [];
}

Tabs.prototype = {
  // This is a JavaScript convention
  constructor: Tabs,
  // Opens a new tab and adds it to the group
  open: function (url) {
    console.log(time() + ' open tab ' + url);
    this.openTabs.push(window.open(url));
  },
  length: function () {
    return this.openTabs.length;
  },
  // Returns all the tabs that satisfy a given condition
  filter: function (condition) {
    var filteredTabs = [];
    this.openTabs.forEach(function (tab, idx) {
      if (condition(tab, idx)) {
        filteredTabs.push(tab);
      }
    });
    return filteredTabs;
  },
  openMany: function (urls, delay, fnQueue) {
    delay = (delay === undefined) ? 0 : delay;
    fnQueue = (fnQueue === undefined) ? new FuncQueue() : fnQueue;
    // open the first with 0 delay
    fnQueue.addFunc(this.open, 0, this, urls[0]);
    for (var i = 1; i < urls.length; i++) {
      fnQueue.addFunc(this.open, delay, this, urls[i]);
    }
  },
  removeClosedTabs: function () {
    var self = this;
    self.openTabs.forEach(function (tab, idx) {
      if (tab.closed) {
        self.openTabs.splice(idx, 1);
      }
    });
  },
  closeMany: function (tabs, delay, fnQueue) {
    delay = (delay === undefined) ? 0 : delay;
    fnQueue = (fnQueue === undefined) ? new FuncQueue() : fnQueue;
    // close the first with 0 delay
    fnQueue.addFunc(tabs[0].close, 0, tabs[0]);
    for (var j = 1; j < tabs.length; j++) {
      fnQueue.addFunc(tabs[j].close, delay, tabs[j]);
    }
    fnQueue.addFunc(this.removeClosedTabs, 0, this);
  }

};

// for debugging
function time() {
  var time = new Date();
  return (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
}
