function ex1() {
  'use strict';

  // v/ar urls = ['https://www.google.com', 'http://www.nationalgeographic.com', 'http://cnn.com', 'https://www.zsl.org', 'http://www.telegraph.co.uk/', 'http://www.go2africa.com/', 'http://www.animalplanet.com/', 'http://www.theguardian.com/', 'http://travel.usnews.com/', 'http://www.independent.co.uk/'];

  var urls = ['http://127.0.0.1:8080/', 'http://127.0.0.1:8080/', 'http://127.0.0.1:8080/'];

  var tabs = {
    group: [],
    add: function (url) {
      this.group.push(window.open(url));
    },
    remove: function (idx) {
      this.group.splice(idx, 1)[0].close();
    },
    length: function () {
      return this.group.length;
    }
  };

  function createTabs(urls, tabs) {
    tabs.add(urls.shift());
    if (urls.length > 0) {
      setTimeout(function () {
        if (urls.length === 1) {
          // Add the last url
          tabs.add(urls[0]);
          // Start the removal proccess, with the 2nd tab
          console.log(new Date());
          // setTimeout(destroyTabs(tabs, 1), 10000);
          setTimeout(destroyTabs, 5000, tabs, 1);
          // console.log(new Date());
          // setTimeout(function () {
          //   console.log(new Date());
          // }, 5000);

        } else {
          // tabs.add(urls.shift());
          createTabs(urls, tabs);
        }
      }, 2000);
    }
  }

  function destroyTabs(tabs, idx) {
    console.log(new Date());

    if (idx < tabs.length()) {
      tabs.remove(idx);
      idx += 2;
    }
    if (tabs.length() > 0) {
      setTimeout(function () {
        if (tabs.length() === 1) {
          // Remove last tab
          tabs.remove(0);
        } else if (idx >= tabs.length()) {
          // Continue the removal proccess, with the 1st tab
          destroyTabs(tabs, 0);
        } else {
          // tabs.remove(idx);
          destroyTabs(tabs, idx);
        }
      }, 2000);
    }
  }

  // function destroyTabs2(tabs, idx) {
  //   setTimeout(function () {
  //     if (tabs.length() === 1) {
  //       // Remove last tab
  //       tabs.remove(0);
  //     } else if (idx >= tabs.length()) {
  //       // Continue the removal proccess, with the 1st tab
  //       destroyTabs(tabs, 0);
  //     } else {
  //       tabs.remove(idx);
  //       destroyTabs(tabs, idx + 2);
  //     }
  //   }, 2000);
  // }

  function startGameOfTabs() {
    // Open the first tab without delay
    // tabs.add(urls[0]);
    // Open the rest tabs with 2s itervals
    // createTabs(urls.slice(1));
    // createTabs(urls, tabs);

    // for (var i = 1; i < urls.length; i++) {
    //   setTimeout(tabs.add(urls[i]), 2000);
    // }

    // Close the tabs with 2s itervals
    // setTimeout(function closeTabs() {
    //   for (var startIdx = 1; startIdx >= 0; startIdx -= 1) {
    //     for (var i = startIdx; i < tabs.length(); i += 2) {
    //       setTimeout(tabs.remove(i), 2000);
    //     }
    //   }
    // }, 5000);
  }

  setTimeout(createTabs(urls, tabs), 5000);
  // do {
  // } while (window.confirm('One more time?'));
}
