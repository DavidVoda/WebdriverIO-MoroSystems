import {$, browser} from '@wdio/globals'

export default class GooglePage {
    denyCookiesButton = () => $('button[id="W0wltc"]')
    inputSearch = () => $('textarea[aria-controls="Alh6id"]')
    searchButton = () => $('input[name="btnK"]')

    moroSystemsLink = () => $('a[href="https://www.morosystems.cz/"]')

    openPage = () => {
        return browser.navigateTo('https://google.com');
    }
}