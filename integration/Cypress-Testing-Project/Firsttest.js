// Wizytanastronie.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('My first Test', () => {
    it('finds the content "type"', () => {
        cy.visit('http://automationpractice.com/index.php')

        cy.get('[title="Women"]')
            .contains('Women').click()

        cy.get('[class*="grower CLOSE"]').click()



    })
})