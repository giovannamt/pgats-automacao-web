import login from '../../modules/login';

describe('Exercício 03 - Login inválido', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it('Deve exibir mensagem de erro para e-mail/senha incorretos', () => {
    login.loginInvalido();
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
});
