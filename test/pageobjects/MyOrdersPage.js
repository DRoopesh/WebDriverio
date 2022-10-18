const BasePage = require("./BasePage")

class MyOrdersPage {

    get LastDeletebtn () {
        return $("//tbody//tr[last()]//i[@class='fa fa-trash-o']")
    }

    async  Handledeletepopup () {
        await browser.getAlertText()
        await browser.acceptAlert()
    }

    async VerifyMyOrderPageTitle() {
        const Myorderspagetext = await browser.getTitle()
        console.log(Myorderspagetext);
        expect(browser).toHaveTitleContaining("My Orders")
    }

}

module.exports = new MyOrdersPage()