import { BASE_URL } from "./url";
import axios from "axios";

export const GetPokemon = async (name) => {
    const { data } = await axios.get(`${BASE_URL}/${name}`)
    return data;
}