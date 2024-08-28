const { Given, When, Then } = require('@cucumber/cucumber');
const accountPage = require('../methods/account-page-methods.js');

Then('I see the login form', async function () {
    await accountPage.loginFormPresent();
});

Then('I input incorrect login details', async function () {
    await accountPage.enterIncorrectLoginDetails();
});

Then('I see a booking reference error', async function () {
    await accountPage.bookingReferenceErrorPresent();
});
