class Login {
    loginValido () {
        cy.get('a[href="/login"]').click();
        cy.get('[data-qa="login-email"]').type('giotavares@test.com.br');
        cy.get('[data-qa="login-password"]').type('1234change', { log: false });
        cy.get('button[data-qa="login-button"]').click();    
    }
    loginInvalido () {
        cy.get('a[href="/login"]').click();
        cy.get('[data-qa="login-email"]').type('giovanna@t1este.com');
        cy.get('[data-qa="login-password"]').type('teste1234', { log: false });
        cy.get('button[data-qa="login-button"]').click();    
    }
    logout () {
        cy.get('a[href="/logout"]').click();
    }
}

export default new Login ();