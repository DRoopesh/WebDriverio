const BasePage = require("./BasePage")

class AdminHomePage {

get Adminusername () {
    return $("[name='username']");
}

get Adminpassword () {
    return $("[name='password']");
}

get Adminloginbtn () {
    return $("[value='Login']");
}

async AdminLoginAction (username, password) {
    await this.Adminusername.setValue(username)
    await this.Adminpassword.setValue(password)
    await this.Adminloginbtn.click()
}

async VerifyAdminLoginPageTitle () {
    const Adminloginpagetext = await browser.getTitle()
    console.log(Adminloginpagetext);
    expect(browser).toHaveTitleContaining("Admin Login")
}
}

module.exports = new AdminHomePage()