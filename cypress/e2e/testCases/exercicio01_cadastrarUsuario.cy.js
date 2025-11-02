import { faker } from '@faker-js/faker';
import cadastro from '../../modules/cadastro';
import formulario from '../../modules/formulario';

describe('Exercício 01 - Cadastrar usuário', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it('Deve cadastrar um novo usuário com sucesso', () => {
    cadastro.preencherCadastro();
    formulario.preencherFormulario();  
    cy.contains('Account Created!').should('be.visible');
  });
});
