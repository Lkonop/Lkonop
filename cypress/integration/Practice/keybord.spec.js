describe('Keybord press simulation', () => {
    it('should submit searchbox with pressing enter', () => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.get('#searchTerm').type('just some text {enter}') // funkcja {enter} służy do walidacji np. zamiast buttonu. Czyli wpisujemy wartość 
            //wyszukiwania np. "garnek" i zatwierdzamy to enterem({enter})
    })


});