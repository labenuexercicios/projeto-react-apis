#  - Lidia Yamamura - 
### Veja o site: 
<img src='./src/assets/favicon.ico' alt='pokebola' style='width: 20px'> [**Pokédex** - pelo surge](https://pokedex-lidia-yamamura.surge.sh/)
<br>
<br>

# Projeto React e API's
O Projeto React e APIs é um site de pokémons que possui três páginas principais: <a href='#home'> Home, </a><a href='#pokedex'>Pokédex, </a><a href='#detalhes'>Detalhes</a>.

Este projeto teve como fonte de dados para a sua criação a [Poke Api](https://pokeapi.co/ "Poke Api").
<br>
<br>

## **Tecnologias Utilizadas:**

- React
- React Router
- React Context
- Framer Motion
- Criação de hooks
- Integração de APIs - Axios
- Design Systems -  [Chakra](https://chakra-ui.com/ "Chakra UI")
- Local Storage
- Responsividade

<br>

# <img src='./src/assets/favicon.ico' alt='pokebola' style='width: 30px'> **Pokedéx**
O projeto consiste em:
- **Gerais:**
	- O site tem 3 páginas principais: Home, Pokédex, Detalhes;
	- Mais 2 páginas extras: Erro e 'Easter Egg';
	- Contém uma página de erro que é redirecionado caso ocorra um erro.	
	- Contém uma página 'Easter Egg' que é aberta quando no mínimo 10 Pokémons são capturados.	
	- O projeto segue o [design](https://www.figma.com/file/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?t=AEi3zEmWmarf1FbP-0 "design") proposto;
	- O fluxo de trocas de páginas é semelhante ao [fluxograma](https://www.figma.com/proto/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?page-id=0%3A1&node-id=2%3A2&viewport=358%2C197%2C0.27&scaling=scale-down&starting-point-node-id=2%3A2 "fluxograma");	
	- **Atenção!!** Como as páginas foram criadas pensando na responsividade, dependendo do tamanho da tela, o design muda um pouco. O botão do header na página de detalhes foi posicionado mais abaixo, pro botão Pokedéx permanecer no header, melhorando a experiência do usuário ao poder retornar a Pokédex,  assim como ver a quantidade de pokémons capturados. 

- **Página Home:**
	- Cada Pokémon é representado por um Card;
	- Contém uma lista de Pokémons, que dependendo do tamanho na tela, muda a quantidade de cards mostrados em cada página;
	- Em cada card contém  um botão para tentar capturar o Pokémon que o adiciona a sua Pokédex e outro para acessar os detalhes do Pokémon;
	- Contém 2 filtros, onde é possível filtrar pelo tipo do Pokémon e no outro ordená-los na ordem Crescente ou Decrescente de acordo com os nomes de cada um;
	- No Header tem um input de busca pelo nome e um botão para acessar a página da Pokédex, para telas menores, como no celular, o Botão para acessar a Pokedéx e o input de busca, se encontram mais abaixo da página;
	- No Header tem um botão para mudar o tema de claro para escuro;
	- Quando um Pokémon é capturado, o card é retirado da Home e passa para a página da Pokédex;
	- **Atenção!!** Foi adicionado uma chance de captura para cada Pokémon, a chance foi baseada no 'capture rate' de cada Pokémon contido na API.

- **Página Pokédex:**
	- Contém um Botão, onde é possível excluir todos os seus Pokémons da Pokédex;
	- Contém cards de Pokémons, com a lista de Pokémons capturados;
	- Em cada card tem um botão para removê-lo da Pokedex e um outro para acessar os detalhes do Pokémon;
	- Contém 2 filtros, onde é possível filtrar pelo tipo do Pokémon e no outro ordená-los na ordem Crescente ou Decrescente de acordo com os nomes de cada um;
	- No Header tem um botão para voltar para a Home e um input de busca pelo nome, para telas menores, como no celular, o input de busca se encontra mais abaixo da página, junto dos outros filtros e o Título "Pokémon" se torna o botão para retornar a Home;
	- No Header tem um botão para mudar o tema de claro para escuro;
	- Quando um Pokémon é excluído, o card é retirado da Pokédex e passa para a página da Home.

- **Página de Detalhes:**
	- Mostra os detalhes do Pokémon selecionado, com informações descritas;	
	- No Header tem 2 botões, um para voltar para Home e outro pra ir pra página da Pokedéx, para telas menores, como no celular, o Título "Pokémon" se torna o botão para retornar a Home e o botão para ir para a Pokédex se encontra mais abaixo, logo após o Header;
	- No Header tem um botão para mudar o tema de claro para escuro.
	- Contém um botão para capturar ou removê-lo da Pokedéx;
	- Os favicons são atualizados de acordo com o Pokémon que você está vendo os detalhes;
	- Abaixo dos detalhes,  contém dois botões, um para voltar o pokémon anterior e outro pra ir pro próximo;
	- **Atenção!!** Foi adicionado uma chance de captura para cada Pokémon, a chance foi baseada no 'capture rate' de cada Pokémon contido na API.

- **Página de Erro:**
	- Contém um botão para retornar a Home;

- **Página Easter Egg:**
	- Contém um botão para retornar a Home e um para retornar a Pokédex;
	- É acessível através de um botão escondido no Pokedéx, que aparece após a captura de 10 pokémons ou quando um alert é aberto após capturar 10 pokémons.
	- A página contém um jogo de memória, onde o objetivo é juntar os pares de pokémons.
	- A quantidade de pokémons para cada rodada é gerada aleatóriamente, somente os Pokémons capturados podem participar do jogo.
	- **Atenção!!** A página só estará disponível após serem capturados no mínimo 10 pokémons.
<br>
<br>

## O layout da página:

![](https://github.com/RinoaYK/projeto-react-apis/blob/main/Pokedex.gif)
