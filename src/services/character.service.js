import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


export const characterService = {
    getAll: ()=> axiosService.get(urls.characters).then(value => value.data),
}