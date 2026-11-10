import * as I from './testbase'
import cartPage from '../pageobjects/cartPage.json'
import cart from '../fixtures/cart.json'

export function verifyCart(){
    I.containsText(cartPage.firstProduct, cart.firstProductName)
    I.containsText(cartPage.secondProduct, cart.secondProductName)
    I.click(cartPage.checkoutButton)
}