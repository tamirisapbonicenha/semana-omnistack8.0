# Tindev
Aplicação desenvolvida na Semana OmniStack 8.0, oferecido pela [Rocketseat](https://rocketseat.com.br/). 

## Sobre o projeto
A aplicação foi desenvolvida com a proposta de ajudar desenvolvedores encontrarem outros com os mesmos interesses para trabalharem juntos. Para utilizar a aplicação o único pré requisito é ter uma conta no github e entrar com seu usuário para começar a procurar outros devs.


## Stack 
* [MongoDB](https://www.mongodb.com/) - The database for modern applications
* [React](https://reactjs.org) - The front-end framework
* [React Native](https://facebook.github.io/react-native/) - The mobile framework
* [Node JS](https://nodejs.org) - The back-end framework
* [Yarn](https://yarnpkg.com/pt-BR/) - Package Manager

## Preparando o ambiente

### Pré requisitos
É necessário ter o [Node.JS](https://nodejs.org) e o [Yarn](https://yarnpkg.com/lang/en/) instalados.

**Clone o projeto**

`git clone git@github.com:tamirisapbonicenha/semana-omnistack8.0.git`

**Crie um arquivo**

`.env` na raiz do projeto ou renomeie o arquivo exemplo `.env_sample` para `.env`.

**Instale as dependências**

Dentro da pasta backend e da pasta frontend, rode: `yarn dev`

**Para rodar o backend**
- Dentro da pasta backend rode: `yarn dev`.

**Para rodar o frontend**
- Dentro de frontend rode: `yarn start`.

Abra o navegador em http://localhost:3000.

*PS: Nessa documentação não vou cobrir como rodar a aplicação mobile devido a todas as configurações de ambiente que precisam ser feitas, dependendo se você está em um macOS, linux ou windows.*


# RESTful API

A **API** da aplicação possui três **endpoints**:


|Método|URL|Descrição|
|-------|-------|-------|
|GET|`http://localhost:3333/devs`|Listagem de desenvolvedores|
|POST|`http://localhost:3333/devs`|Cadastro de desenvolvedor|
|POST|`http://localhost:3333/devs/:devId/likes/`|202|*Like* em um desenvolvedor|
|POST|`http://localhost:3333/devs/:devId/likes/`|202|*Dislike* em um desenvolvedor|


