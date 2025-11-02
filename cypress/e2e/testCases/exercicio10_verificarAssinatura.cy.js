import homepage from '../../modules/homepage';

describe('Exercício 10 - Verificar assinatura na página inicial', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it('Deve validar o envio do e-mail de assinatura', () => {
    homepage.verificarAssinatura();
    cy.get('.alert-success').should('be.visible');
  });
});
