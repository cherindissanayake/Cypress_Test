///<reference types= "cypress"/>
import * as I from '../support/testbase'
import user from '../fixtures/user.json'
import* as loginMethod from '../support/loginMethod'
import * as inventoryMethods from '../support/inventoryMethods'
import * as cartMethods from '../support/cartMethods'
import checkoutPage from "../pageobjects/checkoutPage.json"
import checkout from "../fixtures/checkout.json"
import * as checkoutMethods from '../support/checkoutMethods'

describe("Product page functionality", () => {
    beforeEach(()=> {
        I.open("/")
        loginMethod.login(user.valideUserName, user.validPassword)
    })

    it("Add products to cart and checkout", () => {
        inventoryMethods.addProducttoCart()
        cartMethods.verifyCart()
        I.seeText(checkoutPage.checkoutTile,checkout.title)  
        checkoutMethods.checkout()
        I.seeText(checkoutPage.checkoutTile, checkout.overviewTitle)
        I.click(checkoutPage.finiShButton)
        I.seeText(checkoutPage.ThankyouHeader, checkout.header)
    })
    
    it("verify product sorting", () => {
        inventoryMethods.productSort()
    })

})