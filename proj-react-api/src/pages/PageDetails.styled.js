import styled from "styled-components";
<style> @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&family=Poppins:wght@700&display=swap');
   </style>
export const ContainerDetails=styled.div`
background-color: gray;

.textDetailsOverall{
    /* position: absolute; */
    /* left: 40px;
    height: 72px; */
    /* top: 820px; */
    padding: 20px;
    color: #fff;
    font-size: 48px;
    padding: 15px;
    font-family: 'poppins', sans-serif;
    font-weight: 700;
    line-height: 72px;
    font-style: normal;
    border: 2px solid white;
    margin-left: 30px;
    

    
}

.Container{
    width: 1390px;
    height: 665px;
    display: flex;
    border: 3px solid yellow;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* background-color: #729F92; */
    /* background-color: ${(props)=>props.cor?props.cor:"yellow"}; */
}

.Div1{
    /* background-color: ${(props)=>props.cor?props.cor:props.cor}; */
    /* background-color: blueviolet; */
    border: 2px solid white;
    border-radius: 10px;
    width: 330px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .img{
        display: flex;
        width: 282px;
        height: 282px;
        border-radius: 10px;
        /* border: 2px solid black; */
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
    
    /* justify-content: center; */
    /* align-items: center; */
    /* flex-direction: column; */
    background-color: #fff;
    /* border: 2px solid white; */
    border-radius: 10px;
    width: 330px;
    height: 600px;

    .infoStats{
        margin-top: 16px;
        display: grid;
        display: block;
        border: 3px solid yellow;
        grid-template-columns: 40px 40px 40px 40px 40px 40px 40px 40px;
        grid-template-rows: 40px 40px 40px 40px 40px 40px 40px 40px 40px;
        justify-content: flex-start;
        align-items: center;

        .textStats{
        display: grid; 
        font-family: 'inter', sans-serif;
        grid-row: 4/10;
        grid-column: 1/3; 
        font-weight: 400;
        font-size: 12px;
        margin-left: 10px;
        color: #6b6b6b;
        padding: 0;
        align-self: flex-end;
        border-top: 1px solid #d9d9db;
    }
    .textValue{
        display: grid;
        font-family: 'inter', sans-serif;
        grid-column: 3/4;
        font-weight: 400;
        font-size: 12px;
        margin-left: 100px;
        position: absolute;
        color: #000000;
        padding: 0;
        align-self: flex-start;

    }
    .Progress{
        display: grid;
        border:1px solid black;
        grid-column: 4/9;
        justify-self: flex-start;
        margin-left:140px;
        position: absolute;
        margin-top: 3px;
    }
    .textTotal{
        display: grid; 
        font-family: 'inter', sans-serif;
         /* grid-row: 7/10; */
        /* grid-column: 1/3;   */
        font-weight: 400;
        font-size: 12px;
        margin-left: 10px;
        color: #6b6b6b;
        padding: 0;
        align-self: flex-start;
        border-top: 1px solid #d9d9db;
    }
    .valueTotal{
        display: grid; 
        font-family: 'inter', sans-serif;
        /* grid-row: 7/10; */
        grid-column: 3/4; 
        font-weight: 800;
        font-size: 12px;
        margin-left: -125px;
        color: #6b6b6b;
        padding: 0;
        align-self: flex-start;
        /* border-top: 1px solid #d9d9db; */
    }
    }
    
    
    .textBaseStats{
        margin-top: 10px;
        margin-left: 10px;
        align-self: flex-start;
        font-family: 'inter', sans-serif;
        font-weight: 800;
        font-size: 24px;
        margin-left: 0;
        grid-row: 1/3;
        grid-column: 1/6;
        color: #000000;
    }
    
    
}
.Div3{
    background-color: pink;
    border: 2px solid white;
    border-radius: 10px;
    width: 330px;
    height: 600px;
}
.Div4{
    background-color: yellowgreen;
    border: 2px solid white;
    border-radius: 10px;
    width: 330px;
    height: 600px;
    img{
        position: absolute;
        width: 270px;
        height: 270px;
        left: 1071px;
        top: 80px;
    }
}
.Details{
    font-family: 'inter', sans-serif;
    color: #fff;
    font-weight: 700;
    padding: 5px;
    margin-left: 10px;
    .idText{
        font-size: 16px;
    }
    .idName{
        font-size: 48px;
    }
    .Types{
        display: flex;
        flex-direction:row;
        /* padding: 5px; */
        img{
            margin-left:5px;
        }
    }
}
.Moves{
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 8px;
    padding: 10px;
    gap: 10px;
    margin-left: 5px;
    width: 292px;
    height: 771px;
    background-color: #fff;
    border: 1px solid black;
    position: absolute;
    width: 292px;
    height: 453px;
    label{
        /* left: 803px; */
        /* top: 712px; */
        padding: 10px;
        border-radius: 12px;
        background: #ECECEC;
        border: 1px dashed rgba(0, 0, 0, 0.14);

    }
    text{
        font-family: 'inter', sans-serif;
        font-weight: 800;
        font-size: 24px;
        margin-left: 0;
        color: #000000;
    }
}

`
