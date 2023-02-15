import { GlobalContext } from "./GlobalContext";
import usePokedex from "../Hooks/usePokedex"

  
export default function GlobalState(props) {
    
  const managePokedex= usePokedex()

    
    const context = {
        managePokedex,
     
    }

    return (
        <GlobalContext.Provider value={context}>
            {props.children}
        </GlobalContext.Provider>
    )
}
