const BasePage = require("./BasePage");

class UserLoginPage {
    get Username () {
        return $("[name='username']");
    }
    get UserPassword () {
        return $("[name='password']");
    }

    get UserLoginbtn () {
        return $("[id='buttn']");
    }

    get Logoutbtn() {
        return $("//a[text()='Logout']");
    }

    async UserLoginAction (username, password) {
        await this.Username.setValue(username)
        await this.UserPassword.setValue(password)
        await this.UserLoginbtn.click()
    }

    async VerifyLoginPage () {
        const Loginpagetext = await browser.getTitle()
        console.log(Loginpagetext);
        expect(browser).toHaveTitleContaining("Login")
    }
}

module.exports = new UserLoginPage()