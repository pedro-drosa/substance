<img src="https://res.cloudinary.com/pedro-drosa/image/upload/v1663173883/dev-for-tech/label-substance_nth5qt.svg"/>

<p align="center">
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Pré-Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#docs">Documentação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#run">Como executar</a>&nbsp;&nbsp;&nbsp;
</p>

<h1>🎯 Sobre o projeto</h1>

<p>Nosso objetivo é tornar fácil o acesso a criação, publicação e leitura de artigos científicos de qualidade, que sejam aprovados pela comunidade.</p>

<h2 id="technologies"> 🛠️ Tecnologias</h2>

<a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/></a>
<a href="http://expressjs.com/pt-br/"><img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/></a>
<a href="https://www.mysql.com/"><img src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white"/></a>
<a href="https://sequelize.org/"><img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"/></a>
<a href="https://www.docker.com/"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/></a>
<a href="https://eslint.org/"><img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"/></a>
<a href="https://prettier.io/"><img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E"/></a>
<a href="https://typicode.github.io/husky/#/"><img src="https://img.shields.io/badge/husky-433333?style=for-the-badge"/></a>
<a href="https://swagger.io/"><img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white"></a>

<h2 id="requirements">⚡ Pré-Requisitos</h2>

<p>Você vai precisar ter instalado em sua máquina as seguintes ferramentas:</p>

<a href="https://git-scm.com/"><img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/></a>
<a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/></a>
<a href="https://www.docker.com/"><img src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"/></a>

<h1 id="docs">Documentação</h1>

<a href=""><img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"/></a>
<a href=""><img src="https://img.shields.io/badge/Insomnia-4000BF?logo=insomnia&logoColor=white&style=for-the-badge"/></a>
<a href=""><img src="https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white"/> <br/><br/></a>


<h1 id="run">🚀 Como executar ?</h1>

<h2>🐳 Execute com o Docker</h2>

```bash
# Clone o repositório
$ git clone https://github.com/pedro-drosa/substance.git

# Inicie os containers
$ docker-compose up

# Agora você pode acessar
$ http://localhost:5000
```

<h2>⚡ Execute sem o Docker</h2>

```bash
# Clone o repositório
$ git clone https://github.com/pedro-drosa/substance.git

# Instale as dependências
$ npm install

# Inicie o servidor
$ npm run dev

# Você deve ter o Mysql devidamente configurado em sua máquina para continuar...
# Lembre-se de configurar seu usuário e senha!

# Crie a base de dados
$ npx sequelize-cli db:create

# Execute as migrações
$ npx sequelize-cli db:migrate

# Adicione os seeds
$ npx sequelize-cli db:seed:all

# Agora você pode acessar
$ http://localhost:5000
```
