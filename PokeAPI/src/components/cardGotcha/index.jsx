import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { Card, Container } from "./styled";

const CardGotcha = ({ txtOne, txtTwo }) => {
  const context = useContext(GlobalContext);

  const { setShowGotcha, setShowRemove } = context;
  return (
    <Container
      onClick={() => {
        setShowGotcha(false);
        setShowRemove(false);
      }}
    >
      <Card>
        <h1>{txtOne}</h1>
        <h3>{txtTwo}</h3>
      </Card>
    </Container>
  );
};

export default CardGotcha;
