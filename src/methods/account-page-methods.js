const { Selector, t } = require('testcafe');

module.exports = {
    loginFormPresent: async function () {
        await t.expect(Selector('.df-login').exists).ok();
    },
    enterIncorrectLoginDetails: async function () {
        await t.typeText(Selector('input[name=Email]'), 'parid@gmail.com');
        await t.typeText(Selector('input[name=BookingReference]'), 'DFP123456');
        await t.click(Selector('button[type=submit]'));
    },
    bookingReferenceErrorPresent: async function () {
        await t.expect(Selector('#BookingReference-error').exists).ok();
    },
};
