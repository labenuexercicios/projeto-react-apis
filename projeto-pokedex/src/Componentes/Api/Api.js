import axios from "axios";

export const Recebeositens =  async () =>{
    try{
       const reposta = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        const respostadaresposta = reposta.data.results
       return await respostadaresposta
    }
    catch(error){
        console.log("erro do receositens:", error)
    }


}
export const Rebecedadosdecadapokemon =  async (url) =>{
    try{
        const reposta = await axios.get(url)
        return reposta.data
    }
    catch(error){
        console.log("erro do recebdados de cada pokemon:", error)
    }

}


