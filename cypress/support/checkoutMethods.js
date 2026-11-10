import * as I from './testbase'
import checkoutPage from "../pageobjects/checkoutPage.json"
import checkoutdata from "../fixtures/checkout.json"

export function checkout(){
    I.type(checkoutPage.firstName, checkoutdata.firstName)
    I.type(checkoutPage.lastName, checkoutdata.lastName)
    I.type(checkoutPage.zipCode, checkoutdata.zipCode)
    I.click(checkoutPage.continueButton)
}