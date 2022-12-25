import React, { useEffect, useState } from 'react';
import './Jogo.css'
import Img3 from '../../assets/Img3.png'
import Img4 from '../../assets/Img4.png'
import Img5 from '../../assets/Img5.png'
import Img6 from '../../assets/Img6.png'
import Pokebola from '../../assets/pokebola2.png'
import Modal from 'react-modal'
import { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalContext'


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
    const [personagem, setPersonagem] = useState('O')
    const [personagem2, setPersonagem2] = useState('X')
    const getKeyFromIndex = (index) => {
        const row = Math.floor(index / 3);
        const col = index % 3;
        return `${row}-${col}`;
    };
    
    const getLabel = (value) => {
        if (!value) {
            return null;
        }
        return value > 0 ? <p>{personagem}</p> : <p>{personagem2}</p>;
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
        }
    }
    return (
        <div className='Container'>
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
                <div className='modalBox'>
                <div className='modal'>
                       <h3>Jogador 1</h3>
                      <div className='cadaPokeModal'><p>Bulbasaur</p><button className='btnSelect' onClick={()=>setPersonagem(<img className='imgPokes' src={Img3}/>)}>+</button></div>
                      <div className='cadaPokeModal'><p>Pikachu</p><button className='btnSelect'onClick={()=>setPersonagem(<img className='imgPokes' src={Img4}/>)}>+</button></div>
                      <div className='cadaPokeModal'><p>wigglytuff</p><button className='btnSelect' onClick={()=>setPersonagem(<img className='imgPokes' src={Img6}/>)}>+</button></div>
                      <div className='cadaPokeModal'><p>Butterfree</p><button className='btnSelect' onClick={()=>setPersonagem(<img className='imgPokes' src={Img5}/>)}>+</button></div>
                      <div className='cadaPokeModal'><p>X</p><button className='btnSelect' onClick={()=>setPersonagem('X')}>+</button></div>
                </div>
                <div className='modal'>
                      <h3>Jogador 2</h3>
                      <div className='cadaPokeModal'><p>Bulbasaur</p><button className='btnSelect' onClick={()=>setPersonagem2(<img className='imgPokes' src={Img3}/>)}>+</button></div>
                      <div className='cadaPokeModal'><p>Pikachu</p><button className='btnSelect'onClick={()=>setPersonagem2(<img className='imgPokes' src={Img4}/>)}>+</button></div>
                      <div className='cadaPokeModal'><p>wigglytuff</p><button className='btnSelect' onClick={()=>setPersonagem2(<img className='imgPokes' src={Img6}/>)}>+</button></div>
                      <div className='cadaPokeModal'><p>Butterfree</p><button className='btnSelect' onClick={()=>setPersonagem2(<img className='imgPokes' src={Img5}/>)}>+</button></div>
                      <div className='cadaPokeModal'><p>O</p><button className='btnSelect' onClick={()=>setPersonagem2('O')}>+</button></div>
                </div>
                </div>
            </Modal>
        </div>
    );
};

export default Jogo
