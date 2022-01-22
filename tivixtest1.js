describe('Explores content on Tivix.com', () => {
    it('should load correct url', () => {
        cy.visit('https://www.tivix.com/')
    })

    it('should check the correct url', () => {
        cy.url()
            .should('include', 'tivix')
    })

    it('should click on "Blog" ', () => {
        cy.get('[data-slug="blog"]')
            .click()
        cy.wait(3000)
    })

    it('should search for interview with Sumit Chachra', () => {
        cy.get('#s').type('Sumit Chachra {enter}')
        cy.wait(3000)
    })

    it('should open whole article with Sumit Chachra', () => {
        cy.contains('How to Build a Killer Software Product: Tivix CEO Sumit Chachra Tells All')
            .click()
        cy.wait(5000)
    })

    it('should scroll down to "Key takeaways', () => {
        cy.get('h4')
            .contains('Key takeaways:')
            .scrollIntoView()
    })

    it('should take a screenshot of "Key takeaways"', () => {
        cy.get('h4')
            .contains('Key takeaways:')
            .screenshot()
        cy.wait(5000)
    })

    it('should scroll up to the title of the article', () => {
        cy.get('h1')
            .contains('How to Build a Killer Software Product: Tivix CEO Sumit Chachra Tells All')
            .scrollIntoView()
    })

    it('clicks on the "Careers" link', () => {
        cy.get('[data-slug="careers"]')
            .click()
        cy.wait(5000)
    })

    it('should scroll to and click button "Apply"', () => {
        cy.get('[title="Apply"]').scrollIntoView()
            .click
        cy.wait(5000)
    })

    it('should take screenshot of the whole page', () => {
        cy.screenshot({ capture: "fullPage" })
    })

});