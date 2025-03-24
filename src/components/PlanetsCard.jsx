import React from 'react'
import useGlobalReducer from '../hooks/useGlobalReducer';
import { Link } from "react-router-dom";

const category="2"

const PlanetsCard = ({ item }) => {

    const { dispatch, store } = useGlobalReducer();

    const addToFavorites = (id, name) => {
        const linkto=`/detailsplanets/${id}`
        dispatch({ type: 'add_to_favorite', payload: { "uid": id, "name": name, "category": category, "linkto": linkto } })
    };

    const deleteFromFavorites = (uid) => {
        dispatch({ type: 'delete_from_favorite', payload: { uid, "category": category } })
    };

    return (

        <div className="card" style={{ width: "18rem" }}>
            <img src={`https://vieraboschkova.github.io/swapi-gallery/static/assets/img/people/${item.uid}.jpg`} className="card-img-top" alt="Planets card" />
            <div className="card-body">
                <h5 className="card-title">{item.properties.name}</h5>
                <p className="card-text m-0">Diameter: {item.properties.diameter}</p>
                <p className="card-text m-0">Rotation-Period: {item.properties.rotation_period}</p>
                <p className="card-text"> Terrain: {item.properties.terrain}</p>
                <div className='d-flex justify-content-between'>
                    <Link to={`/detailsplanets/${item.uid}`} >
                        <button className="btn btn-primary">Learn more!</button>
                    </Link>

                    <a href="#" className="btn btn-primary">

                        {store.favorites.some(favorito => favorito.uid === item.uid && favorito.category === category) ?
                            <i className="fa-solid fa-heart" onClick={() => {
                                deleteFromFavorites(item.uid);
                            }}></i> :
                            <i className="fa-regular fa-heart" onClick={() => {
                                addToFavorites(item.uid, item.properties.name);
                            }}>
                            </i>
                        }
                    </a>
                </div>
            </div>
        </div>

    )
}

export default PlanetsCard