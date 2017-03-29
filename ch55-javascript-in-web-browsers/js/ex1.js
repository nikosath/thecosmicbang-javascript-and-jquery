// requires FuncQueue, Tabs
var ex1 = function () {
  'use strict';

  // var URLS = ['https://www.google.com', 'http://www.nationalgeographic.com', 'http://cnn.com', 'https://www.zsl.org', 'http://www.telegraph.co.uk/', 'http://www.go2africa.com/', 'http://www.animalplanet.com/', 'http://www.theguardian.com/', 'http://travel.usnews.com/', 'http://www.independent.co.uk/'];
  // var URLS = ['http://1/', 'http://2/', 'http://3/', 'http://4/', 'http://5/', 'http://6/'];
  // var URLS = ['http://1/', 'http://2/'];
  var URLS = ['http://1/'];
  var OPENING_PHASE_DELAY = 5000;
  var CLOSING_PHASE_DELAY = 5000;
  var TAB_OPENING_DELAY = 2000;
  var TAB_CLOSING_DELAY = 2000;

  function selectTabs() {
    var evenTabs = tabs.filter(function (tab, idx) {
      return idx % 2 !== 0;
    });
    var oddTabs = tabs.filter(function (tab, idx) {
      return idx % 2 === 0;
    });
    return evenTabs.concat(oddTabs);
  }

  function main() {
    var fnQueue = new FuncQueue();
    fnQueue.addFunc(function () {
      tabs.openMany(URLS, TAB_OPENING_DELAY, fnQueue);

      fnQueue.addFunc(function () {
        tabs.closeMany(selectTabs(), TAB_CLOSING_DELAY, fnQueue);

        fnQueue.addFunc(function () {
          if (window.confirm('Start again?')) {
            main();
          }
        }, 0);

      }, CLOSING_PHASE_DELAY);

    }, OPENING_PHASE_DELAY);
  }

  var tabs = new Tabs();
  main();
};
