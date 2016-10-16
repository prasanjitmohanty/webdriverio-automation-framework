var page = require('./page')

var loginPage = Object.create(page, {
    /**
     * define elements
     */
    username: { get: function () { return browser.element('#ContentPlaceHolder1_txtRetCustEmail'); } },
    password: { get: function () { return browser.element('#ContentPlaceHolder1_txtRetCustPassword'); } },
    loginLink:     { get: function () { return browser.element('#aLogin'); } },
    signIn:    { get: function () { return browser.element('#ContentPlaceHolder1_btnSignIn'); } },
    accountLink:    { get: function () { return browser.element('#aAccount'); } },
    errorMessage:    { get: function () { return browser.element('#ContentPlaceHolder1_lblErrorMessage'); } },
    //ContentPlaceHolder1_lblErrorMessage
    //popup-menu__text

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        page.open.call(this, ' ');
        //login.aspx
    } }
});

module.exports = loginPage