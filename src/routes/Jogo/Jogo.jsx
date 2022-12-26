import React, { useEffect, useState } from 'react';
import './Jogo.css'
import Pokebola from '../../assets/pokebola2.png'
import Modal from 'react-modal'
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'

const Jogo = () => {
    function getInitialState() {
        const state = {};
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                state[`${r}-${c}`] = null;
            }
        }
        return state;
    }
    const [personagem, setPersonagem] = useState()
    const [personagem2, setPersonagem2] = useState()
    const [personagem3, setPersonagem3] = useState('O')
    const [personagem4, setPersonagem4] = useState('X')
    const getKeyFromIndex = (index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        return `${row}-${col}`;
    };

    const getLabel = (value) => {
        if (!value) {
            return null;
        }
        return value > 0 ? personagem3 || personagem2 && <img className='imgPokes' src={personagem['sprites']['other']['official-artwork']['front_default']} /> :
            personagem4 || personagem2 && <img className='imgPokes' src={personagem2['sprites']['other']['official-artwork']['front_default']} />;
    };

    function getWinner(v) {
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                const sumRow =
                    v[`${r}-${c}`] +
                    v[`${r}-${c + 1}`] +
                    v[`${r}-${c + 2}`];
                if (sumRow === 3 || sumRow === -3) {
                    return sumRow;
                }

                const sumCol =
                    v[`${r}-${c}`] +
                    v[`${r + 1}-${c}`] +
                    v[`${r + 2}-${c}`];
                if (sumCol === 3 || sumCol === -3) {
                    return sumCol;
                }

                const sumDiagonal =
                    v[`${r}-${c}`] +
                    v[`${r + 1}-${c + 1}`] +
                    v[`${r + 2}-${c + 2}`];
                if (sumDiagonal === 3 || sumDiagonal === -3) {
                    return sumDiagonal;
                }

                const sumReverseDiagonal =
                    v[`${r}-${c}`] +
                    v[`${r + 1}-${c - 1}`] +
                    v[`${r + 2}-${c - 2}`];
                if (
                    sumReverseDiagonal === 3 ||
                    sumReverseDiagonal === -3
                ) {
                    return sumReverseDiagonal;
                }
            }
        }

        return null;
    }

    const [values, setValues] = useState(getInitialState);
    const [player, setPlayer] = useState(1);
    const [winner, setWinner] = useState(null);

    function handleClick(key) {
        if (winner || values[key]) {
            return;
        }
        const newValues = {
            ...values,
            [key]: player
        };
        setValues(newValues);
        setPlayer(player * -1);
        const newWinner = getWinner(newValues);

        if (newWinner) {
            setWinner(newWinner > 0 ? 1 : -1);
        }
    }

    function reset() {
        setWinner(null);
        setValues(getInitialState);
        setPlayer(1);
    }

    const itsATie =
        Object.values(values).filter(Boolean).length === 9 &&
        !winner;

    //Parte do Contexto

    const context = useContext(GlobalContext)
    const {
        pokedex,
        modalOpen,
        closeModalCapturar,
        openModalCapturar,
    } = context
    const customStyle2 = {
        content: {
            top: '50%',
            left: '50%',
            bottom: 'auto',
            right: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: '12px',
            backgroundColor: 'gray',
            border: '4px solid black'
        }
    }
    const onChangeSelect = (e) => {
        setPersonagem2(e.target.value)
    }
    const onChangeSelect2 = (e) => {
        setPersonagem(e.target.value)
    }

    //Fazer requisição com a mudança de estado, de acordo com o pokemon escolhido

    const fetchJogo = async (url) => {
        const APIResponse = await fetch(url)
        const data = await APIResponse.json()
        setPersonagem4("")
        setPersonagem2(data)
    }
    useEffect(() => {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${personagem2}`
        fetchJogo(pokemonUrl)
    }, [personagem2])
    const fetchJogo2 = async (url) => {
        const APIResponse = await fetch(url)
        const data = await APIResponse.json()
        setPersonagem3("")
        setPersonagem(data)
    }
    useEffect(() => {
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${personagem}`
        fetchJogo2(pokemonUrl)
    }, [personagem])

// Voltar pra Home
    const navigate = useNavigate()
    const goToPokedex = () => {
        navigate("/")
      }
// Voltar ao padrão inicial 
   function resetarAoPadrao () {
      setPersonagem3("O")
      setPersonagem4("X")
   }
    return (
        <div className='Container'>
            <button onClick={goToPokedex} className='voltarHome'>Todos os pokémons</button>
            <div className="Game">
                <div className='titulo'><h1> Jogo da Velha </h1></div>
                <div className="GameBoard">
                    {Array.from({ length: 9 }).map((_, index) => {
                        const key = getKeyFromIndex(index);
                        return (
                            <button
                                key={index}
                                type="button"
                                onClick={() => handleClick(key)}
                            >
                                {getLabel(values[key])}
                            </button>
                        );
                    })}
                </div>
                {(winner || itsATie) && (
                    <div className="GameMenu">
                        {winner ? (
                            <p className='ganhador'>O ganhador é: {winner > 0 ? 'Jogador 1' : 'Jogador 2'}</p>
                        ) : (
                            <p className='ganhador'>Houve um empate</p>
                        )}
                        <button className='resetar' onClick={reset}>Reiniciar</button>
                    </div>
                )}
            </div>
            <div className='pokebola'>
                <h2 className='personagem'>Personagens</h2>
                <p className='seta'>⬇️</p>
                <img className='imgPokebola' src={Pokebola} onClick={() => openModalCapturar()} />
            </div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={closeModalCapturar}
                style={customStyle2}
            >
                <div className='titleModal'>
                    <h1>Todos os pokémons capturados</h1>
                </div>
                <div className="alinharPadrao">
                <button className='padraoInicial' onClick={()=> resetarAoPadrao()}>O | X</button>
                </div>
                <div className='modal'>
                    <div className='divsJogadores'>
                        <label htmlFor='select1' className='labelJogador'>Jogador 2</label>
                        <select onChange={onChangeSelect}>
                            {pokedex && pokedex.map((pokes) => {
                                return <option value={pokes.name} key={pokes.name}>{pokes.name.charAt(0).toUpperCase() + pokes.name.slice(1)}</option>
                            })}
                        </select>
                    </div>
                    <div className='divsJogadores'>
                        <label htmlFor='select1' className='labelJogador2'>Jogador 1</label>
                        <select onChange={onChangeSelect2} id='select1'>
                            {pokedex && pokedex.map((pokes) => {
                                return <option value={pokes.name} key={pokes.name}>{pokes.name.charAt(0).toUpperCase() + pokes.name.slice(1)}</option>
                            })}
                        </select>
                    </div>
                </div>
                    <p className='OBS'>OBS: A Pokédex deve ter no mínimo 2 pokémons capturados!</p>
            </Modal>
        </div>
    );
};

export default Jogo
