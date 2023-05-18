describe('Shopping', () => { 

    it('Add an item to cart', () => {
        cy.visit('https://demo.evershop.io/account/login')
        cy.get('input[placeholder="Email"]').type("putri@gmail.com")
        cy.get('input[placeholder="Password"]').type("Wita12345")
        cy.get('button[type="submit"]').click()
        cy.get('img[alt="Nike air zoom pegasus 35"]').click()
        cy.get('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(4) > li:nth-child(1) > a:nth-child(1)').click();
        cy.get('body > div:nth-child(1) > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(4) > li:nth-child(1) > a:nth-child(1)').click();
        cy.get('input[placeholder="Qty"]').clear().type('2');
        cy.get('button[type="button"]').click()
        cy.wait(3000)

    });

})