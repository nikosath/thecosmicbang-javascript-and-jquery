function ex1() {
  'use strict';

  // var URLS = ['https://www.google.com', 'http://www.nationalgeographic.com', 'http://cnn.com', 'https://www.zsl.org', 'http://www.telegraph.co.uk/', 'http://www.go2africa.com/', 'http://www.animalplanet.com/', 'http://www.theguardian.com/', 'http://travel.usnews.com/', 'http://www.independent.co.uk/'];
  var URLS = ['http://1/', 'http://2/', 'http://3/', 'http://4/', 'http://5/', 'http://6/'];
  // var URLS = ['http://1/', 'http://2/'];

  var tabs = {
    tabGroup: [],

    add: function (url) {
      console.log(time() + ' add tab ' + url);
      this.tabGroup.push(window.open(url));
    },
    removeByIdx: function (index) {
      this.tabGroup.splice(index, 1)[0].close();
      console.log(time() + ' remove tab with idx:' + index);
    },
    removeTab: function (tab) {
      // console.log(time() + ' remove tab:' + tab);
      tab.close();
    },
    length: function () {
      return this.tabGroup.length;
    },
    tweakIndices: function (tabIndices) {
      console.log('Indices before tweaking: ' + tabIndices);
      for (var i = 1; i < tabIndices.length; i++) {
        for (var j = 0; j < i; j++) {
          if (tabIndices[j] <= tabIndices[i]) {
            tabIndices[i] -= 1;
          }
        }
      }
      console.log('Indices after tweaking: ' + tabIndices);
      return tabIndices;
    },

  };

  function time() {
    var time = new Date();
    return (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
  }

  function getEvenOddIndices(tabs) {
    var tabIndicesToRemove = [];
    for (var base = 1; base >= 0; base -= 1) {
      for (var idx = base; idx < tabs.length(); idx += 2) {
        tabIndicesToRemove.push(idx);
      }
    }
    return tabIndicesToRemove;
  }
  function getEvenOddTabs(tabs) {
    var evenOddTabs = [];
    for (var base = 1; base >= 0; base -= 1) {
      for (var idx = base; idx < tabs.length(); idx += 2) {
        evenOddTabs.push(tabs.tabGroup[idx]);
      }
    }
    return evenOddTabs;
  }

  function main() {
    var chain = new FuncChain();
    chain.addFunc(function () {
      chain.addFunc(tabs.add, 0, tabs, URLS[0]);
      for (var i = 1; i < URLS.length; i++) {
        chain.addFunc(tabs.add, 2000, tabs, URLS[i]);
      }

      chain.addFunc(function () {
        var tabToRemove = getEvenOddTabs(tabs);
        chain.addFunc(tabs.removeTab, 0, tabs, tabToRemove[0]);
        for (var j = 1; j < tabToRemove.length; j++) {
          chain.addFunc(tabs.removeTab, 2000, tabs, tabToRemove[j]);
        }

        chain.addFunc(function () {
          if (window.confirm('Go one more time?')) {
            main();
          }
        }, 0);

      }, 5000);

    }, 5000);
  }
  // function main() {
  //   var chain = new FuncChain();
  //   chain.addFunc(function () {
  //     chain.addFunc(tabs.add, 0, tabs, URLS[0]);
  //     for (var i = 1; i < URLS.length; i++) {
  //       chain.addFunc(tabs.add, 2000, tabs, URLS[i]);
  //     }
  //
  //     chain.addFunc(function () {
  //       var tabIndicesToRemove = tabs.tweakIndices(getEvenOddIndices(tabs));
  //       chain.addFunc(tabs.removeByIdx, 0, tabs, tabIndicesToRemove[0]);
  //       for (var j = 1; j < tabIndicesToRemove.length; j++) {
  //         chain.addFunc(tabs.removeByIdx, 2000, tabs, tabIndicesToRemove[j]);
  //       }
  //
  //       chain.addFunc(function () {
  //         if (window.confirm('Go one more time?')) {
  //           main();
  //         }
  //       }, 0);
  //
  //     }, 5000);
  //
  //   }, 5000);
  // }

  main();

}
