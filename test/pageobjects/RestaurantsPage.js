const BasePage = require("./BasePage");

class RestaurantsPage {

    get RestaurantMenubtn () {
        return $("//a[contains(text(),'North Street Tavern')]");
}
    get RestaurantText () {
        return $("a=Eataly");
    }

    async VerifyRestaurantPageTitle() {
        console.log(await browser.getTitle());
        expect(browser).toHaveTitleContaining("Restaurants")
    }
}

module.exports = new RestaurantsPage()