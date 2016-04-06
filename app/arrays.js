exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    while (!(arr.indexOf(item) == -1)) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(arrItem) { return arrItem == item }).length;
  },

  duplicates : function(arr) {
    var dupes = [];
    var sorted = arr.sort();
    sorted.forEach(function(item, index) {
      if (((index + 1) < sorted.length) && (sorted[index] == sorted[index + 1]) && !(dupes.includes(item))) {
        dupes.push(sorted[index]);
      }
    });
    return dupes;
  },

  square : function(arr) {
    arr.forEach(function(item, index) {
      arr[index] = Math.pow(item, 2);
    });
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var occurrences = [];
    arr.forEach(function(item, index) {
      if (arr[index] == target) {
        occurrences.push(index);
      }
    });
    return occurrences;
  }
};
