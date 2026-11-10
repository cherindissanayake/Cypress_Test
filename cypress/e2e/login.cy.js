///<reference types= "cypress"/>
import * as I from '../support/testbase'
import user from '../fixtures/user.json'
import inventory from '../pageobjects/inventoryPage.json'
import products from '../fixtures/product.json'
import* as loginMethod from '../support/loginMethod'

describe("Login functionality", () => {

    it("Add two product to cart", () => {
    I.open("/");
    loginMethod.login(user.valideUserName, user.validPassword)
    I.seeUrl(inventory.inventoryPageURL)
    I.seeText(inventory.productLabel, products.productPageTitle)
    })
})