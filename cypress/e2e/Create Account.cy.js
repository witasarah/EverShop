describe('Create a New Account', () => { 

    it('Create New Account from the homepage', () => {
        cy.visit('https://demo.evershop.io/account/login')
        cy.get('.text-interactive').click()
        cy.get('input[placeholder="Full Name"]').type("Putri")
        cy.get('input[placeholder="Email"]').type("putri@gmail.com")
        cy.get('input[placeholder="Password"]').type("Wita12345")
        cy.get('button').click()
        cy.wait(3000)

    });

    it('failed to create a new account, all fields are empty', () => {
        cy.visit('https://demo.evershop.io/account/login')
        cy.get('.text-interactive').click()
        cy.get('button').click()
        cy.wait(3000)

    });

    it('Failed to create a new account, the email is not in the right format', () => {
        cy.visit('https://demo.evershop.io/account/login')
        cy.get('.text-interactive').click()
        cy.get('input[placeholder="Full Name"]').type("Putri")
        cy.get('input[placeholder="Email"]').type("putri.gmail.com")
        cy.get('input[placeholder="Password"]').type("Wita12345")
        cy.get('button').click()
        cy.wait(3000)

    });

    it('Failed to create a new account, the password is not in the right format', () => {
        cy.visit('https://demo.evershop.io/account/login')
        cy.get('.text-interactive').click()
        cy.get('input[placeholder="Full Name"]').type("Putri")
        cy.get('input[placeholder="Email"]').type("putri@gmail.com")
        cy.get('input[placeholder="Password"]').type("123456789")
        cy.get('button').click()
        cy.wait(3000)

    });


})