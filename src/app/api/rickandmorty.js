
 const baseURL = 'https://rickandmortyapi.com/api/character';
const episodeUrl = "https://rickandmortyapi.com/api/episode"

export  const fetchDataFilm = async () => {
   const fethResponse =   await  fetch(`${baseURL}`)
   const response =  await fethResponse.json()
   
    return response.results
 }
 export const  fetchSingleDataCharacter = async (id) => {
   const fethResponse =   await  fetch(`${baseURL}/${id}`)
   const response =  await fethResponse.json()
   
    return response
 }

