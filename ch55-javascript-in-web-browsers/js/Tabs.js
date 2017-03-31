/**
 * @fileoverview
 * @requires FuncScheduler.js
 * @requires
 * @type {Array}
 */

/**
* A collection of open tabs. The tabs we open get added to it, and those we close, get removed. We can open/close multiple tabs with a specified delay in between every single opening/closing.
* @constructor
*/
function Tabs(scheduler) {
  'use strict';
  // Holds all the windows we open
  this.openTabs = [];
  this.scheduler = scheduler;
}

Tabs.prototype = {
  // This is a JavaScript convention
  constructor: Tabs,
  // Opens a new tab and adds it to the group
  open: function (url) {
    console.log(NkaUtils.time() + ' open tab ' + url);
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
  openMany: function (urls, delay) {
    delay = (delay === undefined) ? 0 : delay;
    // open the first with 0 delay
    this.scheduler.addFunc(this.open, 0, this, urls[0]);
    for (var i = 1; i < urls.length; i++) {
      this.scheduler.addFunc(this.open, delay, this, urls[i]);
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
  closeMany: function (tabs, delay) {
    delay = (delay === undefined) ? 0 : delay;
    // close the first with 0 delay
    this.scheduler.addFunc(tabs[0].close, 0, tabs[0]);
    for (var j = 1; j < tabs.length; j++) {
      this.scheduler.addFunc(tabs[j].close, delay, tabs[j]);
    }
    this.scheduler.addFunc(this.removeClosedTabs, 0, this);
  }

};
