const BasePage = require("./BasePage")

class AdminOrdersPage {

    get AdminOrderspageText () {
        return $("//h4[text()='All Orders']");
    }

    get AdminOrderDeletebtn () {
        return $("//tbody//tr[last()]//td[text()='drv']//following::td[7]//i[@class='fa fa-trash-o']");
    }

    async WaitUntilAdminOrdersPageTextisDisplayed () {
        await browser.waitUntil(() => this.AdminOrderspageText.isDisplayed(),
        {
            timeout : 5000,
            timeoutMsg : "Admin dashboard text not displayed"
        })
        console.log(this.AdminOrderspageText.getText); 
    }

    async VerifyAdminOrdersPage () {
        await this.WaitUntilAdminOrdersPageTextisDisplayed()
        expect(browser).toHaveText("All Orders")
    }

    async WaitUntilDeletebtnisEnabled () {
        await browser.waitUntil(() => this.AdminOrderDeletebtn.isEnabled(),
        {
        timeout : 5000,
        timeoutMsg : "Element btn Not enabled"
        })
    }

    async HandleAlertinAdmin() {
        await browser.getAlertText()
        await browser.acceptAlert()
    }
}

module.exports = new AdminOrdersPage()