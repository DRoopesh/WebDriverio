const fs = require('fs')
var jsondata = JSON.parse(fs.readFileSync("./TestData/testData.json"))

const userLoginpage = require("../pageobjects/UserLoginpage")
const homepage = require("../pageobjects/HomePage")
const restaurantpage = require("../pageobjects/RestaurantsPage")
const pickyourfoodpage = require("../pageobjects/PickYourFoodPage")
const payandorderpage = require("../pageobjects/PayAndOrderPage")
const myorderspage = require("../pageobjects/MyOrdersPage")

describe ("Place Order from Restaurant", async () => {

    it('Navigate to login page',async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Food_Ordering_System/login.php")
        await userLoginpage.VerifyLoginPage()
    });

    jsondata.forEach(({username, password})=>{
        it('Login with user credentials', async () => {
            await userLoginpage.UserLoginAction(username, password)
            await homepage.WaituntilHomePageTextDisplay()
            await homepage.VerifyHomePageTitle()
        });
    })

    it('Select dish from Restaurant page', async () => {
        await homepage.RestaurantTab.click()
        await restaurantpage.VerifyRestaurantPageTitle()
        await restaurantpage.RestaurantMenubtn.click()
    });

    it('Add dish to cart and checkout', async () => {
        await pickyourfoodpage.AddtoCartbtn.click()
        await pickyourfoodpage.WaitUntilCheckoutbtnEnable()
        await pickyourfoodpage.CheckOutbtn.click()
        await payandorderpage.VerifyPayandOrderPageTitle()
    });

    it('Pay and Order Process', async function () {
        this.retries(3)
        await payandorderpage.OrderNowbtn.click()
        await payandorderpage.Handlepopups()
        await myorderspage.VerifyMyOrderPageTitle()
    });

    it('Logout of application', async () => {
        await userLoginpage.Logoutbtn.click()
        await userLoginpage.VerifyLoginPage()
    });
})
