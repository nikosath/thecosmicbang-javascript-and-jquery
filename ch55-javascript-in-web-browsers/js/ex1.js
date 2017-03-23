function ex1() {
  'use strict';

  var urls = ['https://www.google.com', 'http://www.nationalgeographic.com', 'http://cnn.com', 'https://www.zsl.org', 'http://www.telegraph.co.uk/', 'http://www.go2africa.com/', 'http://www.animalplanet.com/', 'http://www.theguardian.com/', 'http://travel.usnews.com/', 'http://www.independent.co.uk/'];

  function UrlTab(url, tab) {
    return {
      url: url,
      tab: tab
    };
  }

  var urlsAndTabs = [];
  function gameOfTabs() {
    urls.forEach(function (url) {
      urlsAndTabs.push(UrlTab(url, window.open(url)));
      setTimeout(function () {}, 2000);
    });

    function closeTabs() {
      for (var phase = 1; phase >= 0 ; phase -= 1) {
        for (var i = phase; i < urlsAndTabs.length; i += 2) {
          urlsAndTabs[i].tab.close();
          setTimeout(function () {}, 2000);
        }
      }
    }

    setTimeout(closeTabs, 5000);
  }
  // console.log(f);
  window.setTimeout(gameOfTabs, 5000);

  // Output for index.html
  var ex1 = {};

  ex1.f = f;
  ex1.getHtmlOutput = function () {
    return '<p>Ex1' +
      '<br>str: ' + str +
      '<br>str2: ' + str2 +
      '<br>str3: ' + str3 +
      '<br>concatAndUppCase(str, str2): ' + concatAndUppCase(str, str2) +
      '<br>concatAndUppCase(str2, str): ' + concatAndUppCase(str2, str) +
      '<br>concatAndUppCase(str3): ' + concatAndUppCase(str3);
  };

  return ex1;
}
