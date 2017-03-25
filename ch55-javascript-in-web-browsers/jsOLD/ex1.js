function ex1() {
  'use strict';

  // var URLS = ['https://www.google.com', 'http://www.nationalgeographic.com', 'http://cnn.com', 'https://www.zsl.org', 'http://www.telegraph.co.uk/', 'http://www.go2africa.com/', 'http://www.animalplanet.com/', 'http://www.theguardian.com/', 'http://travel.usnews.com/', 'http://www.independent.co.uk/'];
  // var URLS = ['http://www.nationalgeographic.com', 'http://cnn.com', 'https://www.zsl.org'];

  // var URLS = ['http://1/','http://2/'];
  var URLS = ['http://1/'];
  // var URLS = ['http://1/', 'http://2/', 'http://3/', 'http://4/', 'http://5/', 'http://6/'];
  // var URLS = ['http://127.0.0.1:8080/', 'http://127.0.0.1:8080/', 'http://127.0.0.1:8080/', 'http://127.0.0.1:8080/', 'http://127.0.0.1:8080/', 'http://127.0.0.1:8080/', 'http://127.0.0.1:8080/', 'http://127.0.0.1:8080/'];
  // var URLS = ['http://127.0.0.1:8080/', 'http://127.0.0.1:8080/', 'http://127.0.0.1:8080/','http://127.0.0.1:8080/'];
  // var urls = ['http://127.0.0.1:8080/', 'http://127.0.0.1:8080/', 'http://127.0.0.1:8080/'];

  var tabs = {
    tabGroup: [],

    add: function (url) {
      console.log(time() + ' add tab ' + url);
      this.tabGroup.push(window.open(url));
      // console.log(time() + ' tab name ' + this.tabGroup[0].name);

    },
    removeByIdx: function (index) {
      var tab = this.tabGroup.splice(index, 1)[0].close();
      console.log(time() + ' remove tab with idx:' + index);
      // tab.close();
    },
    length: function () {
      return this.tabGroup.length;
    },
    addMany: function (urls, nextFunction) {
      // console.log('nextFunction ' + nextFunction);
      var tabs = this;
      tabs.add(urls[0]);
      urls = urls.slice(1);
      console.log(urls.length);
      if (urls.length > 0) {
        setTimeout(function () {
          console.log(urls.length);
          if (urls.length === 1) {
            // Add the last url
            tabs.add(urls[0]);
            // If nextFunction was provided, call it
            // console.log('nextFunction ' + nextFunction);
            if (nextFunction) {
              nextFunction();
            }
          } else {
            tabs.addMany(urls, nextFunction);
          }
        }, 1000);
      }
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
    removeTweakedIndices: function (tabIndices) {
      var tabs = this;
      tabs.removeByIdx(tabIndices[0]);
      tabIndices = tabIndices.slice(1);

      if (tabIndices.length > 0) {
        setTimeout(function () {
          if (tabIndices.length === 1) {
            // Remove the last url
            tabs.removeByIdx(tabIndices[0]);

          } else {
            tabs.removeTweakedIndices(tabIndices);
          }
        }, 1000);
      }
    },
    removeMany: function (tabIndices) {
      this.removeTweakedIndices(this.tweakIndices(tabIndices));
    }

  };

  function time() {
    var time = new Date();
    return (time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());
  }

  function removeEvenOdd() {
    var tabIndicesToRemove = [];
    for (var base = 1; base >= 0; base -= 1) {
      for (var idx = base; idx < tabs.length(); idx += 2) {
        tabIndicesToRemove.push(idx);
      }
    }
    // tabIndicesToRemove = [3,2,7,1,4,6,5,0];
    console.log('Indices before tweaking: ' + tabIndicesToRemove);

    setTimeout(function () {
      tabs.removeMany(tabIndicesToRemove);
    }, 1000);

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

  // function startGame() {
  //   tabs.addMany(URLS, removeEvenOdd);
  // }
  // do {
  //   console.log(time() + ' before addMany');
  //   setTimeout(startGame, 1000);
  // } while (window.confirm('One more time?'));

  // -----------------
  // function main() {
  //   var chain = funcChain(function () {
  //     chain = chain.addFunc(tabs.add, 0, tabs, URLS[0]);
  //     for (var i = 1; i < URLS.length; i++) {
  //       chain = chain.addFunc(tabs.add, 2000, tabs, URLS[i]);
  //     }
  //
  //     chain = chain.addFunc(function () {
  //       // tabIndicesToRemove = tabs.tweakIndices([3,2,7,1,4,6,5,0]);
  //       // var tabIndicesToRemove = tabs.tweakIndices([0,1,2]);
  //       var tabIndicesToRemove = tabs.tweakIndices(getEvenOddIndices(tabs));
  //       // chain = chain.addFunc(tabs.removeMany, 5000, tabIndicesToRemove);
  //       chain = chain.addFunc(tabs.removeByIdx, 0, tabs, tabIndicesToRemove[0]);
  //       for (var j = 1; j < tabIndicesToRemove.length; j++) {
  //         chain = chain.addFunc(tabs.removeByIdx, 2000, tabs, tabIndicesToRemove[j]);
  //       }
  //
  //       chain = chain.addFunc(function () {
  //         if (window.confirm('One more time?')) {
  //           main();
  //         }
  //       }, 0);
  //
  //     }, 5000);
  //
  //   }, 5000);
  // }
  function main() {
    var chain = new FuncChain();
    chain.addFunc(function () {
      chain.addFunc(tabs.add, 0, tabs, URLS[0]);
      for (var i = 1; i < URLS.length; i++) {
        chain.addFunc(tabs.add, 2000, tabs, URLS[i]);
      }

      chain.addFunc(function () {
        var tabIndicesToRemove = tabs.tweakIndices(getEvenOddIndices(tabs));
        // chain.addFunc(tabs.removeMany, 5000, tabIndicesToRemove);
        chain.addFunc(tabs.removeByIdx, 0, tabs, tabIndicesToRemove[0]);
        for (var j = 1; j < tabIndicesToRemove.length; j++) {
          chain.addFunc(tabs.removeByIdx, 2000, tabs, tabIndicesToRemove[j]);
        }

        chain.addFunc(function () {
          // var response = alert('One more time?');
          // alert('One more');
          // console.log('heloo');
          if (window.confirm('Go one more time?')) {
            main();
          }
        }, 0);

      }, 5000);

    }, 5000);
  }

  main();

}
