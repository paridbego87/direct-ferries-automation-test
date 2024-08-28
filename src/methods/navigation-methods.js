const { Selector, t } = require('testcafe');

module.exports = {
    onHomepage: async function (domain = '.de') {
        await t.navigateTo(
            `https://www.directferries${domain}?dealfinderVersion=A`
        );

        if (domain !== '.co.uk') {
            await t.click(Selector('[data-cky-tag="accept-button"]'));
        }
    },
    onAccountPage: async function () {
        await t.navigateTo('https://account.directferries.com/?culture=en-GB');
    },
};
