## Aluno: Arthur Trevizani Buback
## Disciplina: Programação Avançada para WEB
## Turma: CC5Mb
## Docente: Wagner de Andrade Perin

### Backend e Frontend
Este trabalho foi separado em 2 partes a fim de garantir uma melhor separação e execução do código.

**Backend:** Aplicação realizada na entrega do trabalho do Primeiro Bimestre

**Frontend:** Aplicação realizada na entrega do trabalho do Segundo Bimestre

## Execução:
Primeiramente, após realizar a instalação dos arquivos deste repositório, utilize "**npm install**" para instalar os arquivos faltantes.

Após isso, utilize o comando "**npm run dev**" para tornar possível a visualização.

Essa visualização acontece em "**http://localhost:3000**" em seu navegador.

Após acessar, la estará a página incial, com algumas informações introdutivas a respeito da aplicação, junto de um botão que redirecionará para a próxima página.

Para poder acessar e utilizar efetivamente, deve ser utilizado um login correto, que ja está preenchido; para isso, utilize as seguintes credenciais:

Em **Usuário:**, preencha: "**Arthur**"

Em **Senha:**, preencha: "**Abcd@1234**"

Após o preenchimento correto e validação, clique em "**Acessar**".

Por fim, acessamos as informações armazenadas de fato, onde estão informados todos os produtos armazenados na API, com seus nomes e quantidades, separados por categorias, com uma categoria geral mostrando todos os produtos sem distinção.










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

Abra [http://localhost:3000](http://localhost:3000) no seu navegador de preferência. Nessa página será mostrado a página incial, onde é feita a introdução da aplicação e logo após uma navegação que direciona para página de login.

## Página de *Login*

Após efetuar a navegação para o login, suas credências serão pedidas para que ocorra a autentificação acossiada com o backend antes de acessar a página com a listagem dos produtos.
Para que essa autentificação ocorra corretamente basta inserir as seguintes informações:

*Usuário:* `Maria` <br>
*Senha:* `Abcd@1234` <br>
Fazer o check do admin. <br>

Ao clicar no botão de acessar a navegação é validada de acordo com os parâmetros já estabelecidos no backend e é feito o fetch dos produtos presentes na API.

## Página de *Produtos*
Chegando na página de produtos temos a listagem com as informações dos mesmos, tais como **nome** e **quantidade** .Onde na opção **Todos** são listados todos produtos que existem na API, e logo após tem as opções de categorias da API onde, ao clicar, lista apenas os produtos que estão dentro da categoria selecionada. Sendo elas: *Frutas*, *Legumes*, e *Liquidos*.
