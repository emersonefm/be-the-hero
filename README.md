<h1 align="center">
    <img alt="GoStack" src="https://github.com/Rocketseat/semana-omnistack-11/blob/master/.github/bethehero.svg" width="200px" />
</h1>

<h4 align="center"><a id="user-content----semana-omnistack-110" class="anchor" aria-hidden="true" href="#---semana-omnistack-110"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>
  <g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji> Semana OmniStack 11.0

<p align="center">
 <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/7f5bc0f6a47832b292bfcd2646ee4c63d85c043f/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d505273266d6573736167653d77656c636f6d6526636f6c6f723d373135396331266c6162656c436f6c6f723d303030303030"><img src="https://camo.githubusercontent.com/7f5bc0f6a47832b292bfcd2646ee4c63d85c043f/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d505273266d6573736167653d77656c636f6d6526636f6c6f723d373135396331266c6162656c436f6c6f723d303030303030" alt="PRs welcome!" data-canonical-src="https://img.shields.io/static/v1?label=PRs&amp;message=welcome&amp;color=7159c1&amp;labelColor=000000" style="max-width:100%;"></a>
  <a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/552fa44165c5752657d78f28d5752ed5e2700893/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d6c6963656e7365266d6573736167653d4d495426636f6c6f723d373135396331266c6162656c436f6c6f723d303030303030"><img alt="License" src="https://camo.githubusercontent.com/552fa44165c5752657d78f28d5752ed5e2700893/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d6c6963656e7365266d6573736167653d4d495426636f6c6f723d373135396331266c6162656c436f6c6f723d303030303030" data-canonical-src="https://img.shields.io/static/v1?label=license&amp;message=MIT&amp;color=7159c1&amp;labelColor=000000" style="max-width:100%;"></a>
</p>


<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-desafio-01?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-desafio-01/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-desafio-01?style=social">
  </a>
</p>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## :rocket: Sobre o desafio

Crie uma aplicação para armazenar projetos e suas tarefas do zero utilizando [Express](https://expressjs.com/pt-br/).

### Rotas

- `POST /projects`: A rota deve receber `id` e `title` dentro do corpo e cadastrar um novo projeto dentro de um array no seguinte formato: `{ id: "1", title: 'Novo projeto', tasks: [] }`; Certifique-se de enviar tanto o ID quanto o título do projeto no formato string com aspas duplas.

- `GET /projects`: Rota que lista todos projetos e suas tarefas;

- `PUT /projects/:id`: A rota deve alterar apenas o título do projeto com o `id` presente nos parâmetros da rota;

- `DELETE /projects/:id`: A rota deve deletar o projeto com o `id` presente nos parâmetros da rota;

- `POST /projects/:id/tasks`: A rota deve receber um campo `title` e armazenar uma nova tarefa no array de tarefas de um projeto específico escolhido através do `id` presente nos parâmetros da rota;

### Exemplo

Se eu chamar a rota `POST /projects` repassando `{ id: 1, title: 'Novo projeto' }` e a rota `POST /projects/1/tasks` com `{ title: 'Nova tarefa' }`, meu array de projetos deve ficar assim:

```js
[
  {
    id: "1",
    title: "Novo projeto",
    tasks: ["Nova tarefa"]
  }
];
```

### Middlewares

- Crie um middleware que será utilizado em todas rotas que recebem o ID do projeto nos parâmetros da URL que verifica se o projeto com aquele ID existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Crie um middleware global chamado em todas requisições que imprime (`console.log`) uma contagem de quantas requisições foram feitas na aplicação até então;

## 📅 Entrega

Esse desafio **não precisa ser entregue** e não receberá correção, mas você pode ver o resultado do [código do desafio aqui](https://github.com/Rocketseat/bootcamp-gostack-desafio-01/blob/master/index.js). Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ by Rocketseat :wave: [Entre na nossa comunidade!](https://discordapp.com/invite/gCRAFhc)
