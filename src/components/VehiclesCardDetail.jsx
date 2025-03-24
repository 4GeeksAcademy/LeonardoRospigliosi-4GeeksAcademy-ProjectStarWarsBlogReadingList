import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';
import { useParams } from 'react-router-dom';

const VehiclesCardDetail = () => {

    const { dispatch, store } = useGlobalReducer();
    console.log("VehiclesCardDetail - Imprimiendo store");
    console.log(store);
    const params = useParams();
    console.log("VehiclesCardDetail - Imprimiendo param");
    console.log(params);

    let vehiculo = store.vehicles.find(item => item.uid === params.contactID);
    console.log("VehiclesCardDetail-Imprimiendo vehiculoSeleccionado");
    console.log(vehiculo);

    return (

        <div className="container text-start">
            <div className="card mb-3 mt-5">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://picsum.photos/id/3/540/540" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h2 className="card-title">{vehiculo.properties.name}</h2>
                            <p className="card-text"> {vehiculo.description}</p>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="border-danger border-2 opacity-100"></hr>
            <div className="row text-center">
                <div className="col">Name <p>{vehiculo.properties.name}</p></div>
                <div className="col">Capacity <p>{vehiculo.properties.cargo_capacity}</p></div>
                <div className="col">Cost in Credits <p>{vehiculo.properties.cost_in_credits}</p></div>
                <div className="col">Manufacturer <p>{vehiculo.properties.manufacturer}</p></div>
                <div className="col">Model <p>{vehiculo.properties.model}</p></div>
                <div className="col">Passengers <p>{vehiculo.properties.passengers}</p></div>
            </div>
        </div>

    )
}

export default VehiclesCardDetail