import styled from "styled-components";
<style> @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Poppins:wght@700&display=swap');
   </style>
export const ContainerDetails=styled.div`
background-color: #5E5E5E;
width: 1440px;
height: 100vh;

.textDetailsOverall{
    padding: 20px;
    color: #fff;
    font-size: 48px;
    padding: 15px;
    font-family: 'poppins', sans-serif;
    font-weight: 700;
    line-height: 72px;
    font-style: normal;
    margin-left: 30px;
    display: flex;
    
}
`
export const Container=styled.div`

    width: 1420px;
    height: 663px;
    left: 40px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius:15px;
    background-color: ${(props)=>props.cor};


.Div1{
    border-radius: 10px;
    width: 330px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    
    .img{
        display: flex;
        width: 282px;
        height: 270px;
        border-radius: 10px;
        align-items: center;
        justify-content: center;
        margin: 10px;
        background-color: white;
    }
    .imgPokemon{
        width: 200px;
        width: 200px;
    }
}
.Div2{
    background-color: #fff;
    border-radius: 10px;
    width: 330px;
    height: 560px;
    margin-right: 30px;

    .infoStats{
        margin-top: 16px;
        display: grid;
        display: block;
        margin-top: 80px;
        justify-content: flex-start;
        align-items: center;

        .textStats{
        display: grid; 
        font-family: 'inter', sans-serif;
        font-weight: 400;
        font-size: 12px;
        margin-left: 10px;
        color: #6b6b6b;
        border-top: 1px solid #d9d9db;
        margin-top: 18px;
    }
    .textValue{
        display: grid;
        font-family: 'inter', sans-serif;
        font-weight: 400;
        font-size: 12px;
        margin-left: 100px;
        position: absolute;
        color: #000000;
        align-self: flex-start;
        margin-top: 5px;
        

    }
    
    .textTotal{
        display: grid; 
        font-family: 'inter', sans-serif;
        font-weight: 400;
        font-size: 12px;
        margin-left: 10px;
        color: #6b6b6b;
        padding: 0;
        align-self: flex-start;
        border-top: 1px solid #a6ada7;
        margin-top: 15px;
        height: 20px;
    }
    .valueTotal{
        display: grid; 
        font-family: 'inter', sans-serif;
        grid-column: 3/4; 
        font-weight: 800;
        font-size: 12px;
        margin-left: -125px;
        color: black;
        padding: 0;
        align-self: flex-start;
        margin-top: 1px;

    }
    }
    
    
    .textBaseStats{
        margin-top: 15px;
        margin-left: 10px;
        align-self: flex-start;
        font-family: 'inter', sans-serif;
        font-weight: 800;
        font-size: 24px;
        grid-row: 1/3;
        grid-column: 1/6;
        color: #000000;
        position: absolute;
        
    }
    
    
}
.Div3{
    border-radius: 10px;
    width: 330px;
    height: 600px;
    margin-right: 30px;
    margin-top: 20px;
    .Moves{
            position: absolute;
            display: flex;
            flex-direction: column;
            align-self: flex-start;
            border-radius: 8px;
            padding: 10px;
            gap: 10px;
            margin-top: 30px;
            background-color: #fff;
            width: 292px;
            height: 400px;
            

            label{
                display: flex;
                width: auto;
                margin-left: 10px;
                padding: 10px;
                border-radius: 12px;
                background: #ECECEC;
                border: 1px dashed rgba(0, 0, 0, 0.14);

    }
    text{
        font-family: 'inter', sans-serif;
        font-weight: 800;
        font-size: 24px;
        margin-left: 10px;
        color: #000000;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
    }
}
}
.Div4{
    border-radius: 10px;
    width: 330px;
    height: 600px;
    .imgPokemonBig{
        position: absolute;
        z-index: 100;
        width: 270px;
        height: 270px;
        left: 1071px;
        top: 150px;
    }
    .imgPokebola{
        position: absolute;
        z-index: 99;
        width:650px;
        height: 650px;
        margin-left: -325px;
        margin-top:-30px;

    }
}
.Details{
    font-family: 'inter', sans-serif;
    color: #fff;
    font-weight: 700;
    padding: 5px;
    .idText{
        font-size: 16px;
    }
    .idName{
        font-size: 48px;
    }
    .Types{
        display: flex;
        justify-self: flex-start;
        width: 225px;
        margin-left: -12px;
        img{
            margin-left:5px;
            margin-right: auto;
        }
    }
}
.Progress{
        margin-left:140px;
        position: absolute;
        margin-top: 10px;
    }

`



