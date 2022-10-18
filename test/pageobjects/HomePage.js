const BasePage = require('./BasePage');


class HomePage {

    get HomepageText ()  {
    return $("//h2[text()='Popular Dishes of the Month']");
    }

    get HomeDishOrderbtn () {
    return $("//a[text()='Lobster Thermidor']/ancestor::div[@class='content']//div/following-sibling::div/a[@class='btn theme-btn-dash pull-right']");
    }

    get RestaurantTab () {
        return $("=Restaurants");
    }

    get MyordersTab () {
        return $("//a[text()='My Orders']")
    }

    async WaituntilHomePageTextDisplay() {
        await browser.waitUntil(()=>this.HomepageText.isDisplayed(),
        {
            timeout : 5000,
            timeoutMsg : "text not displayed"
        })
    }

    async VerifyHomePageTitle() {
        const Homepagetext = await browser.getTitle()
        console.log(Homepagetext);
        expect(browser).toHaveTitleContaining("Home")
    }
}

module.exports = new HomePage()
