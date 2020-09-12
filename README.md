# DESAFIO - Desenvolvedor FullStack.

## Stack do projeto

- Framework: **Vue.js** (https://github.com/vuejs/vue)
- Material Design Component Framework: **Vuetify** (https://github.com/vuetifyjs/vuetify)
- Pré-processador css: **SCSS or SASS** (https://github.com/sass/sass)
- Mock API: **json-server** (https://github.com/typicode/json-server)
- Testing tool: **Jest** (https://github.com/facebook/jest)

## Setup do projeto

### Passo 1) Instalar as dependencias NPM.
```
npm install
```

### Passo 2) Instalar o json-server (Mock API usado pela aplicação.)
```
npm install -g json-server
```

### Passo 3) Entrar no diretório da aplicação e iniciar a Mock API. (A aplicação está consumindo a Mock API na porta 3000.)
```
json-server db.json -p 3000
```

### Passo 4) Compilar e servir a aplicação (Provavelmente ela estará acessível no http://localhost:8080)
```
npm run serve
```
