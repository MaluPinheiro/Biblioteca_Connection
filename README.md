## Alunos: Arthur Trevizani Buback & Maria Luiza Pinheiro
## Disciplina: Programação Avançada para WEB
## Turma: CC5Mb
## Docente: Wagner de Andrade Perin

### Backend e Frontend
Este trabalho foi separado em 2 partes a fim de garantir uma melhor separação e execução do código.

**Backend:** Aplicação realizada na entrega do trabalho do Primeiro Bimestre

**Frontend:** Aplicação realizada na entrega do trabalho do Segundo Bimestre


Esse é um projeto [Next.js](https://nextjs.org/) com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Começando

Baixe os arquivo do github e faça a instalação do node_modules: 
```bash
npm install
```

Depois, rode o servidor:
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador de preferência. Nessa página será mostrado a página incial, onde é feita a introdução da aplicação e logo após uma navegação que direciona para a página de cadastro ou para a página de login.


## Página de *Cadastro*

Caso selecione a opção de cadastro, é necessário preencher com as credências necessárias para um registro efetivo no backend.
Para isso, registre:

*Usuário:* `NomeDesejado` <br>
*Senha:* `SenhaDesejada` <br>
Se a conta é admin ou não. <br>

Após isso, o registro no backend é realizado e o usuário é redirecionado ao login.


## Página de *Login*

Após efetuar a navegação para o login, suas credências serão pedidas para que ocorra a autentificação acossiada com o backend antes de acessar a página com a listagem dos livros.
Para que essa autentificação ocorra corretamente basta inserir as seguintes informações:

*Usuário:* `Maria` <br>
*Senha:* `Abcd@1234` <br>
Fazer o check do admin. <br>

Ao clicar no botão de acessar a navegação é validada de acordo com os parâmetros já estabelecidos no backend e é feito o fetch dos livros presentes na API.

## Página de *Livros*
Chegando na página de livros temos a listagem com as informações dos mesmos, tais como **nome**, **quantidade** e **Autor**. Onde na opção **Todos** são listados todos livros que existem na API, e logo após tem as opções de categorias da API onde, ao clicar, lista apenas os livros que estão dentro da categoria selecionada. Sendo elas: *Romance*, *Infantil*, e *Religioso*. Paralelamente, também existe a opção **Cadastrar Livros**, que redireciona para a página de preenchimento de dados.


## Página de *Cadastro Livro*
Nesta página, é efetuado o preenchimento de dados para cada livro. Devem ser informados o **Título**, **Quantidade**, **Gênero**, **Autor** e o **Ano**. Após esse preenchimento, esses dados são transferidos para a API, separados novamente por categorias.
