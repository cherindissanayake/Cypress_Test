import * as I from './testbase'
import loginPage from '../pageobjects/loginPage.json'


export function login(username, password){
    I.type(loginPage.username, username)
    I.type(loginPage.password, password)
    I.click(loginPage.loginButton)
}
