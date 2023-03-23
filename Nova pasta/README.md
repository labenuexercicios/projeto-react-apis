#  - Lidia Yamamura - 
### Veja o site: 
<img src='./src/assets/favicon.ico' alt='pokebola' style='width: 20px'> [**Pokédex** - pelo vercel](https://pokeapi.co/ "Poke Api")
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
- Criação de hooks
- Integração de APIs - Axios
- Design Systems -  [Chakra](https://chakra-ui.com/ "Chakra UI")
- Local Storage
- Responsividade

<br>

# <img src='./src/assets/favicon.ico' alt='pokebola' style='width: 30px'> **Pokedéx**
O projeto consiste em:
- **Gerais:**
	- O site tem 3 páginas principais: Home, Pokédex e Detalhes;
	- Contém uma página de <a href='#detalhes'>erro</a> que é redirecionado caso ocorra um erro.	
	- O projeto segue o [design](https://www.figma.com/file/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?t=AEi3zEmWmarf1FbP-0 "design") proposto;
	- O fluxo de trocas de páginas é semelhante ao [fluxograma](https://www.figma.com/proto/KseyA2Ofghiek2Cy3ZaDre/Poked%C3%A9x?page-id=0%3A1&node-id=2%3A2&viewport=358%2C197%2C0.27&scaling=scale-down&starting-point-node-id=2%3A2 "fluxograma");	
	- **Atenção!!** Como as páginas foram criadas pensando na responsividade, dependendo do tamanho da tela, o design muda um pouco.
<br>
<br>
- <a name="home"><b>Página Home: </a>
	- Cada Pokémon é representado por um Card;
	- Contém uma lista de Pokémons, que dependendo do tamanho na tela, muda a quantidade de cards mostrados em cada página;
	- Em cada card contém  um botão para tentar capturar o Pokémon que o adiciona a sua Pokédex e outro para acessar os detalhes do Pokémon;
	- Contém 2 filtros, onde é possível filtrar pelo tipo do Pokémon e no outro ordená-los na ordem Crescente ou Decrescente de acordo com os nomes de cada um;
	- No Header tem um input de busca pelo nome e um botão para acessar a página da Pokédex, para telas menores, como no celular, o Botão para acessar a Pokedéx e o input de busca, se encontram mais abaixo da página;
	- No Header tem um botão para mudar o tema de claro para escuro;
	- Quando um Pokémon é capturado, o card é retirado da Home e passa para a página da Pokédex;
	- **Atenção!!** Foi adicionado uma chance de captura para cada Pokémon, a chance foi baseada no 'capture rate' de cada Pokémon contido na API.
<br>
<br>
- <a name="pokedex"><b>Página Pokédex: </a>
	- Contém um Botão, onde é possível excluir todos os seus Pokémons da Pokédex;
	- Contém cards de Pokémons, com a lista de Pokémons capturados;
	- Em cada card tem um botão para removê-lo da Pokedex e um outro para acessar os detalhes do Pokémon;
	- Contém 2 filtros, onde é possível filtrar pelo tipo do Pokémon e no outro ordená-los na ordem Crescente ou Decrescente de acordo com os nomes de cada um;
	- No Header tem um botão para voltar para a Home e um input de busca pelo nome, para telas menores, como no celular, o input de busca se encontra mais abaixo da página, junto dos outros filtros e o Título "Pokémon" se torna o botão para retornar a Home;
	- No Header tem um botão para mudar o tema de claro para escuro;
	- Quando um Pokémon é excluído, o card é retirado da Pokédex e passa para a página da Home.
<br>
<br>
- <a name="detalhes"><b>Página de Detalhes: </a>
	- Mostra os detalhes do Pokémon selecionado, com informações descritas;	
	- No Header tem 2 botões, um para voltar para Home e outro pra ir pra página da Pokedéx, para telas menores, como no celular, o Título "Pokémon" se torna o botão para retornar a Home e o botão para ir para a Pokédex se encontra mais abaixo, logo após o Header;
	- No Header tem um botão para mudar o tema de claro para escuro.
	- Contém um botão para capturar ou removê-lo da Pokedéx;
	- **Atenção!!** Foi adicionado uma chance de captura para cada Pokémon, a chance foi baseada no 'capture rate' de cada Pokémon contido na API.
<br>
<br>
- <a name="erro"><b>Página de Erro: </a>
	- Contém um botão para retornar a Home;

<br>
<br>

## O layout da página:

![](https://github.com/RinoaYK/projeto-frontendreact/blob/main/LabEcommerceP.gif)
https://github.com/RinoaYK/projeto-frontendreact/blob/main/LabEcommerce.mp4


### Instruções de entrega

- Faça o fork desse repositório e realize o clone da sua cópia `seu-nome-de-usuario/projeto-intro-web`.
   <details>
   <summary>Quer uma dica?</summary>
   <img src="https://firebasestorage.googleapis.com/v0/b/assets-conteudo.appspot.com/o/gerais%2Ffork.png?alt=media&token=7030e997-246a-41fe-a75f-2a2ced61e54d" alt="Como adicionar o projeto no repositório"/>
   </details>
- Crie os arquivos do projeto dentro deste repo;
- Execute o fluxo de entrega do git. **Lembre-se de abrir os PRs para seu próprio repositório.**
- Para isso, você precisará fazer o projeto utilizando **branches**. Evite fazer as alterações direto na branch ```main```
    <details>
       <summary>Dúvidas sobre o Git & Github?</summary>
       <p>Adiciomos um vídeo explicando o <strong>processo de entrega</strong> [do fork ao pull request] no Material Assincrono da Aula de <a href="https://estudante.labenu.com.br/conteudos/tecnico/mod1/Git%20e%20Github">Git e Github</a>. Esse vídeo também exemplifica situações que podem acontecer durante o fluxo de utilização do Git.</p>
    </details>
- Faça o deploy do projeto. Pode ser ultilizado o [surge](https://labenu.notion.site/Deploy-de-front-React-com-Surge-f902a03ec1d247dc9af9aee5a1469d96), Github pages ou outra ferramenta que faça a disponibilização do seu site para acesso público;
- Adicionar o link do deploy no readme do seu projeto/repositório:




- Entregue o projeto no [Formulário de entrega](https://docs.google.com/forms/d/e/1FAIpQLSfGGRaglpzWpdREBBfq3eUCMXkRXuiS61Zfyy0L_Ce0uNIXTA/viewform).
