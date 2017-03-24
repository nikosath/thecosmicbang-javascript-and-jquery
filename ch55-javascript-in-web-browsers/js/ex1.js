function ex1() {
  'use strict';

  // v/ar urls = ['https://www.google.com', 'http://www.nationalgeographic.com', 'http://cnn.com', 'https://www.zsl.org', 'http://www.telegraph.co.uk/', 'http://www.go2africa.com/', 'http://www.animalplanet.com/', 'http://www.theguardian.com/', 'http://travel.usnews.com/', 'http://www.independent.co.uk/'];

  // var urls = ['http://127.0.0.1:8080/'];
  var urls = ['http://127.0.0.1:8080/', 'http://127.0.0.1:8080/'];
  // var urls = ['http://127.0.0.1:8080/', 'http://127.0.0.1:8080/', 'http://127.0.0.1:8080/'];

  var tabs = {
    tabGroup: [],
    // getTab: function (index) {
    //   return this.tabGroup[index];
    // },

    // Mappings between the perceived position of every tab and its actual index in tabGroup
    PosToIdx: [],

    // storeIdx: function (index) {
    //   this.PosToIdx.push(index);
    // },
    push: function (url) {
      this.tabGroup.push(window.open(url));
      this.PosToIdx.push(this.PosToIdx.length);
    },
    // PosToIdx: function (id) {
    //   return PosToIdx[id];
    // },
    adjustIndices: function (posToRemove) {
      this.PosToIdx[posToRemove] = null;
      var offset = 1;
      for (var i = posToRemove + 1; i < this.PosToIdx.length; i++) {
        this.PosToIdx[posToRemove] -= offset;
        offset -= 1;
      }
    },
    // Remove by perceived position
    removeByPosition: function (pos) {
      var index = this.PosToIdx[pos];
      this.tabGroup.splice(index, 1)[0].close();
      this.adjustIndices(pos);
    },
    // removeByIdx: function (index) {
    //   this.tabGroup.splice(index, 1)[0].close();
    // },
    // removeByTab: function (tab) {
    //   this.tabGroup.splice(index, 1)[0].close();
    // },
    length: function () {
      return this.tabGroup.length;
    },
    addMany: function (urls) {
      var tabs = this;
      tabs.push(urls[0]);
      urls = urls.slice(1);
      if (urls.length > 0) {
        setTimeout(function () {
          if (urls.length === 1) {
            // Add the last url
            tabs.push(urls[0]);
            // tabs.push(urls.shift());

            // Start the removal proccess, with the 2nd tab
            // setTimeout(destroyTabs, 5000, tabs, 1);
          } else {
            tabs.addMany(urls);
          }
        }, 2000);
      }
    },
    removeMany: function (tabPositions) {
      var tabs = this;
      tabs.removeByPosition(tabPositions[0]);
      tabPositions = tabPositions.slice(1);

      if (tabPositions.length > 0) {
        setTimeout(function () {
          if (tabPositions.length === 1) {
            // Add the last url
            tabs.removeByPosition(tabPositions[0]);
            // tabs.push(tabPositions.shift());

            // Start the removal proccess, with the 2nd tab
            // setTimeout(destroyTabs, 5000, tabs, 1);
          } else {
            tabs.removeMany(tabPositions);
          }
        }, 2000);
      }

    }
    // removeMany3: function (sequence, offset) {
    //   var tabs = this;
    //   offset = (offset === undefined) ? 0 : offset;
    //   tabs.removeByIdx(sequence[0] - offset);
    //   sequence = sequence.slice(1);
    //
    //   if (sequence.length > 0) {
    //     setTimeout(function () {
    //       if (sequence.length === 1) {
    //         // Add the last url
    //         tabs.removeByIdx(sequence[0]);
    //         // tabs.push(sequence.shift());
    //
    //         // Start the removal proccess, with the 2nd tab
    //         // setTimeout(destroyTabs, 5000, tabs, 1);
    //       } else {
    //         tabs.removeMany(sequence);
    //       }
    //     }, 2000);
    //   }
    //
    // }
    // removeMany2: function (sequence) {
    //
    //   if (index < this.length()) {
    //     this.removeByIdx(index);
    //     index += 2;
    //   }
    //
    //   if (this.length() > 0) {
    //     setTimeout(function () {
    //       if (this.length() === 1) {
    //         // Remove last tab
    //         this.removeByIdx(0);
    //       } else if (index >= this.length()) {
    //         // Continue the removal proccess, with the 1st tab
    //         this.removeMany(this, 0);
    //       } else {
    //         // this.removeByIdx(index);
    //         this.removeMany(sequence);
    //       }
    //     }, 2000);
    //   }
    //
    // }
  };

  // tabs.addMany = function addMany (urls) {
  //   this.push(urls[0]);
  //   urls = urls.slice(1);
  //   if (urls.length > 0) {
  //     setTimeout(function () {
  //       if (urls.length === 1) {
  //         // Add the last url
  //         this.push(urls[0]);
  //         // this.push(urls.shift());
  //
  //         // Start the removal proccess, with the 2nd tab
  //         // setTimeout(destroyTabs, 5000, this, 1);
  //       } else {
  //         this.addMany(urls);
  //       }
  //     }, 2000);
  //   }
  // };

  function debug() {
    console.log(new Date());

  }

  // function createTabs2(urls, tabs) {
  //   tabs.push(urls[0]);
  //   urls = urls.slice(1);
  //   if (urls.length > 0) {
  //     setTimeout(function () {
  //       if (urls.length === 1) {
  //         // Add the last url
  //         tabs.push(urls[0]);
  //         // tabs.push(urls.shift());
  //
  //         // Start the removal proccess, with the 2nd tab
  //         // setTimeout(destroyTabs, 5000, tabs, 1);
  //       } else {
  //         addMany(urls, tabs);
  //       }
  //     }, 2000);
  //   }
  // }

  setTimeout(function () {
    tabs.addMany(urls);

    var tabPositionsForRemoval = [];
    for (var base = 1; base >= 0; base -= 1) {
      for (var idx = base; idx < tabs.length(); idx += 2) {
        tabPositionsForRemoval.push(idx);
      }
    }
    // debug();
    // setTimeout(debug, 5000);
    setTimeout(function () {
      tabs.removeMany(tabPositionsForRemoval);
    }, 5000);
    // setTimeout(tabs.removeMany.call(tabs,  tabPositionsForRemoval), 5000);
  }, 5000);
  // do {
  // } while (window.confirm('One more time?'));
}
