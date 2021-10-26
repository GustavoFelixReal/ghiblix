# Projeto Ghiblix
### Descrição:
O projeto Ghiblix utiliza as [APIs](https://ghibliapi.herokuapp.com/) do Studio Ghibli para listar todos os filmes produzidos pela produtora, além de permitir que o usuário adicione algum filme listado como favorito.

[Página do projeto](https://ghiblix.vercel.app/)

### Screenshots:

<img src="https://i.imgur.com/iHFErvO.png" />

<img src="https://i.imgur.com/vYtxM9z.png" />

<img src="https://i.imgur.com/EfkJAuf.png" />

### Tecnologias usadas:
 - [ReactJS](https://pt-br.reactjs.org/)
 - [NextJS](https://nextjs.org/)
 - [Styled-Components](https://styled-components.com/)
 - [TypeScript](https://www.typescriptlang.org/)

### Páginas principais:
#### _app.tsx
O layout básico da aplicação é gerada no arquivo `_app.tsx`, onde os seguintes componentes são encontrados:
   
`<CustomThemeProvider>`: Provider do hook de temas, que controla os temas **claro** e **escuro**;

`<FavoritesProvider>`: Provider do hook de favoritos, que realiza a leitura dos filmes armazenados no localStorage;

`<Header>`: Cabeçalho da aplicação;

`<Main>`: Container principal da aplicação;

`<Component>`: O componente da página à ser carregada;

`<Footer>`: Rodapé da aplicação;

`<GlobalStyles>`: Estilos globais da aplicação.   

#### index.tsx
Esta página é encarregada de buscar na API a listagem dos filmes do Studio Ghibli, usando o método `getStaticProps`, que carrega estas informações pelo servidor, fornecendo essas informações para o componente `Home()`, que renderiza a listagem dos filmes usando o componente `<FilmList>`.

A tipagem dos elementos trazidos pela API é a seguinte: 

    interface Film {
        id:  string;
	    title:  string;
	    original_title:  string;
	    original_title_romanised:  string;
	    image:  string;
	    movie_banner:  string;
	    description:  string;
	    director:  string;
	    producer:  string;
	    release_date:  string;
	    running_time:  string;
	    rt_score:  string;
	    people:  string[];
	    species:  string[];
	    locations:  string[];
	    vehicles:  string[];
	    url:  string;
    }
   
   ####  favorites.tsx
   Esta página utiliza os dados armazenados no localStorage, utilizando-se do hook `useFavorites()` (mais detalhes abaixo), renderizando-os com o componente `<FilmList>`.
   Esta página permite ainda que o usuário faça a remoção de cada item dos favoritos à qualquer momento, utilizando-se do método `destroyFavorite()`.

#### film/[id].tsx
Esta página é gerada estaticamente em tempo de build, através do método `getStaticPaths` e `getStaticProps`, fornecendo para a página os detalhes do filme selecionado e seus personagens. Ela traz detalhes do filme selecionado; permite que o usuário coloque ou retire o filme dos favoritos; lista detalhes dos personagens.

A tipagem dos personagens do filme é a seguinte:

    interface Person {
	    age:  string;
	    eye_color:  string;
	    films:  string[];
	    gender:  string;
	    hair_color:  string;
	    id:  string;
	    name:  string;
	    species:  string;
	    url:  string;
	}

### Hooks
Este projeto usa hooks para gerenciar as APIs de contexto e disponibilizar métodos para modificar seus dados.

São eles:

#### useCustomTheme
Gerencia o sistema de temas da aplicação, indicando o uso dos temas **escuro** ou **claro**.
Este hook fornece os valores:

 `theme:string` : Tema atual (dark | light);
 
 `createTheme:(theme:'dark'|'light') => void`: Recebe uma string e realiza a troca do tema.

#### useFavorites
Armazena, recupera e gerencia os favoritos que são armazenados no localStorage. Este hook fornece os valores: 

`favorites: Film[]`: Armazena um array de filmes favoritados pelo usuário; 

`createFavorite(favorite: Film)`: Recebe um valor do tipo Film e armazena no localStorage;

`destroyFavorite(favorite: Film)`: Recebe um valor do tipo Film e o retira do localStorage;

### Estilos e Componentização
Os componentes foram construídos para serem reutilizados em diversas partes do projeto. Eles foram separados por categorias: 

**common**: Componentes comuns que não possuem um contexto de uso específico. Ex: botões, etc.;
 **film**: Componentes especializados no contexto dos filmes, que também podem ser reutilizados. Ex: listagem de filmes, botão de favorito (componente botão especializado) etc.;
 **footer**: Componentes que integram o rodapé. Ex: botão de troca de tema (componente botão especializado);
 **header**: Componentes que integram o cabeçalho. Ex: barra de navegação;

Cada categoria é representada por um diretório que contém também sua respectiva folha de estilo do *styled-components* denominada `styled.ts`.

### Considerações finais
Agradeço a oportunidade de fazer parte do vosso processo seletivo. Espero que o projeto desenvolvido venha de acordo com as especificações propostas.


