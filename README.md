**Getting Started**

Preencha os dados das variáveis de ambiente no arquivo ```.env``` caso queira rodar a API localmente.
Segue anexo um modelo do arquivo ```.env``` .

```
# Configurations API
PORT=

# DataBase
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=
```

Execute os seguintes comandos na raiz do diretório do projeto:

_usando **npm**_

```bash
# Instalando dependências
$ npm install

# Criando banco de dados
$ npx typeorm migration:run

# Fazendo a build da API
$ npx tsc

# Inicializando servidor no modo produção
$ node dist/server.js
```

_usando **yarn**_

```bash
# Instalando dependências
$ yarn

# Criando banco de dados
$ yarn typeorm migration:run

# Inicializando servidor no modo de produção
$ yarn production

# Inicializando servidor no modo de desenvolvimento
$ yarn dev:server
```

> O banco de dados usado na API e Postgres.

> Caso não preencha a variável de ambiente ```PORT``` endereço padrão do servidor Node.JS será [`http://localhost:3333`](http://localhost:3333)

---
