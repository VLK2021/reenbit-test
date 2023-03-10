import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";


export const characterService = {
    getAll: (page) => axiosService.get(urls.characters(page)).then(value => value.data),
    getById: (id) => axiosService.get(urls.singleCharacter(id)).then(value => value.data),
    getSearch: (word, page) => axiosService.get(urls.searchCharacters(word, page)).then(value => value.data),
}