describe('Browser Actions', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html')
        cy.url().should('include', 'index.html')
        cy.log('Before Reload!')
        cy.reload()
        cy.log('After Reload!')
    })

    it('should click on Travel category', () => {
        cy.get('a')
            .contains('Travel')
            .click()
        cy.get('h1')
            .contains('Travel')

    })

    it('should display correct number of books', () => {
        cy.get('.product_pod').its('length').should('eq', 11)
    })

    it('should click on poetry section ', () => {
        cy.get('a')
            .contains('Poetry')
            .click()
    })

    it('should click on Olio book detail', () => {
        cy.get('h3').contains('Olio').click()
    })

    it('should check and display the correct price of "Olio" book', () => {
        cy.get('.price_color').contains('£23.88')
    })

});