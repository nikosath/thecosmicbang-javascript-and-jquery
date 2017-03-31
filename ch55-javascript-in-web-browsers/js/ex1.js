/**
 * A module of sorts, for the purpose of minimizing global namespace pollution.
 * @requires FuncScheduler.js
 * @requires Tabs.js
 */
var ex1 = (function () {
  'use strict';

  // Test cases.
  var URLS = ['http://1/', 'http://2/', 'http://3/', 'http://4/', 'http://5/', 'http://6/'];
  // var URLS = ['http://1/', 'http://2/'];
  // var URLS = ['http://1/'];
  // var URLS = ['https://www.google.com', 'http://www.nationalgeographic.com', 'http://cnn.com', 'https://www.zsl.org', 'http://www.telegraph.co.uk/', 'http://www.go2africa.com/', 'http://www.animalplanet.com/', 'http://www.theguardian.com/', 'http://travel.usnews.com/', 'http://www.independent.co.uk/'];

  // Time delays before each phase or action (milliseconds).
  var OPENING_PHASE_DELAY = 5000;
  var CLOSING_PHASE_DELAY = 5000;
  var TAB_OPENING_DELAY = 2000;
  var TAB_CLOSING_DELAY = 2000;


  /**
   * The one and only instance of FuncScheduler this exercise uses
   * @type {FuncScheduler}
   */
  var scheduler = new FuncScheduler();
  /**
   * The instance of Tabs that the following, top level functions are using.
   * @type {Tabs}
   */
  var tabs = new Tabs(scheduler);

  /**
   * Returns an array of all the currently open tabs in the following order: first the even positioned windows (the 2nd, the 4th, the 6th, the 8th and the 10th) and then the odd positioned windows (the 1st, the 3rd, the 5th, the 7th and the 9th).
   * @return {Window[]}
   */
  function selectEvenOddTabs() {
    var evenTabs = tabs.filter(function (tab, idx) {
      return idx % 2 !== 0;
    });
    var oddTabs = tabs.filter(function (tab, idx) {
      return idx % 2 === 0;
    });
    return evenTabs.concat(oddTabs);
  }

  /**
   * The main/starting function of this exercise.
   */
  function main() {

    // First we send to the queue
    scheduler.addFunc(function () {
      tabs.openMany(URLS, TAB_OPENING_DELAY);

      scheduler.addFunc(function () {
        tabs.closeMany(selectEvenOddTabs(), TAB_CLOSING_DELAY);

        scheduler.addFunc(function () {
          if (window.confirm('Start again?')) {
            main();
          }
        }, 0);

      }, CLOSING_PHASE_DELAY);

    }, OPENING_PHASE_DELAY);
  }

  return {main: main};
})();
