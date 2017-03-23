function ex1() {
  'use strict';

  // v/ar urls = ['https://www.google.com', 'http://www.nationalgeographic.com', 'http://cnn.com', 'https://www.zsl.org', 'http://www.telegraph.co.uk/', 'http://www.go2africa.com/', 'http://www.animalplanet.com/', 'http://www.theguardian.com/', 'http://travel.usnews.com/', 'http://www.independent.co.uk/'];

  var urls = ['http://127.0.0.1:8080/', 'http://127.0.0.1:8080/', 'http://127.0.0.1:8080/'];

  var Tabs = {
    group: [],
    add: function (url) {
      this.group.push(window.open(url));
    },
    remove: function (idx) {
      this.group.splice(idx, 1)[0].close();
    }
  };



  function schedule(urls) {
    setTimeout(function () {
      if (idx === urls.length - 1) {
        Tabs.add(urls[0]);
      } else {
        schedule(idx + 1);
      }
    }, 2000);
  }

  function createTabs(urls) {
    setTimeout(function () {
      if (urls.length === 1) {
        Tabs.add(urls[0]);
      } else {
        Tabs.add(urls.unshift());
        createTabs(urls);
      }
    }, 2000);
  }

  function startGameOfTabs() {
    // Open the first tab without delay
    Tabs.add(urls[0]);
    // Open the rest tabs with 2s itervals
    for (var i = 1; i < urls.length; i++) {
      setTimeout(Tabs.add(urls[i]), 2000);
    }

    // Close the tabs with 2s itervals
    setTimeout(function closeTabs() {
      for (var startIdx = 1; startIdx >= 0; startIdx -= 1) {
        for (var i = startIdx; i < Tabs.group.length; i += 2) {
          setTimeout(Tabs.remove(i), 2000);
        }
      }
    }, 5000);
  }

  do {
    setTimeout(startGameOfTabs, 5000);
  } while (window.confirm('One more time?'));
}
