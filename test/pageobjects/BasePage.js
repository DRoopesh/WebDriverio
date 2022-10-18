module.exports = class BasePage {

    open () {
        return browser.url(`http://rmgtestingserver/domain/Online_Food_Ordering_System/login.php`)
    }
}