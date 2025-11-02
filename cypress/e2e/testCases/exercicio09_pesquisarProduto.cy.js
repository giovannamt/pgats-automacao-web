import produto from '../../modules/produto';

describe('Exercício 09 - Pesquisar produto', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it('Deve retornar produtos correspondentes à pesquisa', () => {
    produto.pesquisarProduto();
    cy.get('.features_items').should('be.visible');
    cy.get('.productinfo').first().should('contain', 'Winter Top');
  });
});
