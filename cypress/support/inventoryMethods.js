import * as I from './testbase'
import inventory from '../pageobjects/inventoryPage.json'
import product from '../fixtures/product.json'

export function addProducttoCart(){
    I.click(inventory.product1)
    I.click(inventory.product2)
    I.seeText(inventory.cartBatch, 2)
    I.click(inventory.cartBatch)
}

export function productSort(){
    I.select(inventory.productSorting, product.sortingOption)
}
