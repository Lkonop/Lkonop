class BasePage { //klasa BasePage jest swoistym określeniem środowiska w jakim pracujemy oraz jego funkcjach. Ta konekretna zawiera odwiedzaną stronę i funkcję wait
    static loadHomePage() {
        cy.visit('https://devexpress.github.io/testcafe/example/')
    }
    static wait(number) {
        cy.wait(number)
    }
}

class HomePage extends BasePage { //klasa HomePage rozszerza podstawy BasePage i pozwala określić co się ma dziać.
    static scrollToBottom() { //nazwa funkcji
        cy.get('#submit-button').scrollIntoView() // i co ona robi
    }

    static scrollToTop() {
        cy.get('header').scrollIntoView()
    }
}

describe('Abstraction with Classes', () => {
    before(function() {
        // runs before all tests inside describe
        // setup test data or test context
        // seed or reset the database
        HomePage.loadHomePage()
    })

    after(function() {
        //runs after all tests inside desrcibe block are done
        // test clean up 
        //clean cookies or localStorage
    })

    beforeEach(function() {
        //runs before each it block in the desribe
    })

    afterEach(function() {
        //runs after each it block in the describe
    })

    it.only('1st IT', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)

    })

    it('2nd IT', () => {
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)

    })


})