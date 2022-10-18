const PrimePage = require("../pageobjects/primepage");
// const primeloginPage = require("../pageobjects/primelogin.page");
const primesecurepage = require("../pageobjects/primesecurepage");

describe (PrimeLogintest, async ()=>{
    it('user sign in with proper id and password', async () => {
        await PrimePage.open();

        await primesignin.signin ('teju.sweety1@gmail.com', 'rooptej8589');
        await expect(primesecurepage.flashAlert).toBeExisting();
        await expect(primesecurepage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
    });
});