const fetch=require('node-fetch');

const fetchApi = async url => {
    try {
        const response = await fetch(url)

        if (response.status <= 200) {
            return await response.json()
        } else {
            throw new Error('Bad status code')
        }
    } catch(err) {
        throw new Error('Could not fetch data')
    }
}

// Get Vehicles

const getVehicles = async () => {
    try {
        const url = 'https://swapi.co/api/vehicles/'
        const arrayOfVehicles = await fetchApi(url)
        console.log(getVehicleData(arrayOfVehicles.results));
        return getVehicleData(arrayOfVehicles.results)
    } catch(er) {
        throw new Error('Failed to get vehicles')
    }
}

const getVehicleData = vehiclesArray => {
    return vehiclesArray.map(({ name, model, vehicle_class}) => {
        return { name, model,vehicle_class,}
    })
}
 // GET FILMS

const getFilms = async () => {
    try {
        const url = 'https://swapi.co/api/films/'
        const arrayOfFilms= await fetchApi(url)
        console.log(getFilmData(arrayOfFilms.results));
        return getFilmData(arrayOfFilms.results)
    } catch(er) {
        throw new Error('Failed to get films')
    }
}
const getFilmData = filmsArray => {
    return filmsArray.map(({ title,episode_id,director,producer,release_date,created,edited}) => {
        return { title,episode_id,director,producer,release_date,created,edited}
    })
}

// GET PLANETS

const getPlanets = async () => {
    try {
        const url = 'https://swapi.co/api/planets/'
        const arrayOfPlanets= await fetchApi(url)
        console.log(getPlanetsData(arrayOfPlanets.results));
        return getFilmData(arrayOfPlanets.results)
    } catch(er) {
        throw new Error('Failed to get films')
    }
}
const getPlanetsData = planetsArray => {
    return planetsArray.map(({ name,terrain}) => {
        return { name,terrain}
    })
}

//GET SPACESHIPS
const getSpaceships = async () => {
    try {
        const url = 'https://swapi.co/api/starships/'
        const arrayOfSpaceships= await fetchApi(url)
        console.log(getSpaceshipsData(arrayOfSpaceships.results));
        return getSpaceshipsData(arrayOfSpaceships.results)
    } catch(er) {
        throw new Error('Failed to get films')
    }
}
const getSpaceshipsData = spaceShipsArray => {
    return spaceShipsArray.map(({ name,model,manufacturer,films}) => {
        return { name,model,manufacturer,films}
    })
}


// TODO Place for each film its vehicles, its startships and planets
//let films=getFilms();

//let vehicles=getVehicles();

//let planets=getPlanets();

let spaceships=getSpaceships();

