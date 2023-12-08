import styled from "styled-components";


export const BoxPrincipal = styled.div`
   min-width: 100%;
   max-width: 100%;
   max-height: 663px;
   min-height: 663px;
   background-color:${(props) => props.color};
   border-radius: 20px;
   display: flex;
   padding-left: 44px;
   padding-top: 26px;
   padding-bottom:26px;
   margin: 0 auto;
`;

export const LeftSide = styled.div`
   width: 100%;
   display: flex;
`;

export const DoubleCards = styled.div`   
   width: 40%;
   display: flex;
   flex-direction: column;
   gap: 47px;
   justify-content: space-between;
   align-items: center;
`; 

export const FrontCard = styled.div`  
   width: 282px;
   background-color: white;
   height: 282px;
   border-radius: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const ImgDouble = styled.img`
   width: 282px;
   height: 282px;
`;

export const BackCards = styled.div`
   width: 282px;
   background-color: white;
   height: 282px;
   border-radius: 10px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const ProgressMain = styled.div`
   width: 48%;
   height: 100%;
   background-color: white;
   border-radius: 10px;
   padding-top: 15px;
   padding-left: 30px;
   margin-left: 15px;
   z-index: 1;
`;

export const TitleBase = styled.h1`
   font-size: 27px;
   font-weight: bold;
   padding-bottom: 10px;
`;

export const Border = styled.div`
   width: 100%;
   padding-left: 10px;
`;

export const StatsTypes = styled.p`
   width: 320px;
   border-top: 2px solid #ECECEC;
   border-bottom: 2px solid #ECECEC;
   color: gray;
   font-weight: bold;
   position:relative;
   right: 110px;
   top: 20px;
`;

export const StatsTypesTotal = styled.p`
   width: 320px;
   border-top: 2px solid #ECECEC;
   border-bottom: 2px solid #ECECEC;
   color: gray;
   font-weight: bold;
   position:relative;
   right: 110px;
   top: 20px;
   padding-left: 10px;
`;
    
export const NumberBase1 = styled.span`
   color: black;
   margin-left: 15px;
   margin-left: 45px;
`;

export const NumberBase2 = styled.span`
   color: black;
   margin-left: 17px;
`;

export const NumberBase3 = styled.span`
   color: black;
   margin-left: 5px;
`;

export const NumberBase4 = styled.span`
   color: black;
   margin-left: 13px;
`;

export const NumberBase5 = styled.span`
   color: black;
   margin-left: 13px;
`;

export const NumberBase6 = styled.span`
   color: black;
   margin-left: 20px;
`;

export const NumberBase7 = styled.span`
   color: black;
   margin-left: 34px;
`;

export const SideRight = styled.div`
   width: 100%;
   display: flex;
   position: relative;
   gap: 40px;
   margin-left: -20px;
`;

export const CardLeftSide = styled.div`
   width: 50%;
   height: 100%;
   z-index: 1;
`;

export const CardSideRight = styled.div`
   width: 50%;
   height: 100%;
`;

export const Id = styled.p`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 700;
   font-size: 16px;
   line-height: 19px;
   color: #FFFFFF;
`;

export const Name = styled.h2`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 700;
   font-size: 48px;
   line-height: 58px;
   color: #FFFFFF;
   margin-bottom: 10px;
`;

export const Moves = styled.div`
   padding: 10px 15px;
   margin-top: 20px;
   border-radius: 10px;
   height: 453px;
   width: 292px;
   background-color: #FFFFFF;
   display: flex;
   flex-direction: column;
   position: relative;
`;

export const Move = styled.span`
   height: 37px;
   display: flex;
   width: fit-content;
   background-color:#ECECEC;
   padding: 10px;
   gap: 10px;
   text-align: center;
   border: 1px dashed rgba(0, 0, 0, 0.14);
   border-radius: 12px;
   font-family: 'Montserrat';
   font-style: normal;
   font-weight: 400;
   font-size: 14px;
   line-height: 17px;
`;

export const Types = styled.div`
   display: flex;
   gap: 18px;
   margin-bottom: 45px;
`;

export const TitleMove = styled.h3`
   font-family: 'Inter';
   font-style: normal;
   font-weight: 800;
   font-size: 24px;
   line-height: 29px;
   margin-bottom: 20px;
   margin-top: 10px;
`;

export const BackgroundImg = styled.img`
   min-width: 667px;
   max-width: 740px;
   min-height: 664px;
   max-height: 664px;
   z-index: 0;
   position: absolute;
   right: 1px;
   top: -27px;
`;

export const ImgFront = styled.img`
   width: 270px;
   height: 270px;
   position: relative;
   bottom: 160px;
   right: 40px;
`;