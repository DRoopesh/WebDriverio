const fs = require('fs')
var jsondata = JSON.parse(fs.readFileSync("./TestData/testData.json"))

const userLoginpage = require("../pageobjects/UserLoginpage")
const homepage = require("../pageobjects/HomePage")
const pickyourfoodpage = require("../pageobjects/PickYourFoodPage")
const payandorderpage = require("../pageobjects/PayAndOrderPage")
const myorderspage = require("../pageobjects/MyOrdersPage")


describe ("OrderDishFromHomeAndDeleteOrder", async () => {

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

    it('Select dish from Home page', async () => {
        await homepage.HomeDishOrderbtn.click()
        await pickyourfoodpage.VerifyFoodPageTitle()
    });
    
    it('Add dish to cart and checkout', async function () {
        this.retries(3)
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

    it('Logout of User account', async () => {
        await userLoginpage.Logoutbtn.click()
        await userLoginpage.VerifyLoginPage()
    });

    jsondata.forEach(({username, password})=>{
        it('Login with user credentials', async () => {
            await userLoginpage.UserLoginAction(username, password)
            await homepage.WaituntilHomePageTextDisplay()
            await homepage.VerifyHomePageTitle()
        });
    })

    it('Go to My Orders', async () => {
        await homepage.MyordersTab.click()
        await myorderspage.VerifyMyOrderPageTitle()
        await myorderspage.LastDeletebtn.click()
        await myorderspage.Handledeletepopup()
        await myorderspage.VerifyMyOrderPageTitle()
    });

    it('Logout of application', async () => {
        await userLoginpage.Logoutbtn.click()
        await userLoginpage.VerifyLoginPage()
    });
})