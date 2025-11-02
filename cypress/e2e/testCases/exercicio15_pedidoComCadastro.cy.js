import cadastro from '../../modules/cadastro';
import formulario from '../../modules/formulario';
import produto from '../../modules/produto';
import carrinho from '../../modules/carrinho';

describe('Exercício 15 - Fazer pedido após cadastro', () => {
  beforeEach(() => {
    cy.visit('https://automationexercise.com/');
  });

  it('Deve cadastrar, adicionar produto e concluir o pedido com sucesso', () => {
    cadastro.preencherCadastro();
    formulario.preencherFormulario();
    produto.verificarProdutosEDetalhes();
    carrinho.adicionarProdutoAoCarrinho();
    carrinho.pagamentoEConfirmacao();
    cy.contains('p', 'Congratulations! Your order has been confirmed!').should('be.visible');
  });
});
