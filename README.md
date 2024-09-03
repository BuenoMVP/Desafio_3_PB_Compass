
# Desafio 3 - Site Trisog

## Descrição

Este projeto é uma aplicação web que permite aos usuários utilizar uma plataforma de viagens. O sistema é composto por um front-end desenvolvido em React com TypeScript, um back-end em Node.js com Express, TypeScript, e um banco de dados MongoDB. O projeto inclui autenticação de usuários, proteção de rotas, vizualização e filtragens para as viagens.


## Como utilizar o projeto

### 1. Instalação de dependências
Utilize o comando npm i dentro do terminal da pasta do projeto.

### 2. Trocar credenciais de acesso do MongoDB
Dentro do arquivo connectDB.ts, na pasta config do backend, troque a chave de conexão na linha de código await mongoose.connect('coloque-aqui-sua-chave-com-senha') para conseguir arazenar os dados.

### 3. Conmpilar backend
Após a instalação das dependências utilize o comando ```npm run build``` no terminal do projeto para compilar o Backend.

### 4. Iniciar backend
Após a compilação ser concluida, utilize o comando ```npm run back``` no terminal do projeto para iniciar o Backend.

### 5. Iniciar Frontend
Após a instalação das dependências utilize o comando ```npm run dev``` no terminal do projeto para iniciar o Frontend.

### 6. Rota do navegador
Entre na rota http://localhost:5173/ no seu navegador para poder utilizar a aplicação


## Funcionalidades

### Autenticação de Usuários
- Login obrigatório para acessar as rotas protegidas.
### Tela Home
- Página inicial com informações gerais sobre as viagens. Possui um slider que contem cards de acesso para os detalhes dos tuors (necessário estar logado para acessar).
- Formulário não-funcional para filtragem das viagens.
### Tela Tuors
- Cards de todas as viagens cadastradas no BD.
- Possível filtrar os dados com título, preço, categoria e país.
- Possível ordenar os registros exibidos por título e preço.
- Paginação vida diretamente do back.
### Tela de Detalhes
- Cálculo de preço seguindo o preço por pessoa do tuor.
- Exibição da localização do destino com google maps.
- Exibição das notas médias dadas pelos usuários.
- Exibição dos comentários feitos por outros usuários.
- Possível criar um comentário (e de forma anonima).
### API
- Todas as funcionalidades consomem a API desenvolvida em Node com TypeScript, sem persistência de dados no front-end.


## Tecnologias Utilizadas
### Front-end
- React com TypeScript.
### Back-end
- Node com Express e TypeScript.
### Banco de Dados
- MongoDB.
### Autenticação
- Firebase Authentication.


## Aprendizados

Este desafio foi o maior projeto que desenvolvi até o momento. Ao longo das duas ultimas semanas, aprofundei meus conhecimentos de Typescript, NodeJS, MongoDB e Firebase aplicando os conceitos teóricos da trilha na prática. O planejamento das atividades e a capacidade de encontrar soluções de forma eficiente foram pontos essênciais para superar os obstáculos encontrados e garantir a qualidade da entrega. Por fim, gostaria de exaltar o orgulho que sinto por todas as funcionalidades que consegui entregar, mesmo não tendo nenhum tipo contato prático antes com a maior parte das tecnologias.


## Autor

- [@BuenoMVP](https://github.com/BuenoMVP)

