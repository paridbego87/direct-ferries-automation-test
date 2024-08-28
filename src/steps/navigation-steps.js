const { Given, When, Then } = require('@cucumber/cucumber');
const navigation = require('../methods/navigation-methods.js');

Given('I am on the homepage', async function () {
    await navigation.onHomepage();
});

Given('I am on the {string} homepage', async function (t, [domain]) {
    await navigation.onHomepage(domain);
});

Given('I am on the account page', async function (t, [domain]) {
    await navigation.onAccountPage(domain);
});
