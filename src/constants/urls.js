export const urls = {
    characters: (page) => `/character?page=${page}`,
    singleCharacter: (id) => `/character/${id}`,
    searchCharacters: (word, page) => `/character?page=${page}&name=${word}`
}