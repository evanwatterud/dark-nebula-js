exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    // Optional Challenge
    obj['fn'] = fn;
    return obj.fn();
  },

  alterObjects : function(constructor, greeting) {
    // Optional Challenge
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    // Optional Challenge
    dataArray = [];
    for (var name in obj) {
      if (obj.hasOwnProperty(name)){
        dataArray.push(name + ": " + obj[name]);
      };
    };
    return dataArray;
  }
};
