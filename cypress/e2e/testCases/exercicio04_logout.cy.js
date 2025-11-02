import login from '../../modules/login';

describe('Exercício 04 - Logout do usuário', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it('Deve realizar logout com sucesso', () => {
    login.loginValido();
    login.logout();
    cy.contains('Login to your account').should('be.visible');
  });
});
