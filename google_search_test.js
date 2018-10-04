// Cypress search google test

describe('My First Test', function () {
    it('Visit Google.com', function () {
        cy.visit('https://google.com')

        cy
        .get('.gLFyf') // .gLFyf is the google search bar
        .type('Patriss Mo')
        .type('{enter}', { force: true })
        // .get('.FPdoLc > center > [value="Google Search"]')
        // .click()


        //TODO put code in github    
        
        //Next make test fail - how??
        //make it more robust...

        //
    })
})