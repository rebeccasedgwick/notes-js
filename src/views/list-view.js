(function (exports) {
  function ListView(list) {
    this.list = list
  }

  ListView.prototype.htmlList = function() {
    var html = ''
    this.list.all().forEach(function (n) {
      html += `<li>${n.getText().slice(0, 20)}</li>`
    })
    return `<ul>${html}</ul>`
  }
  exports.ListView = ListView
})(this)
