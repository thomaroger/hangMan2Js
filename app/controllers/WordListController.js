import _ from 'lodash'

let del = null

export default class WordListController {

  constructor (WordsService, $timeout) {
    this.WordsService = WordsService
    this.$timeout = $timeout
    this._init()
  }

  remove (id) {
    var words = _.clone(this.words)
    this.words = _.reject(this.words, { id })
    this.showUndo = true

    del = this.$timeout(() => {
      this.WordsService.remove(id)
        .catch(function () {
          this.words = words
        }.bind(this))
      this.showUndo = false
    }, 2000)
  }

  undo () {
    if (del) {
      this.$timeout.cancel(del)
      this.showUndo = false
    }
  }

  _init () {
    this.WordsService.getAllUpperCase()
      .then(words => {
        this.words = words
      })
  }
}
