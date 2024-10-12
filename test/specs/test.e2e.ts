import GooglePage from '../pageobjects/google.page.ts'
import MoroSystemsPage from '../pageobjects/morosystems.page.ts'
import {browser} from "@wdio/globals";

describe('MoroSystems test example', () => {
    const googlePage = new GooglePage()
    const moroSystemsPage = new MoroSystemsPage()

    beforeEach(async ()=>{
        await browser.setWindowSize(1500, 1000)
        await browser.setTimeout({ 'pageLoad': 10000 })
    })

    it('Google MoroSystems and navigate to career page', async () => {
        //Google
        await googlePage.openPage()

        // await googlePage.denyCookiesButton().click()
        await googlePage.inputSearch().setValue('MoroSystems CZ')
        await googlePage.searchButton().click()

        await expect(googlePage.moroSystemsLink()).toExist()
        await googlePage.moroSystemsLink().click()

        //MoroSystems
        // await moroSystemsPage.denyCookies().click()
        await moroSystemsPage.careerLink().waitForClickable()
        await moroSystemsPage.careerLink().click()
        await expect(browser).toHaveUrl('https://www.morosystems.cz/kariera/')
        await expect(moroSystemsPage.openPositionsButton()).toExist()

    })
})

