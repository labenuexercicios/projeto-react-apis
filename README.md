<img src="https://user-images.githubusercontent.com/29473781/180619084-a56960ab-7efa-4e34-9d33-4e3e581d62ff.png"/>

# **Introdução**

O seguinte projeto apresenta um modelo de pokedéx como uma "vitrine" digital contendo informações sobre uma determinada quantidade de pokémons, criaturas parte da série de jogos e animes japneses do mesmo nome.

A [Poke Api](https://pokeapi.co/ "Poke Api") fora utilizada como fonte de dados para a criação deste projeto. 

Para visualizar o projeto, acesse o link de deploy na plataforma "Surge": misty-blue.surge.sh

# **Composição**

Elaborada inteiramente em React JS, esta pokedex contém os vinte e quatro primeiros pokémons e conta com três páginas:

**Home**: Página principal do projeto, faz a renderização inicial de um card para cada pokémon requisitado, sendo um total de vinte e quatro cards. Estes cards contém a imagem do pokémon e informações sobre o nome, id e tipo(s) que ele possui. Além disso, existem dois botões na parte inferior do card: um link que redireciona o usuário para a página de detalhes respectiva do pokémon e um que permite que o pokémon seja "capturado" ou excluído da pokedéx no localStorage.
<br>
<img src="https://i.ibb.co/3YGys1X/image.png"/>
<br>
**Pokedéx**: Semelhante a página home, porém apenas pokémons "capturados" serão renderizados, pois ela usará as informações do item "pokedex" salvo no localStorage para aplicaro método de renderização dos cards. O card conta apenas com o botão de excluir da pokedex, pois uma vez removido, ele se torna incapaz de reaparecer na página até que seja capturado novamente.
<br>
<br>
**Detalhes**: Na página final, é exibida uma seção contendo mais informações relevantes sobre o pokémon selecionado. Aqui, é possível ver os sprites (imagens de como o pokémon é exibido dentro do jogo "Pokémon Black"), seus status de batalha e quatro movimentos que ele é capaz de utilizar. Sempre que o link "detalhes" for clicado em um card, uma nova página será criada com o mesmo caminho, mas contendo o pokémon respectivo ao card. Caso o pokémon já esteja inserido na pokedéx, haverá um botão no header dando a opção de removê-lo. Caso contrário, um botão redirecionando o usuário a sua pokedex será exibido no lugar.
<br>
<br>
O projeto conta com uma versão para desktops e uma mobile.

### Página home

<img src="https://i.ibb.co/MpPx95T/image.png"/>

### Página Pokedex

<img src="https://i.ibb.co/6BFwN5J/image.png"/>

### Página Detalhes

<img src="https://i.ibb.co/KsBrrx7/image.png"/>
