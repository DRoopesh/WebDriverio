const BasePage = require("./BasePage")

class AdminHomePage {

    get DashboardText () {
        return $("//h4[text()='Admin Dashboard']");
    }

    get Ordersbtn () {
        return $("//a[@href='all_orders.php']");
    }

    get AdminProfilebtn () {
        return $("//img[@class='profile-pic']");
    }

    get AdminLogoutbtn () {
        return $("//a[@href='logout.php']");
    }

    async WaitUntilDashboardTextisDisplayed () {
        await browser.waitUntil(() =>this.DashboardText.isDisplayed(),
        {
            timeout : 5000,
            timeoutMsg : "Admin dashboard text not displayed"
        })
    }

    async VerifyAdminHomePageTitle () {
        this.WaitUntilDashboardTextisDisplayed()
        const AdminHomepagetext = await browser.getTitle()
        console.log(AdminHomepagetext);
        expect(browser).toHaveTitleContaining("Admin Panel")
    }

    async AdminLogoutAction () {
        await this.AdminProfilebtn.click()
        await this.AdminLogoutbtn.click()
    }
}

module.exports = new AdminHomePage()