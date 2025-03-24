import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom';

const PlanetCardDetail = () => {

    const { dispatch, store } = useGlobalReducer();
    console.log("PlanetCardDetail - Imprimiendo store");
    console.log(store);
    const params = useParams();
    console.log("PlanetCardDetail - Imprimiendo param");
    console.log(params);

    let planeta = store.planets.find(item => item.uid === params.contactID);
    console.log("PlanetCardDetail-Imprimiendo planetaSeleccionado");
    console.log(planeta);

    return (

        <div className="container text-start">
            <div className="card mb-3 mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://picsum.photos/id/2/540/540" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h2 className="card-title">{planeta.properties.name}</h2>
                            <p className="card-text"> {planeta.description}</p>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="border-danger border-2 opacity-100"></hr>
            <div className="row text-center">
                <div className="col">Name <p>{planeta.properties.name}</p></div>
                <div className="col">Diameter <p>{planeta.properties.diameter}</p></div>
                <div className="col">Gravity <p>{planeta.properties.gravity}</p></div>
                <div className="col">Orbital Period <p>{planeta.properties.orbital_period}</p></div>
                <div className="col">Population <p>{planeta.properties.population}</p></div>
                <div className="col">Terrain <p>{planeta.properties.terrain}</p></div>
            </div>
        </div>

    )
}

export default PlanetCardDetail