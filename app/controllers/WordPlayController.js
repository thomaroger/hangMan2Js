export default class WordPlayController {

  constructor (WordsService, $routeParams, $rootScope) {
    this.WordsService = WordsService
    this.$routeParams = $routeParams
    this.word = ''
    this.letter = ''
    this.letters = []
    this._init($routeParams.id, $rootScope)
    this.try = 6;
  }
 
  _init (id, $rootScope) {
      $rootScope.$on('hangMan::KeyboardComponent', (evt, letter) => {
        this.proposeLetter(letter);
      });

    this.WordsService.getWord(id)
    .then( word => {
        this.word = word.word
      }
    );
  }

  addLetter () {
    const code = this.letter.toUpperCase().charCodeAt(0)
    this.letter = this.letter.toLowerCase()
    this.letters.push(this.letter.toUpperCase())

    if (code < 65 || code > 90) {
      this.letter = ""
      return
    }

    if (this.word.indexOf(this.letter) === -1) {
      this.try --
    }
    this.letter = ""
  }

  proposeLetter(id){
    this.letter = id.toUpperCase();
    var code = this.letter.charCodeAt(0)
    this.letter = this.letter.toLowerCase()
    this.letters.push(this.letter.toUpperCase())

    if (code < 65 || code > 90) {
      this.letter = ""
      return
    }
    if (this.word.indexOf(this.letter) === -1) {
      this.try --
    }
    this.letter = ""
  }

}