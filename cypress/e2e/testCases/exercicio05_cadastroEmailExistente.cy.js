import cadastro from '../../modules/cadastro';

describe('Exercício 05 - Cadastro com e-mail existente', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it('Deve exibir mensagem de erro ao tentar cadastrar com e-mail já existente', () => {
    cadastro.preencherCadastroComEmailExistente();
    cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!');
  });
});
