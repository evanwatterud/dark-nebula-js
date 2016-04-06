exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    if (str.search(/\d+/) != -1) {
      return true;
    } else {
      return false;
    }
  },

  containsRepeatingLetter : function(str) {
    if (str.search(/([a-zA-Z])\1{1,}/) != -1) {
      return true;
    } else {
      return false;
    }
  },

  endsWithVowel : function(str) {
    if (str.search(/[aeiou]$/i) != -1) {
      return true;
    } else {
      return false;
    }
  },

  captureThreeNumbers : function(str) {
    if ((str.match(/\d{3}/)) == null) {
      return false;
    } else {
      return str.match(/\d{3}/)[0];
    }
  },

  matchesPattern : function(str) {
    if (str.search(/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/) != -1) {
      return true;
    } else {
      return false;
    }
  },

  isUSD : function(str) {
    if (str.search(/^\$(((([0-9]{1,3},)?([0-9]{3},)*)([0-9]{3})*)|([0-9]{1,3}))(\.[0-9]{2})?$/) != -1) {
      return true;
    } else {
      return false;
    }
  }
};
