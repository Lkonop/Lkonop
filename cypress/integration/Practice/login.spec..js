describe('Working with inputs', () => {
    it('should ovveride the current time', () => {
        const date = new Date(2020, 3, 10).getTime() //return a timestamp
        cy.clock(date) // ustaw zegar na nową datę
        cy.log(date) // pokaż to w logu(konsoli)
    })

    it('load zerowebappsecurity website', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html') // funkcje wpisywane w nawiasie po .should .include itd zawierają wskazówkę dla progarmu, co chcemy zawrzeć. W tym wypadku
            //chodzi o to, że adres strony powinien zawierac('include') słowo ('login.html')
        cy.clearCookies({ log: true }) //funkcja dla czyszczenia cookies
        cy.clearLocalStorage('your item', { log: true }) // funkcja dla czyszczenioa localstorage
        cy.title().should('include', "Zero - Log in") // ta funkcja sprawdza czy tytuł strony jest poprawny
    })
    it('should fill username', () => {
        cy.get('#user_login').as('username') //// #user_login to xpath znajdowany po id(wskazuje na to #). Cała funkcja służy do tego, aby nadać jej nową nazwę tzw. "alias"
        cy.get('@username').clear() //function "clear" makes sure to clear fillout form before we type something in. Jeśli chcemy się odwołać do "alias" musimy przed nim wstawić @
        cy.get('@username').type('Some Invalid Name') ////type służy do wpisywania czegoś w formularz(trochę jak Sendkeys w PHP)

    })
    it('should fill password', () => {
        cy.get('#user_password').as('password') // #user_name to xpath znajdowany po id. Cała funkcja służy do tego, aby nadać jej nową nazwę tzw. "alias"
        cy.get('@password').clear() //function "clear" makes sure to clear fillout form before we type something in. Jeśli chcemy się odwołać do "alias" musimy przed nim wstawić @
        cy.get('@password').type('some invalid password') //type służy do wpisywania czegoś w formularz

    })
    it('Should mark checkbox', () => {
        cy.get('input[type="checkbox"]').click() // mark the checkbox

    })
    it('should submit login form', () => {
        cy.contains('Sign in').click()

    })
    it('should display error message', () => {
        cy.get('.alert-error')
            .should('be.visible') // komunikat musi sie pokazać
            .and('contain', 'Login and/or password are wrong.') //wiadomość musi zawierać tę treść

    })
});