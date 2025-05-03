// importando axios
import axios from "axios";

// criando uma const que exporta a base do 
// axios
 export const api = axios.create({
    baseURL: 'https:fackstoreapi.com'
})