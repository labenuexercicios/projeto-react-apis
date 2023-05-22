# Projeto Pokédex - Front-end

![Pokedex](https://th.bing.com/th/id/OIP.7R4-AST_uPMAz7yCiBDiUQHaEq?pid=ImgDet&rs=1)


Pokedex apresentando página de lista de Pokémons, com 20 cards individuais estilizado de acordo com o tipo dos Pokémons, com botão de detalhes e adicionar; Pokédex, mostrando os cards dos Pokémons que foram adicionados na página de lista ; e Detalhes, mostrando uma página com uma imagem maior do Pokémon selecionado, duas imagens pixelizadas, golpes e estatísticas daquele Pokémon.

Projeto feito como pré-requisito para conclusão do módulo Front-end da Labenu.

## Índice:
- <a href='#funcoes'> Funções do Projeto 
- <a href='#layout'> Layout
- <a href='#demo'> Demonstração
- <a href='#rodar'> Como rodar este projeto?
- <a href='#techs'> Tecnologias utilizadas
- <a href='#autor'> Autor
- <a href='#next'> Próximos passos



# Funcionalidade do Projeto

## Gerais:
-[x] O site deve ter 3 páginas: Home, Pokedex e Detalhes;

-[x] Projeto deve seguir o design proposto;

-[x] O fluxo de trocas de páginas devem ser semelhante ao fluxograma;
## Página Home:
-[x] Mostrar uma lista de Pokemons, contendo ao menos 20 Pokemons;

-[x] Cada Pokemon será representado por um Card;

-[x] Em cada card de Pokemon tem um botão para adicioná-lo à Pokedex e um outro botão para acessar os detalhes do Pokemon;

-[x] Header dessa página terá um botão para acessar a página da Pokedex;

## Página Pokédex:
-[x] Renderizar a lista de pokémons adicionados na pokedex;

-[x] Em cada card de Pokemon deve ter um botão para removê-lo da Pokedex e um outro botão para acessar os detalhes do Pokemon.

-[x] Header deve ter um botão para voltar para a Home;

-[x] Não deve ser possível adicionar o mesmo Pokemon duas vezes na Pokedex;

## Página de Detalhes:
-[x] Mostrar os detalhes do Pokemon selecionado, com informações descritas;

-[x] Header deve ter um botão para adicionar ou remover da Pokedex e outro para voltar a página home.

-[x] Criar um readme para o projeto;

# Layout
O layout de referência está disponível no link do <a href='https://www.figma.com/file/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?type=design&node-id=2-2&t=G7HNehWZz81SiyLB-0'> Figma(clique em mim!).


# Demonstração

[Surge](garr-pokedex.surge.sh)

[Gitpages]()

# Como rodar esse projeto?

```bash
# Clone este repositório
$ git clone https://github.com/garrcastro/projeto-react-apis.git

# Acesse a página do projeto no seu terminal
$ cd pokedex

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run start

# A aplicação será iniciada na porta 3000, acesse pelo navegador:
http://localhost:3000
```
# Tecnologias utilizadas 
1. React
2. React Router
3. Styled Components
4. Axios
5. Figma
6. API Pokeapi

# Autor

Gabriel Castro

[LinkedIn](https://www.linkedin.com/in/garrcastro/) 

[Instagram](https://www.instagram.com/gabriologic/)

# Próximos passos

1. React Context
2. Design System
3. Responsividade
4. Função Filtro
5. Função Busca
6. Refatoração do código