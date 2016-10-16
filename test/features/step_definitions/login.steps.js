
'use strict';

var expect = require('chai').expect;
var LoginPage = require('../../pageobjects/login.page');

module.exports = function () {
    
this.Given(/^User navigates to www\.jewellerymaker\.com$/, function () {
         LoginPage.open();
       });

  this.Given(/^Clicks on Login\/Register$/, function () {
    LoginPage.loginLink.click();
  });

  this.Given(/^Enters a valid email address "([^"]*)" in the Email address field$/, function (email) {
    LoginPage.username.setValue(email);
  });

  this.Given(/^Enters password: "([^"]*)" in the pasword field$/, function (password) {
    LoginPage.password.setValue(password);
  });

  this.When(/^Clicks on Sign in$/, function () {    
    LoginPage.signIn.click(); 
  });

  this.Then(/^User is successfully logged in$/, function () {
     LoginPage.accountLink.waitForExist(15000);
     browser.reload();
     //expect(LoginPage.welcomeText.getText()).to.have.string('Welcome back,');
  });

  this.Given(/^Enters invalid password: "([^"]*)" in the pasword field$/, function (password) {
    LoginPage.password.setValue(password);
  });

  this.Then(/^User can not log in with an error message "([^"]*)"$/, function (errorMessage) {
     LoginPage.errorMessage.waitForExist(5000);
     expect(LoginPage.errorMessage.getText()).to.be.equal(errorMessage);
     browser.reload();
  });

  this.Given(/^Enters a invalid email address "([^"]*)" in the Email address field$/, function (email) {
    LoginPage.username.setValue(email);
  });

};
