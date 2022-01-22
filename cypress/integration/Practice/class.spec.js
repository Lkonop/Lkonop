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
    it('should scroll down and up on the page', () => {
        HomePage.loadHomePage()
        HomePage.scrollToBottom()
        HomePage.wait(5000)
        HomePage.scrollToTop()
        HomePage.wait(3000)

    })

});