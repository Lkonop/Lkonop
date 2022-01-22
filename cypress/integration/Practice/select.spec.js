describe('Select Box', () => {
    it('should load website with select box', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')

    })

    it('should select an option from select box', () => {
        cy.get('#preferred-interface').select('Both') //znajdujesz xpath, selectem wybierasz wartość "Both"
        cy.get('#preferred-interface').should('have.value', 'Both') // zeby potwierdzić dobrze wybraną opcję, xpath musi zawierać wyrażenie "Both"

        cy.get('#preferred-interface').select('JavaScript API')
        cy.get('#preferred-interface').should('have.value', 'JavaScript API')
    })
});