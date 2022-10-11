/// <reference types="cypress" /> 
// intelisense so that VS code can recognize cypress functionalities 

describe('Our first suite', () => {
    it('passes', () => {
            cy.visit('http://localhost:4200/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()
    
            //by Tag Name
            cy.get('input')
    
            //by ID
            cy.get('#inputEmail1')
    
            //by class name
            cy.get('.input-full-width')
    
            //by Attribute name
            cy.get('[placeholder]')
    
            //by Attribute name and value
            cy.get('[placeholder="Email"]')
    
            //by class value
            cy.get('[class="input-full-width size-medium shape-rectangle"]') // for when class has more then one value
    
            //by tag name and attribute with value
            cy.get('input[placeholder="Email"]')
    
            //by two different attributes
            cy.get('[placeholder="Email"][type="email"]')
    
            //by tag name, attribute with value, ID and class name
            cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')
    
            //the most recommended way by Cypress: using your own attributes 
            cy.get('[data-cy="imputEmail1"]')
    
})

    it('Second Test', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.get('[data-cy="signInbutton"]')

        cy.contains('Sign in')

        cy.contains('[status="warning"]','Sign in')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()

        cy.contains('nb-card','Horizontal form').find('[type="email"]')
    })

    it.only('then and wrap methods', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

    })
})

