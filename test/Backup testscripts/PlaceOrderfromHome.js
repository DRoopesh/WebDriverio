const BasePage = require("../pageobjects/BasePage");
const HomePage = require("../pageobjects/HomePage");
const UserLoginpage = require("../pageobjects/UserLoginpage");

describe("Place Order from Home", async () => {

    it('Navigate to login page',async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Food_Ordering_System/login.php")
    
        const Loginpagetext = await browser.getTitle()
        console.log(Loginpagetext);
        expect(browser).toHaveTitleContaining("Login")
    });

    it('Login with user credentials', async () => {
        await UserLoginpage.Username.setValue("drv")
        await UserLoginpage.UserPassword.setValue("drv469")
        await UserLoginpage.UserLoginbtn.click()
        await browser.waitUntil(()=>HomePage.HomepageText.isDisplayed(),
        {
            timeout : 5000,
            timeoutMsg : "text not displayed"
        })
        const Homepagetext = await browser.getTitle()
        console.log(Homepagetext);
        expect(browser).toHaveTitleContaining("Home")
    });

    it('Select dish from Home page', async () => {
        const HomedishOrderbtn = await browser.$("//a[text()='Lobster Thermidor']/ancestor::div[@class='content']//div/following-sibling::div/a[@class='btn theme-btn-dash pull-right']")
        HomedishOrderbtn.click()
        const Dishespagetext = await browser.getTitle()
        console.log(Dishespagetext);
        expect(browser).toHaveTitleContaining("Dishes")
    });

    it('Add dish to cart and checkout', async () => {
        await browser.$("//a[contains(text(),'Lobster Thermidor')]/ancestor::div[@class='food-item']//input[@type='submit']").click()
        await browser.waitUntil(()=>browser.$("//a[text()='Checkout']").isEnabled(),
        {
        timeout : 5000,
        timeoutMsg : "Checkout btn Not enabled"
        })
        const Checkoutbtn = await browser.$("//a[text()='Checkout']")
        Checkoutbtn.click()
        const Checkoutpagetext = await browser.getTitle()
        console.log(Checkoutpagetext);
        expect(browser).toHaveTitleContaining("Checkout")
    });

    it('Pay and Order Process', async () => {
        const Ordernowbtn = await browser.$("//input[@value='Order Now']")
        Ordernowbtn.click()
        const firstalerttext = await browser.getAlertText()
        console.log(firstalerttext);
        await browser.acceptAlert()
        const secondalerttext = await browser.getAlertText()
        console.log(secondalerttext);
        await browser.acceptAlert()
        const Myorderspagetext = await browser.getTitle()
        console.log(Myorderspagetext);
        expect(browser).toHaveTitleContaining("My Orders")
    });

    it('Logout of application', async () => {
        await browser.$("//a[text()='Logout']").click()
        const Logoutlogintext = await browser.getTitle()
        console.log(Logoutlogintext);
        expect(browser).toHaveTitleContaining("Login")
    });
})