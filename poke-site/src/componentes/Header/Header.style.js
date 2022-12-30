import styled from 'styled-components'

const HeaderStyle = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items: center;
width:100%;
height:25vh;

.todo-header{
display:flex;
justify-content:space-between;
align-items:center;
width: 100%;
padding:36px;
}
.imagem{
width:35%;
display:flex;
align-items:center;
justify-content:center;
}
.botao{
    width:30%;
   
>button{
    background: #33A4F5;
    color:white;
    border-radius: 8px;
    border:none;
    padding:19px 72px;
    cursor:pointer;
}
    }
.vazia{
    width:30%;
}
a{
    font-family: 'Inter';
    text-decoration: underline;
    cursor: pointer;
}

`

export default HeaderStyle