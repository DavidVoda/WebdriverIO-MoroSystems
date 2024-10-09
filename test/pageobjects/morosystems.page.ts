import {$} from '@wdio/globals'

export default class MoroSystemsPage {
    denyCookies = () => $('div[id="cookiescript_reject"]')
    careerLink = () => $('a[href="https://www.morosystems.cz/kariera/"]')
    // careerLink = () => $('#menu-hlavni-menu > li:nth-child(6) > a')
    // careerLink = () => $('nav[id="menu-main"]').$('=Kariéra')
    openPositionsButton = () => $('a[data-event-label="OtevrenePozice"]')
}