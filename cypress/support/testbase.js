//common rreuasable functions
export function click(locator) {
    cy.get(locator).click();
}

export function type(locator, text) {
    //cy.log('Entering text into: ' + locator);
    cy.get(locator).type(text);
}

export function open(path) {
    cy.visit(path);
}

export function clear(locator) {
    cy.get(locator).clear();
}

//verify visible
export function see(locator) {
    cy.get(locator).should("be.visible");
}
  
export function dontSee(locator) {
    cy.get(locator).should("not.exist");
}

//verify text
export function seeText(locator, expectedText) {
    cy.get(locator).should("have.text", expectedText);
}

//verify text is not equal
export function dontSeeText(locator, expectedText) {
    cy.get(locator).should("not.have.text", expectedText);
}

export function containsText(locator, expectedText) {
    cy.get(locator).should("contain.text", expectedText);
}

export function seeValue(locator, expectedValue) {
    cy.get(locator).should("have.value", expectedValue);
}

//select from dropdown
export function select(locator, option) {
    cy.get(locator).select(option);
}

//select dropdown first and then select
export function selectOption(locator, option){
    cy.get(locator).click();
    cy.contains(option).click()
}

export function check(locator) {
    cy.get(locator).check();
}

export function uncheck(locator) {
    cy.get(locator).uncheck();
}

export function seeUrl(expectedUrl) {
    cy.url().should("include", expectedUrl);
}

export function dontSeeUrl(expectedUrl) {
    cy.url().should("not.include", expectedUrl);
}

export function verifyLength(locator, expectedValue) {
    cy.get(locator).should("have.length", expectedValue);
}

