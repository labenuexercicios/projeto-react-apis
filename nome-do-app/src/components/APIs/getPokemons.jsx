import axios from "axios";


export const getPokemons = async (estado, array) => {
    const quantPokemons = 25
    const copiaPokemons = [...array]
    try {
        const response = await axios.get(`
            https://pokeapi.co/api/v2/pokemon?limit=${quantPokemons}&offset=0
        `)
        const nameAndUrl = response.data.results
        for (let i in nameAndUrl) {
            let URL = nameAndUrl[i].url
            try {
                const pokemon = await axios.get(URL)
                let dadosPoke = pokemon.data
                copiaPokemons.push({
                    id: dadosPoke.id,
                    name: dadosPoke.name,
                    tipo: dadosPoke.types,
                    image: dadosPoke.sprites.other['official-artwork'].front_default
                })
                estado(copiaPokemons)
            } catch (error) {
                console.log(error)
            }
        }

    } catch (error) {
        console.log(error)
    }

































    // let aux = 1
    // while (aux <= 21) {
    //     let arrayTypes = []
    //     try {
    //         const response = await axios.get(`
    //         https://pokeapi.co/api/v2/pokemon/${aux}/
    //     `)
    //         let objTipos = response.data.types
    //         for (let val in objTipos) {
    //             let nameTipes = objTipos[val].type.name
    //             arrayTypes.push(nameTipes)
    //             if (arrayTypes.length === 2) {
    //                 break
    //             }
    //         }
    //         copiaPokemons.push({
    //             name: response.data.name,
    //             id: response.data.id,
    //             tipo: arrayTypes,
    //             image: response.data.sprites.front_default
    //         })
    //         aux = aux + 1
    //         estado(copiaPokemons)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

}
