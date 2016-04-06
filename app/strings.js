exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {

  reduceString: function(str, amount) {
    var newCharacters = [];
    var characters = str.split('');
    var counter = 0;
    characters.forEach(function(character, index) {
      if (characters[index - 1] == character) {
        counter++;
      } else {
        counter = 0;
      }
      if (counter < amount) {
        newCharacters.push(character);
      }
    });
    return newCharacters.join('');
  },

  wordWrap: function(str, cols) {
    var wrapStr = [];
    var words = str.split(' ');
    var counter = 0;
    words.forEach(function(word, index) {
      if (!(words[index + 1] == undefined) && ((words[index + 1].length + (word.length + 1) + counter) > cols)) {
        wrapStr.push(word + "\n");
        counter = 0;
      } else if (!(words[index + 1] == undefined)) {
        wrapStr.push(word + " ");
        counter += word.length + 1;
      } else {
        wrapStr.push(word);
      }
    });
    return wrapStr.join('');
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }

};
