describe("Product rating", async () => {
it('Login into amazon', async ()=>{
    await browser.url("https://www.amazon.in/")
    await browser.$("//input[@id='twotabsearchtextbox']").setValue("iphone 13")
    await browser.$("//input[@id='nav-search-submit-button']").click()
    await browser.waitUntil(()=>browser.$("//span[text()='Apple iPhone 14 128GB (Product) RED']/parent::a/parent::h2/parent::div/following-sibling::div/div/span/span/a/i/span").isDisplayed(),
        {
            timeout : 5000,
            timeoutMsg : "text not displayed"
        })
    const ratingelement = await browser.$("//span[text()='Apple iPhone 14 128GB (Product) RED']/parent::a/parent::h2/parent::div/following-sibling::div/div/span/span/a/i/span")
    const text = ratingelement.getText()
    console.log(text);
});
})