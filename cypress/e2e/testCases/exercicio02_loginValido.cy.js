import login from '../../modules/login';

describe('Exercício 02 - Login válido', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it('Deve realizar login com e-mail e senha corretos', () => {
    login.loginValido();
    cy.contains('Logout').should('be.visible');
  });
});
