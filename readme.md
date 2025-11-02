<h1 align="center">🧪 Projeto de Automação Web - Automation Exercise</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Tested%20with-Cypress-04C38E?logo=cypress&logoColor=white" alt="Cypress">
  <img src="https://img.shields.io/github/actions/workflow/status/seu-usuario/automation-exercise/cypress.yml?label=Build&logo=github" alt="Build">
  <img src="https://img.shields.io/badge/Reporter-Mochawesome-blueviolet" alt="Reporter">
  <img src="https://img.shields.io/badge/Status-Concluído-success" alt="Status">
</p>

<p align="center">
Este projeto automatiza os <strong>casos de teste 1, 2, 3, 4, 5, 6, 8, 9, 10 e 15</strong> da aplicação fictícia 
<a href="https://automationexercise.com/" target="_blank">Automation Exercise</a>.
</p>

<p align="center">
O objetivo é demonstrar a implementação de testes E2E com <strong>Cypress</strong>, uso de boas práticas, Page Object Model, relatórios e integração contínua via <strong>GitHub Actions</strong>.
</p>

<hr>

<h2>🚀 Tecnologias utilizadas</h2>

<ul>
  <li><a href="https://www.cypress.io/">Cypress</a> — framework principal de testes E2E</li>
  <li><a href="https://fakerjs.dev/">@faker-js/faker</a> — geração de dados dinâmicos</li>
  <li><a href="https://github.com/LironEr/cypress-mochawesome-reporter">cypress-mochawesome-reporter</a> — geração de relatórios em HTML e JSON</li>
  <li><a href="https://docs.github.com/actions">GitHub Actions</a> — execução automatizada dos testes</li>
</ul>


<h2>⚙️ Configuração do ambiente local</h2>

<ol>
  <li><strong>Clone o repositório:</strong>
    <pre><code>git clone https://github.com/seu-usuario/pgats-automacao-web.git
cd pgats-automacao-web</code></pre>
  </li>
  <li><strong>Instale as dependências:</strong>
    <pre><code>npm install</code></pre>
  </li>
  <li><strong>Execute os testes no navegador (modo interativo):</strong>
    <pre><code>npx cypress open</code></pre>
  </li>
  <li><strong>Execute os testes em modo headless (linha de comando):</strong>
    <pre><code>npx cypress run --browser chrome</code></pre>
  </li>
</ol>

<hr>

<h2>🧾 Relatórios</h2>

<p>O projeto utiliza o <strong>Mochawesome Reporter</strong> para gerar relatórios automáticos após cada execução.</p>

<p>Após rodar os testes com <code>npx cypress run</code>, os relatórios ficam em:</p>

<pre>cypress/reports/</pre>

<p>Para abrir o relatório em HTML, basta localizar o arquivo:</p>

<pre>cypress/reports/mochawesome.html</pre>

<hr>

<h2>🤖 Execução via GitHub Actions</h2>

<p>A execução automatizada ocorre através do workflow localizado em:</p>

<pre>.github/workflows/cypress.yml</pre>

<p>O pipeline realiza:</p>

<ol>
  <li>Checkout do repositório</li>
  <li>Instalação das dependências</li>
  <li>Execução dos testes Cypress</li>
  <li>Upload do relatório Mochawesome como artefato</li>
</ol>

<pre><code class="language-yaml">name: Cypress Tests

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Run Cypress tests
        run: npx cypress run --browser chrome

      - name: Upload Mochawesome report
        uses: actions/upload-artifact@v4
        with:
          name: mochawesome-report
          path: cypress/reports
</code></pre>

<p>Os resultados ficam disponíveis em <strong>Actions → Artifacts</strong> após a execução.</p>

<hr>

<h2>🧩 Casos de teste implementados</h2>

<table>
  <thead>
    <tr><th>Caso</th><th>Descrição</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>01</strong></td><td>Cadastrar novo usuário</td></tr>
    <tr><td><strong>02</strong></td><td>Login com e-mail e senha válidos</td></tr>
    <tr><td><strong>03</strong></td><td>Login com e-mail e senha inválidos</td></tr>
    <tr><td><strong>04</strong></td><td>Logout do usuário</td></tr>
    <tr><td><strong>05</strong></td><td>Cadastro com e-mail já existente</td></tr>
    <tr><td><strong>06</strong></td><td>Envio de formulário de contato</td></tr>
    <tr><td><strong>08</strong></td><td>Verificação de produtos e detalhes</td></tr>
    <tr><td><strong>09</strong></td><td>Pesquisa de produto</td></tr>
    <tr><td><strong>10</strong></td><td>Assinatura de e-mail na página inicial</td></tr>
    <tr><td><strong>15</strong></td><td>Pedido completo com cadastro</td></tr>
  </tbody>
</table>

<h2>👩‍💻 Autor</h2>

<p>Projeto desenvolvido por <strong>Giovanna Maia Tavares</strong><br>
💼 Avaliação <strong>PGATS-AUT-WEB</strong><br>
📅 Novembro de 2025<br>
🚀 Feito com ❤️ usando <strong>Cypress + Mochawesome + GitHub Actions</strong></p>
