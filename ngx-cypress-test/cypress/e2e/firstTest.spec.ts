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

    it('then and wrap methods', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')

        //cypress style for using repetitive terms (as is apperaing at cy.contains('nb-card', 'Using the Grid') and  cy.contains('nb-card', 'Basic form'))
        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then( secondForm => {
                const paswordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(paswordLabelSecond).to.equal(passwordLabelFirst)

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            })

        })

    })

    it('invoke command', ()=> {
        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //1 -- Verificando que existe a label para Email no Basic form
        // e que a label diz "Email address"
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //2 - mesma verificação de 1, só que usando a forma de chegar a um caminho transformando em parâmetro para poder reutilizar
        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address')
        })

        //3 - usando comando invoke
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address')
        })

        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            //.should('contain', 'checked')
            .then(classValue => {
                expect(classValue).to.contain('checked')
            })
    })

    it.only('assert property', () => {
        cy.visit('http://localhost:4200/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click()
            cy.get('nb-calendar-day-picker').contains('17').click()
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Oct 17, 2022')
        })
    })
})

