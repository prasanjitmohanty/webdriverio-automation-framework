function Page () {
}

Page.prototype.open = function (path) {
    browser.url('http://www.jewellerymaker.com/' + path)
}

module.exports = new Page()