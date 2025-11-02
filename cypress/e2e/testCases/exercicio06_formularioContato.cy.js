import contato from '../../modules/contato';

describe('Exercício 06 - Formulário de contato', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it('Deve enviar o formulário de contato com sucesso', () => {
    contato.preencherFormulario();
    cy.get('.status').should('be.visible');
    cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');
  });
});
