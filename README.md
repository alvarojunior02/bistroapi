# API do SMG Bistrô

Aplicação Back-end desenvolvida do zero para realizar o controle de requisições vinda do front-end.

## Tecnologias:

<ul>
  <li>Node.js;</li>
  <li>Express.js;</li>
  <li>Sequelize;</li>
  <li>MySQL;</li>
  <li>TypeScript.</li>
</ul>

## Como rodar localmente: 
  <ol>
    <li>Ter o node e yarn instalados;</li>
    <li>Clonar o projeto em sua máquina;</li>
    <li>Abrir o prompt de comandos de sua preferencia e rodar "yarn" na raiz da pasta clonada; </li>
    <li>Em seguida, no prompt, rodar "yarn start", na mesma pasta. </li>
  </ol>
  <br />
  Obs: em seguida, baixe o sistema web, para ver a api funcionando e trabalhando com requisições e respostas para o front-end:
  <br />
  <a href="https://github.com/alvarojunior02/bistroweb">Repositório do SMG Bistrô Web </a>


## Documentação

Rotas básicas: 
 <ul>
  <li>"/products";</li>
  <li>"/recipes".</li>
</ul>

## Rotas de Products
  - "/products" (tipo GET) -> Lista os produtos existentes;
  - "/products/:id" (tipo GET) -> Retorna os dados de um produto específico, de acordo com ID fornecido;
  - "/products/name/:name" (tipo GET) -> Retorna os dados de um produto específico, de acordo com o Nome exato fornecido;
  - "/products" (tipo POST) -> Insere um novo produto;
  - "/products/:id" (tipo PUT) -> Altera o produto existente;
  - "/products/:id" (tipo DELETE) -> Deleta o produto.

## Rotas de Recipes
  - "/recipes" (tipo GET) -> Lista as receitas existentes;
  - "/recipes/:id" (tipo GET) -> Retorna os dados de uma receita específica, de acordo com ID fornecido;
  - "/recipes/title/:title" (tipo GET) -> Retorna os dados de uma receita específica, de acordo com o Título exato fornecido;
  - "/recipes" (tipo POST) -> Insere uma nova receita;
  - "/recipes/:id" (tipo PUT) -> Altera a receita existente;
  - "/recipes/:id" (tipo DELETE) -> Deleta a receita.

