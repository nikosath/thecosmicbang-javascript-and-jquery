function ex1() {
  'use strict';

  // var URLS = ['https://www.google.com', 'http://www.nationalgeographic.com', 'http://cnn.com', 'https://www.zsl.org', 'http://www.telegraph.co.uk/', 'http://www.go2africa.com/', 'http://www.animalplanet.com/', 'http://www.theguardian.com/', 'http://travel.usnews.com/', 'http://www.independent.co.uk/'];
  var URLS = ['http://1/', 'http://2/', 'http://3/', 'http://4/', 'http://5/', 'http://6/'];
  // var URLS = ['http://1/', 'http://2/'];

  function time() {
    var time = new Date();
    return (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
  }

  var tabs = {
    // holds all the windows we open
    tabGroup: [],
    open: function (url) {
      console.log(time() + ' open tab ' + url);
      this.tabGroup.push(window.open(url));
    },
    close: function (tab) {
      tab.close();
    },
    length: function () {
      return this.tabGroup.length;
    },
    // returns a group of tabs based on a condition
    filter: function (condition) {
      var filteredTabs = [];
      this.tabGroup.forEach(function (tab, idx) {
        if (condition(tab, idx)) {
          filteredTabs.push(tab);
        }
      });
      return filteredTabs;
    },
    openMany: function (urls, delay, fnChain) {
      delay = (delay === undefined) ? 0 : delay;
      fnChain = (fnChain === undefined) ? new FuncChain() : fnChain;
      // open the first with 0 delay
      fnChain.addFunc(this.open, 0, this, urls[0]);
      for (var i = 1; i < urls.length; i++) {
        fnChain.addFunc(this.open, delay, this, urls[i]);
      }
    },
    closeMany: function (tabsToClose, delay, fnChain) {
      delay = (delay === undefined) ? 0 : delay;
      fnChain = (fnChain === undefined) ? new FuncChain() : fnChain;
      // close the first with 0 delay
      fnChain.addFunc(this.close, 0, this, tabsToClose[0]);
      for (var j = 1; j < tabsToClose.length; j++) {
        fnChain.addFunc(this.close, 2000, this, tabsToClose[j]);
      }
    }

  };

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
    var fnChain = new FuncChain();
    fnChain.addFunc(function () {
      tabs.openMany(URLS, 2000, fnChain);

      fnChain.addFunc(function () {
        tabs.closeMany(selectTabs(), 2000, fnChain);

        fnChain.addFunc(function () {
          if (window.confirm('Start again?')) {
            main();
          }
        }, 0);

      }, 5000);

    }, 5000);
  }

  main();

}
