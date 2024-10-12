import {$} from '@wdio/globals'

export default class MoroSystemsPage {
    denyCookies = () => $('div[id="cookiescript_reject"]')
    careerLink = () => $('a[href="https://www.morosystems.cz/kariera/"]')
    openPositionsButton = () => $('a[data-event-label="OtevrenePozice"]')
}