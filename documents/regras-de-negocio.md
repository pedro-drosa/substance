## Substance

**Objetivo**: Tornar de fácil acesso a criação, publicação e leitura de artigos científicos
de qualidade e que sejam aprovados pela comunidade científica.

## Requisitos:

### Requisitos Funcionais:

- Cadatrar, ler, editar, remover e corrigir artigos científicos. Sendo que a correção será
  restrita aos corretores credenciados. Remoção deve ser realizada apenas por quem
  publicou o artigo;

- O artigo tem que está atrelado a uma área do conhecimento, a um autor
  e deve ser possível indentificar qual o status do artigo (aprovado, revisão, reprovado, novo) e tem que
  ter seu conteúdo acessível publicamente;

- O artigo poderá ter anexos (opcional);

- Devem ser possível criar, remover, editar e ler
  áreas do conhecimento (funcao do admin);

- Deve ser possível criar um usuário e
  definir seu tipo (autor/revisor/admin[apenas admins criam admins])
  remover(admin), editar(owner e admin) e ler usuários;

### Requisitos Não Funcionais:

- Opções de bancos relacionais: MySQL
- Opções de ORM: Sequelize
- Backend usando NodeJS e Express;
- Testes com Postman;
- Documentação usando Swagger;
- Para gerenciar o projeto: Kanban (Trello);
- Versionamento c/ Git e Github;
- Containers com Docker;
