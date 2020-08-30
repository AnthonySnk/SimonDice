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
const Obtener_POKEMOM = (id, callback) => {
    const url = `${API_URL_POKEMON}${POKEMON_URL.replace(':id', id)}`
    $
        .get(url, opciones, callback)
        .fail( () => {
            console.log(`No se pudo obtener el personaje ${id}`)
        })

}

// es importante que aqui hagmos la referencia  al funcion
// hacemos el request en serie
Obtener_POKEMOM(1, function (pokemon) {
    console.log(`Hola soy tu nuevo compañero y mi nombre es: ${pokemon.forms[0].name}, soy un pokemon de tipo ${pokemon.types[0].type.name}`)

    Obtener_POKEMOM(2, function (pokemon) {
        console.log(`Hola soy tu nuevo compañero y mi nombre es: ${pokemon.forms[0].name}, soy un pokemon de tipo ${pokemon.types[0].type.name}`)

        Obtener_POKEMOM(3, function (pokemon) {
            console.log(`Hola soy tu nuevo compañero y mi nombre es: ${pokemon.forms[0].name}, soy un pokemon de tipo ${pokemon.types[0].type.name}`)

            Obtener_POKEMOM(00000000000000000, function (pokemon) {
                console.log(`Hola soy tu nuevo compañero y mi nombre es: ${pokemon.forms[0].name}, soy un pokemon de tipo ${pokemon.types[0].type.name}`)
            });
        });
    });
});

