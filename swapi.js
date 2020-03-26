const fetch=require('node-fetch');

const fetchApi = async url => {
    try {
        const response = await fetch(url);

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
        const url = 'https://swapi.co/api/vehicles/';
        const arrayOfVehicles = await fetchApi(url);
        //console.log(getVehicleData(arrayOfVehicles.results));
        return getVehicleData(arrayOfVehicles.results)
    } catch(er) {
        throw new Error('Failed to get vehicles')
    }
};

const getVehicleData = vehiclesArray => {
    return vehiclesArray.map(({ name, model, vehicle_class,films}) => {
        return { name, model,vehicle_class,films}
    })
};
 // GET FILMS

const getFilms = async () => {
    try {
        const url = 'https://swapi.co/api/films/';
        const arrayOfFilms= await fetchApi(url);
        //console.log(getFilmData(arrayOfFilms.results));
        return getFilmData(arrayOfFilms.results)
    } catch(er) {
        throw new Error('Failed to get films')
    }
};
const getFilmData = filmsArray => {
    return filmsArray.map(({title,episode_id,director,producer,release_date,created,edited,url}) => {
        return {title,episode_id,director,producer,release_date,created,edited,url}
    })
};

// GET PLANETS

const getPlanets = async () => {
    try {
        const url = 'https://swapi.co/api/planets/';
        const arrayOfPlanets= await fetchApi(url);
       //console.log(getPlanetsData(arrayOfPlanets.results));
        return getPlanetsData(arrayOfPlanets.results)
    } catch(er) {
        throw new Error('Failed to get planets')
    }
};
const getPlanetsData = planetsArray => {
    return planetsArray.map(({name,terrain,films}) => {
        return { name,terrain,films}
    })
};

//GET SPACESHIPS
const getSpaceships = async () => {
    try {
        const url = 'https://swapi.co/api/starships/'
        const arrayOfSpaceships= await fetchApi(url)
        //console.log(getSpaceshipsData(arrayOfSpaceships.results));
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


// TODO Place for each film its vehicles, its starships and planets


let films=getFilms();

let vehicles=getVehicles();

let planets=getPlanets();
//console.log(planets)

let starShips=getSpaceships();

//console.log();

Promise.all([films,planets,starShips,vehicles]).then(function(values) {
   let filmsArr=JSON.stringify(values[0]);
    //console.log(values);
    //console.log(filmsArr[0]);
    let filmsArray=JSON.parse(filmsArr);
    //console.log(filmsArray[0]);

   let starShipsArr=JSON.stringify(values[2]);
    let starShipsArray=JSON.parse(starShipsArr);

    let vehiclesArr=JSON.stringify(values[3]);
    let vehiclesArray=JSON.parse(vehiclesArr);

    let planetsArr=JSON.stringify(values[1]);
    let planetsArray=JSON.parse(planetsArr);

   let bigArray=[];         // my array


    //let myObjFilms;

    for (let film of filmsArray){   //response films
        bigArray.push(film)
        for (let obj of bigArray){
            //console.log(obj);
            let url=obj.url;
            //console.log(url);
            obj.planets=[];
            obj.starships=[];
            obj.vehicles=[];


            for (let planet of planetsArray){
                //console.log(planet);
                for (let planetFilm of planet.films){
                    if (planetFilm===url){
                        //console.log(shipFilm);
                        //  console.log(url);
                        obj.planets.push(planet);
                        //console.log(myObjFilm.starShips);
                    }
                }
            }

            for (let ship of starShipsArray){
                //console.log(ship);
                let shipsFilms=ship.films;
                // console.log(shipsFilms);
                for (let shipFilm of shipsFilms){
                    if (shipFilm===url){
                        //console.log(shipFilm);
                      //  console.log(url);
                        obj.starships.push(ship);
                        //console.log(myObjFilm.starShips);
                    }
                }
            }
            for (let vehicle of vehiclesArray){
                //console.log(ship);
                //let vehiclesFilms=vehicles.films;
                //console.log(vehicle.films);
                 for (let vehicleFilm of vehicle.films){
                    if (vehicleFilm===url){

                        obj.vehicles.push(vehicle);

                    }
                }
            }

        }

    }

    console.log(bigArray)

}).catch(error => {
    console.error(error.message)
});





