Tabela de conteúdos
=================
<!--ts-->
   * [Sobre](#Sobre)
   * [Features](#Features)
   * [Como usar](#Como-usar)
   * [Tecnologias](#Tecnologias-usadas)
<!--te-->
<h4 align="center">
 <b>Crud</b> 🦸‍♂️
</h4>

<br>

### Sobre

<h4 align="center">
    <a href="https://pt-br.reactjs.org/">🔗 React</a>
</h4>
<p align="center">🚀 Esse projeto foi meu primeiro projeto de verdade feito a partir do zero. Foi feito tanto para aprender um pouco mais sobre react quanto pra aprender em como é desevolver um sistema real. Decidi fazer ele como um Single Page Aplication por acreditar ser um desafio ainda maior</p>

<h4 align="center"> 
	🚧  🚀 Interrompido  🚧
</h4>

### Features

- [x] Rotas de Clientes, metodos GET,POST e DELETE
- [x] Rotas de Produtos, metodos GET,POST e DELETE
- [x] Rotas de Pedidos, metodos GET,POST e DELETE

### Como usar

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
Acesso a um banco de dados MySQL, [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [npm](https://www.npmjs.com/get-npm) ou [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o server

```bash

# Clone este repositório
$ git clone <https://github.com/sandrovisky/teste-telecom-back>

# Instale as dependências
$ npm install ou yarn install

# Acesse a pasta do projeto no terminal/cmd
configure as variaveis de ambiente seguindo o exemplo do arquivo .env.examples

# Execute o comando que iá criar as tabelas no banco de dados
$ yarn sequelize db:migrate ou np sequelize db:migrate

# Execute a aplicação 
$ yarn start ou npm start

# Por padrão o servidor inciará na porta:3333, para mudar altere no arquivo src.server.js linha 23
```
### Tecnologias usadas
Este maravilindo projeto foi desenvolvido com as seguintes tecnologias:
- [Express](https://expressjs.com/pt-br/)
- [Cors](https://www.npmjs.com/package/cors)
- [Mysql2](https://www.npmjs.com/package/mysql2)
- [Sequelize](https://sequelize.org/)
- [Sequelize-cli](https://www.npmjs.com/package/sequelize-cli)

<p align="center">Feito com ❤️ por <strong>Sandrovisky :wave: </p>
