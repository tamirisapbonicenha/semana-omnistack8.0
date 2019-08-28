# PROJETO EM ANDAMENTO #

# Tindev
Aplicação desenvolvida na Semana OmniStack 8.0, oferecido pela Rockeseat. 


## Sobre o projeto
A aplicação foi desenvolvida com a proposta de ajudar desenvolvedores encontrarem outros com os mesmos interesses para trabalharem juntos. Para utilizar a aplicação o único pré requisito é ter uma conta no github e entrar com seu usuário para começar a procurar outros devs.


## Stack 
* [MongoDB](https://www.mongodb.com/) - The database for modern applications
* [React](https://reactjs.org) - The front-end framework
* [React Native](https://facebook.github.io/react-native/) - The mobile framework
* [Node JS](https://nodejs.org) - The back-end framework
* [Yarn](https://yarnpkg.com/pt-BR/) - Package Manager

## Preparando o ambiente
**Clone o projeto**

`git clone git@github.com:tamirisapbonicenha/semana-omnistack8.0.git`

**Crie um arquivo**

`.env` na raiz do projeto ou renomeie o arquivo exemplo `.env_sample` para `.env`.


**Instale as dependências do backend**

Dentro da pasta backend rode: `yarn start`

**Instale as dependências do frontend**

Dentro da pasta backend rode: `yarn start`

**Para rodar o servidor**
- Dentro de backend rode: yarn dev.

**Para rodar o frontend**
- Dentro de frontend rode: yarn start.

**Para rodar o mobile**
- Dentro de mobile rode: yarn react-native run-ios.


# RESTful API

A **API** da aplicação possui três **endpoints**:


|Method|URI|Status Code|Response|
|-------|-------|-------|-------|
|POST|`http://localhost:3333/api/v1/beers`|201|Beer create successfully!|
|PUT|`http://localhost:3333/api/v1/beers/<int:beer_id>`|200|Beer update successfully!|
|DELETE|`http://localhost:3333/api/v1/beers/<int:beer_id>`|202|Beer delete successfully!|


#### Payloads

**GET:**
`http://localhost:3333/devs`

