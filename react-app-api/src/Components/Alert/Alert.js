import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalState/GlobalContext";
import { CardGotcha, MainDiv, TextoAdd, TextoGotcha } from "./alertStyle";

export function Alert({ main, text }) {
  const context = useContext(GlobalContext);

  const { setGotcha, setAlertRemove } = context;

  return (
    <MainDiv
      onClick={() => {
        setGotcha(false);
        setAlertRemove(false);
      }}
    >
      <CardGotcha>
        <TextoGotcha>{main}</TextoGotcha>
        <TextoAdd>{text}</TextoAdd>
      </CardGotcha>
    </MainDiv>
  );
}
