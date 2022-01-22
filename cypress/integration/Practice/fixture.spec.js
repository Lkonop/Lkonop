describe('Login with Fixtures Data', () => {
    it('should try to login ', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.fixture('user').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user_login').type(username) // w fixtures utworzyliśmy user.json, żeby przechowywać dane. Działa to podobnie jak pobieranie danych z array w PHP.
            cy.get('#user_password').type(password)
            cy.contains('Sign in').click()
        })


    })

})