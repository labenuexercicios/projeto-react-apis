import axios from "axios";
import { useEffect, useState } from "react";
import { getColors } from "../../Utils/CardColor";
import { getTypeImg } from "../../Utils/TypeImg";
import { getMove } from "../../Utils/Move";
import { getWeakRes } from "../../Utils/WeakRes";
import { getCardImg } from "../../Utils/CardImg"
import ModalCatch from "../ModalCatch/ModalCatch"
import "./Card.css";

function Card(props) {
  const { pokemonUrl, addToPokedex, addToCatchList } = props;
  const [cardColor, setCardColor] = useState("");
  const [flipCard, setFlipCard] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [firstStats, setFirstStats] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [xValue, setXValue] = useState(0);
  const [yValue, setYValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [pokemon, setPokemon] = useState({});

  const parallax_el = document.querySelectorAll(".parallax-borderImg, .parallax-imgPokemon");

  useEffect(() => {
    const parallax_el = document.querySelectorAll(".parallax");

    const handleMouseMove = (event) => {
      const xValue = event.clientX - window.innerWidth / 2;
      const yValue = event.clientY - window.innerHeight / 2;

      setXValue(xValue);
      setYValue(yValue);

      parallax_el.forEach((el) => {
        const xScroll = el.getAttribute("data-x-scroll") || 1;
        const yScroll = el.getAttribute("data-y-scroll") || 1;

        if (el.classList.contains('parallax-borderImg')) {
          el.style.transform = `translateX(calc(-50% + ${(-xValue / xScroll) - (el.offsetWidth / xScroll / 2)}px)) translateY(calc(-40% + ${(-yValue / yScroll) - (el.offsetHeight / yScroll / 20)}px))`;
        } else if (el.classList.contains('parallax-imgPokemon')) {
          el.style.transform = `translateX(calc(-50% + ${(-xValue / xScroll) - (el.offsetWidth / xScroll / 2)}px)) translateY(calc(-60% + ${(-yValue / yScroll) - (el.offsetHeight / yScroll / 10)}px))`;
        }
      });
    };
    const intervalId = setInterval(() => {
      window.addEventListener("mousemove", handleMouseMove);
    }, 50);
    return () => {
      clearInterval(intervalId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [xValue, yValue]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get(pokemonUrl);
      setPokemon(response.data);
      if (response.data.types) {
        setCardColor(getColors(response.data.types[0].type.name));
      }
      if (response.data.stats[0].base_stat) {
        setFirstStats(response.data.stats[0].base_stat)
      }
      if (response.data.height && response.data.weight) {
        setHeight(response.data.height)
        setWeight(response.data.weight)
      }
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error);
    }
  };

  function padId(id = 0) {
    return id.toString().padStart(3, '0');
  }

  useEffect(() => {
    const flippedValue = localStorage.getItem(`flipped_${pokemon.id}`);
    if (flippedValue === "true") {
      setFlipCard(true);
    }
  }, [pokemon.id])

  const handleCardClick = () => {
    if (!flipCard) {
      setFlipCard(true);
      localStorage.setItem(`flipped_${pokemon.id}`, "true");
    }
  };

  const handleButtonClick = () => {
    setIsOpen(true);
    setTimeout(() => {
      addToCatchList(pokemon);
    }, 4500);
  };

  return (
    <div>
      <div id="initialCard" className={!flipCard ? 'card flipped' : 'card'} onClick={handleCardClick}>
        <div className="card-front">
          <div className="containerCard" style={{ background: `${cardColor}` }} >
            <div className="border">
              <div className="top">
                <div className="topLeft">
                  <div className="status"><i>BASIC</i></div>
                  <div className="shadowStatus"></div>
                  <div className="name">{pokemon.name ? pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) : ''}</div>
                </div>
                <div className="topRight">

                  <div className="hp">HP</div>
                  <div className="numberHp">{firstStats}</div>
                  <div className="symbolType">
                    {pokemon.types && Array.isArray(pokemon.types) && pokemon.types.map((type, index) => (
                      <img key={type.slot} src={getTypeImg(type.type.name)} alt="" />
                    ))}
                  </div>

                </div>
              </div>
              {getCardImg(pokemon.name)}
              {/* <div>
                <div className="square">
                  <div className="parallax parallax-borderImg" data-speedx="0.2" data-x-scroll="80" data-y-scroll="80">
                  </div>
                </div>
                <img className="parallax parallax-imgPokemon" data-speedx="1" data-x-scroll="200" data-y-scroll="200" src={Bulbasaur} alt={pokemon.name} />
              </div> */}
              <div className="borderBottomImg">
                <div className="description">
                  NO. {padId(pokemon.id)} height: {height}'00" weight: {weight}
                </div>
              </div>
              {getMove(pokemon.name)}
              {pokemon.types && Array.isArray(pokemon.types) && pokemon.types.map((type, index) => (
                <div className="bottomCard">
                  {getWeakRes(pokemon.types[0].type.name)}
                </div>
              ))}
              <div className="bottomCard">
                <div className="bottomDesc">
                  <div className="pokemonData">© 2023 Pokemon</div>
                  <div className="nobu">NOBU ・</div>
                </div>
                <div className="pokeballCatchContainer">
                  <div
                    className={`pokeballCatch ${isHovered ? 'hovered' : ''}`}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="pokeballCatchButton" onClick={handleButtonClick}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-back" onClick={() => addToPokedex(pokemon)}>
          <div className="containerCardBack" onClick={handleCardClick} tabIndex={0}>
            <div className="borderBack"><div className="containerCardBackImg"></div></div>
          </div>
        </div>
      </div>
      <ModalCatch open={isOpen} onClose={() => setIsOpen(false)}>
      </ModalCatch>
    </div>
  );
}

export default Card;
