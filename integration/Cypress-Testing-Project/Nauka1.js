describe('Look for a job', () => {
    it('finds open positions', () => {
        cy.visit('https://www.zoetis.com/')

        cy.contains('Careers')
            .click()

    })
})