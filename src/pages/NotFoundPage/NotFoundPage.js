import { useContext } from "react";
import Header from "../../components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";

function NotFoundPage() {
 
 

  return (
    <div>
      <Header />
      <h1>Ops! Essa página foi levada pela Equipe Rocket!</h1>
    
    </div>
  );
}

export default NotFoundPage;
