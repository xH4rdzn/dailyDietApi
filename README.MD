# Daily Diet API

- Nesse desafio proposto pela [Rocketseat](https://www.rocketseat.com.br/), vamos fazer uma API em ***NODE***, para controle de refeições;

### Ferramentas Utilizadas
- [Fastify](https://fastify.dev/)
- [Knex](https://knexjs.org/)
- [Sqlite](https://www.sqlite.org/)
- [Zod](https://zod.dev/)
- [Biome](https://biomejs.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [Insomnia](https://insomnia.rest/)
- [Vitest](https://vitest.dev/)
- [Supertest](https://github.com/ladjs/supertest)
- [TSX](https://tsx.is/)
- [DotEnv](https://github.com/motdotla/dotenv)


## Regras da aplicação
- [x] Deve ser possível criar um usuário
- [x] Deve ser possível identificar o usuário entre as requisições
- [x] Deve ser possível registrar uma refeição feita, com as seguintes informações:
  - Nome
  - Descrição
  - Data e Hora
  - Está dentro da dieta ou não
- [x] Deve ser possível editar uma refeição, podendo alterar todos os dados acima
- [x] Deve ser possível apagar uma refeição
- [x] Deve ser possível listar todas as refeições de um usuário
- [x] Deve ser possível visualizar uma única refeição
- [x] Deve ser possível recuperar as métricas de um usuário
  - Quantidade total de refeições
  - Quantidade total de refeições dentro da dieta
  - Quantidade total de refeições fora da dieta
  - Melhor sequência de refeições dentro da dieta
- [x] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou

## Screenshots

##### Criação de um usuário
![Criação de um usuário](./assets/createUser.png)

##### Criação de uma refeição pelo mesmo usuário
![Criação de uma refeição pelo mesmo usuário](./assets/createMealsBySameUser.png)

##### Criação de uma refeição por um usuário diferente do identificado via cookies
![Criação de uma refeição por um usuário diferente do identificado via cookies](./assets/createMealsDifferentUser.png)

##### Listando todas as refeições de um usuário
![Listando todas as refeições de um usuário](./assets/ListAllMeals.png)

##### Listando todas as refeições de um usuário, diferente do identificado via cookies
![Listando todas as refeições de um usuário, diferente do identificado via cookies](./assets/ListAllMealsDiffrentUser.png)

##### Verificando uma refeição especifica
![Verificando uma refeição especifica](./assets/meal.png)

##### Editando uma refeição
![Verificando uma refeição especifica](./assets/editMeal.png)
###### Resultado
![resultado](./assets/editMealResult.png)

##### Métricas
![Métricas](./assets/resume.png)