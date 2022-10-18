const BasePage = require("./BasePage");


class PickYourFoodPage {

    get AddtoCartbtn() {
        return $(`//a[text()='Lobster Thermidor']/ancestor::div[@class='food-item']//input[@type='submit']`);
    }

    get CheckOutbtn() {
        return $("//a[text()='Checkout']");
    }

    async VerifyFoodPageTitle() {
        const Dishespagetext = await browser.getTitle()
        console.log(Dishespagetext);
        expect(browser).toHaveTitleContaining("Dishes")
    }

    async WaitUntilCheckoutbtnEnable() {
        await browser.waitUntil(()=>this.CheckOutbtn.isEnabled(),
        {
        timeout : 5000,
        timeoutMsg : "Checkout btn Not enabled"
        })
    }
}

module.exports = new PickYourFoodPage()