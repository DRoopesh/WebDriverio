const userLoginPage = require("../pageobjects/UserLoginpage");
const homepage = require("../pageobjects/HomePage");
const fs = require('fs')
let terms = JSON.parse(fs.readFileSync("./test/specs/TestData/testData.json"))

describe ("Place Order from Home", async () => {
    it('Navigate to login page',async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Food_Ordering_System/login.php")
        const Loginpagetext = await browser.getTitle()
        console.log(Loginpagetext);
        expect(browser).toHaveTitleContaining("Login")
    });

    terms.forEach(({username, password})=>{
    it('Login with user credentials', async () => {
        await userLoginPage.UserLoginAction(username, password)
        await homepage.WaituntilHomePageTextDisplay()
        await homepage.VerifyHomePageTitle()
        await userLoginPage.Logoutbtn.click()
    });
});
})