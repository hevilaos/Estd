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
})

