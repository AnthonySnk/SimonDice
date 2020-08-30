// const API_URL = 'https://swapi.dev/api/'
// const PEOPLE_URL = 'people/:id'
// const opts = { crossDomain: true }

// const onPeopleResponse = function (persona) {
//     console.log(`Hola, yo soy ${persona.name}`)
// }

// const ObtenerPersona = (id) => {
//     const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
//     $.get(url, opts, onPeopleResponse)
// }
// var id = prompt('Ingresa el Id')
// ObtenerPersona(id);
// ObtenerPersona(10)


const API_URL_POKEMON = 'https://pokeapi.co/api/v2/'
const POKEMON_URL = 'pokemon/:id'
const opciones = { crossDomain: true }


// const Obtener_POKEMOM = (id,) => {
//     const url = `${API_URL_POKEMON}${POKEMON_URL.replace(':id', id)}`
//     $.get(url, opciones, RecibimosPokemon)
// }


//interaremos recibir en orden
const Obtener_POKEMOM = (id) => {

    return new Promise((resolve, reject) => {
        const url = `${API_URL_POKEMON}${POKEMON_URL.replace(':id', id)}`;

        $.get(url, opciones, (data) => {
            resolve(data)
        })
            .fail(() => reject(id))
    })
}
const onError = (id) => console.log("ocurrio un error con el id " + id)

Obtener_POKEMOM(1)
    // para cuando responda la promesa
    .then((pokemon) => {
        console.log(`Hola soy tu nuevo compañero y mi nombre es: ${pokemon.forms[0].name}, soy un pokemon de tipo ${pokemon.types[0].type.name}`)
    })
    // por si exite un error
    .catch(onError)

