const BasePage = require("./BasePage");


class PayAndOrderPage {

    get OrderNowbtn () {
        return $(`//input[@value='Order Now']`);
    }

    async VerifyPayandOrderPageTitle() {
        const Checkoutpagetext = await browser.getTitle()
        console.log(Checkoutpagetext);
        expect(browser).toHaveTitleContaining("Checkout")
    }

    async Handlepopups() {
        const firstalerttext = await browser.getAlertText()
        console.log(firstalerttext);
        await browser.acceptAlert()
        const secondalerttext = await browser.getAlertText()
        console.log(secondalerttext);
        await browser.acceptAlert()
    }
}

module.exports = new PayAndOrderPage()