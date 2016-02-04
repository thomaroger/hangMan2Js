const api = 'http://192.168.40.189:3000/words'

export class WordsService {

  constructor ($http) {
    this.$http = $http
  }

  getAll () {
    return this.$http.get(api)
      .then(response => response.data)
      .then(words => words.filter(word => word.word))
  }

  getAllUpperCase () {
    return this.getAll()
      .then(words =>
        words.map(word => Object.assign(word, {
          word: word.word.toUpperCase()
        }))
      )
  }

  add (word) {
    return this.$http.post(api, word)
  }

  remove (id) {
    return this.$http.delete(api + '/' + id)
  }
  
   getWord (id) {
    return this.$http.get(api+'/'+id)
      .then(function successCallback(response) {
        return response.data;
      });
    }
}

export function StarifyFilter () {
  return function (word = '', letters = []) {
    return word
      .split('')
      .reduce((acc, letter) => acc + (letters.indexOf(letter.toUpperCase()) !== -1 ? letter : '*') + ' ', '')
  }
}
