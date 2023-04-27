import styled from "styled-components";
import pokebg from "../../assets/pokebg.png"

export const DetailStyle = styled.div`

    margin-top: 5vh;

    .detailcard{

        font-family: "Poppins", Arial, Helvetica, sans-serif;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2vw;
        width: 85vw;
        height: 70vh;
        border: solid 1px black;
        border-radius: 8px;
        padding: 2vh 1.5vw 2vh 1.5vw;
        background: url("${pokebg}") ${props => props.colorCard};
        background-size: 50vw;
        background-repeat: no-repeat;
        background-position: 33.9vw;
    }

    #sprite-card, .moves, .base-stats{
        background-color: white;
        border-radius: .5rem;
    }

    .sprites-container{
        display: flex;
        flex-direction: column;
        gap: 5vh;
    #sprite-card{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 15vw;
        height: 15vw;
            img{
                width: 75%;
            }
        }
    }

    .stats-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        padding-left: 1vw;

        ul{
            font-family: Helvetica, sans-serif;
            list-style: none;
            font-weight: 600;
            font-size: 15px;
            line-height: 4vh;
            position: relative;
            right: 6vw;
            text-align: right;
        }
    }

    .base-stats{
        width: 21vw;
        height: 65vh;
        padding: 2vh 0 0 2.1vw;
        display: flex;
        flex-direction: column;
        gap: 2vh;
    }
    
    .stats-list{
        position: relative;
        left: 2vw;
        color: #909090;  
    }

    .stats-numbers{
        position: relative;
        right: 1.5vw;
        color: #525252;  
    }

    .stats-bars{
        position: relative;
        font-family: Helvetica, sans-serif;
        display: flex;
        font-weight: 700;
        flex-direction: column;
        font-size: 15px;
        ul{
            font-family: Helvetica, sans-serif;
            list-style: none;
            font-weight: 600;
            color: #444445;
            font-size: 15px;
            position: relative;
            right: 6.5vw;
            text-align: justify;
        }
        button{
            height: 1.5vh;
            position: relative;
            left: .6vw;
            top: .3vh;
            border-radius: .3rem;
            border: none;
            background-color: orange;
        }
        #total{
            font-weight: 700;
            color: black;
        }
        #btn1{width:${props => props.stat1};}
        #btn2{width:${props => props.stat2};}
        #btn3{width:${props => props.stat3};}
        #btn4{width:${props => props.stat4};}
        #btn5{width:${props => props.stat5};}
        #btn6{width:${props => props.stat6};}
    }

    .main-info{

        .top-info{
            color: white;
            margin-left: 1.5vw;
        }

        #name{ 
            font-weight: 700;
            position: relative;
            top: -1vh;
            font-size: 42px;
        }
    
    #id{font-size: 1.5rem;}

        .types {
            display: flex;
            gap: .5vw;
        
        #type1, #type2{
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: .5vw;
            font-size: 14px;
            border-radius: .5rem;
            padding: 0.4rem .7rem;
            color: white;
            border: 1px dashed rgba(255, 255, 255, 0.47);
        }

        #typeicon{
            width: 25%;
            position: relative;
            top: -.2vh;
        }

        #type1 {background: ${props => props.colorType1};}
        #type2 {background: ${props => props.colorType2};}
        }
    }

    #poke-img{
        position: absolute;
        max-width: 278px;
        max-height: 278px;
        top: -1vh;
        left: 65vw;
    }

    .moves{
        display: flex;
        padding-left: 1vw;
        margin-right: 50vw;
        position: relative;
        left: 1.5vw;
        top: 2.4vh;
        width: 17vw;
        height: 50vh; 
        ul{
            margin-top: 2vh;
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 2vh;
            li{
                display: flex;
                flex-direction: row;
                align-items: center;
                background: #ECECEC;
                color: black;
                gap: .5vw;
                font-size: 14px;
                border-radius: .5rem;
                padding: 0.4rem .7rem;
                border: 2px dashed rgba(255, 255, 255, 0.47);
            }
        }
    }

    @media only screen and (min-width : 320px) and (max-width : 480px) {
        margin-top: 7vh;

        .detailcard{
            padding-top: 22vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3vh;
            width: 90vw;
            height: 130vh;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }

        #sprite-card, .moves, .base-stats{
            background-color: white;
            border-radius: .5rem;
        }

    .sprites-container{
        flex-direction: row;
        gap: 5vh;
        #sprite-card{
            width: 30vw;
            height: 30vw;
            img{width: 90%;}
        }
    }

    .stats-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 100%;
        padding-left: 0;
        ul{
            font-family: Helvetica, sans-serif;
            list-style: none;
            font-weight: 600;
            font-size: 15px;
            line-height: 4vh;
            position: relative;
            right: 9vw;
            text-align: right;
        }
    }

    .base-stats{
        width: 70vw;
        height: 70vh;
        padding: 2vh 0 2vh 0;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2vh;
    }
    
    .stats-bars{
        ul{
            right: 5.5vw;
            text-align: justify;
        }
     }

    .stats-list{left: 10vw;}

    .main-info{
        .top-info{
            color: white;
            margin-left: 1.5vw;
        }

    #name, span, .types{
        position: relative;
        top: -78vh;
    }

    #name{font-size: 1.5rem;}
    #id{font-size: 1rem;}

    .types {
        display: flex;
        gap: 2vw;
    }
}

#poke-img{
    position: absolute;
    width: 35vw;
    height: 18vh;
    top: 6vh;
    left: 55vw;
}

.moves{
    justify-content: center;
    margin-right: 0;
    left: 0;
    top: -12vh;
    width: 70vw;
    height: 45vh; 
}
        }
`