export default class WordNewController {

  constructor (WordsService, $location, $http) {
    this.WordsService = WordsService
    this.$location = $location
    this.$http = $http
    this.words = {}
  }

  addRandom () {
    this.$http.get('http://randomword.setgetgo.com/get.php')
      .then(({data}) => {
        return this.WordsService.add({
          word: data,
          email: 't@t'
        })
      })
  }

  add () {
    if (this.newWordForm.$invalid) return
    this.WordsService.add(this.word)
      .then(() => {
        this.$location.path('/')
      })
  }

}
