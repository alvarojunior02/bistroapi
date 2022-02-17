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

