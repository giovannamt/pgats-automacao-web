import produtos from '../../modules/produto';

describe('Exercício 08 - Verificar todos os produtos e página de detalhes', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it('Deve exibir corretamente as informações do produto', () => {
    produtos.verificarProdutosEDetalhes();
    cy.contains('h2', 'Blue Top').should('be.visible');
    cy.contains('p', 'Category: Women > Tops').should('be.visible');
    cy.contains('span', 'Rs. 500').should('be.visible');
    cy.contains('b', 'Availability').should('be.visible');
    cy.contains('b', 'Condition').should('be.visible');
    cy.contains('b', 'Brand').should('be.visible');
  });
});
