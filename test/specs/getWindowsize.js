describe('Window size demonstration', async () => {
it('Get windowsize', async () => {
    console.log("Window size before maximizing :"+await browser.getWindowSize());
    await browser.maximizeWindow()
    await browser.pause(5000)
    console.log("Window size after maximizing :"+await browser.getWindowSize());
    await browser.setWindowSize(600, 700)
    await browser.pause(5000)
    console.log("Window size after setting :"+await browser.getWindowSize());
});

})