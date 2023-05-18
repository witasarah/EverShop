describe('Login', () => { 

    it('Login', () => {
        cy.visit('https://demo.evershop.io/account/login')
        cy.get('input[placeholder="Email"]').type("putri@gmail.com")
        cy.get('input[placeholder="Password"]').type("Wita12345")
        cy.get('button[type="submit"]').click()
        cy.wait(3000)

    });

    it('Login with wrong email', () => {
        cy.visit('https://demo.evershop.io/account/login')
        cy.get('input[placeholder="Email"]').type("putris@gmail.com")
        cy.get('input[placeholder="Password"]').type("Wita12345")
        cy.get('button[type="submit"]').click()
        cy.wait(3000)

    });

    it('Login with wrong password', () => {
        cy.visit('https://demo.evershop.io/account/login')
        cy.get('input[placeholder="Email"]').type("putri@gmail.com")
        cy.get('input[placeholder="Password"]').type("123456789")
        cy.get('button[type="submit"]').click()
        cy.wait(3000)

    });

})