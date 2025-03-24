import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import PeopleCard from "../components/PeopleCard.jsx";
import PlanetsCard from "../components/PlanetsCard.jsx";
import VehiclesCard from "../components/VehiclesCard.jsx";


export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	const getPeople = async () => {

		try {
			const response = await fetch('https://www.swapi.tech/api/people');

			if (!response.ok) {
				throw new Error("Ocurrió un error al llamar el endpoint 'people' ");
			}

			const data = await response.json();
			console.log(data);
			const urls = data.results.map((item) => item.url);
			console.log(urls);

			let ListaPersonajes = [];
			for (let index = 0; index < urls.length; index++) {
				const personaje = await getElementDetailById(urls[index], "Personaje");
				ListaPersonajes = [...ListaPersonajes, personaje]
			}

			console.log("Imprimir ListaPersonajes:");
			console.log(ListaPersonajes);

			dispatch({ type: 'set_people_data', payload: ListaPersonajes })

		} catch (error) {
			console.log(error);
		}
	};

	const getPlanets = async () => {

		try {
			const response = await fetch('https://www.swapi.tech/api/planets');

			if (!response.ok) {
				throw new Error("Ocurrió un error al llamar el endpoint 'Planetas' ");
			}

			const data = await response.json();
			console.log(data);
			const urls = data.results.map((item) => item.url);
			console.log(urls);

			let listaPlanetas = [];
			for (let index = 0; index < urls.length; index++) {
				const planeta = await getElementDetailById(urls[index], "Planeta");
				listaPlanetas = [...listaPlanetas, planeta]
			}

			console.log("Imprimir listaPlanetas:");
			console.log(listaPlanetas);

			dispatch({ type: 'set_planets_data', payload: listaPlanetas })

		} catch (error) {
			console.log(error);
		}
	};

	const getVehicles = async () => {

		try {
			const response = await fetch('https://www.swapi.tech/api/vehicles');

			if (!response.ok) {
				throw new Error("Ocurrió un error al llamar el endpoint 'Vehicles' ");
			}

			const data = await response.json();
			console.log(data);
			const urls = data.results.map((item) => item.url);
			console.log(urls);

			let listaVehiculos = [];
			for (let index = 0; index < urls.length; index++) {
				const planeta = await getElementDetailById(urls[index], "Vehiculos");
				listaVehiculos = [...listaVehiculos, planeta]
			}

			console.log("Imprimir listaVehiculos:");
			console.log(listaVehiculos);

			dispatch({ type: 'set_vehicles_data', payload: listaVehiculos })

		} catch (error) {
			console.log(error);
		}
	};

	const getElementDetailById = async (url, elemento) => {
		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error("Ocurrió un error al llamar el endpoint: " + elemento);
			}

			const data = await response.json();
			return data.result;

		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getPeople();
		getPlanets();
		getVehicles();
	}, []);

	return (
		<div className="container mt-5">
			<h2>Characters</h2>
			<div className="row mt-5 justify-content-center">
				<div className="d-flex flex-row overflow-auto"
					style={{ maxWidth: "1200px", overflowX: "scroll" }}>
					{store.people.map((item, index) => {
						return (
							<div className="mx-2" key={item.uid}>
								<PeopleCard key={item.uid} item={item} />
							</div>)
					})}
				</div>
			</div>
			<br></br>

			<h2>Planets</h2>
			<div className="row mt-5 justify-content-center">
				<div className="d-flex flex-row overflow-auto"
					style={{ maxWidth: "1200px", overflowX: "scroll" }}>
					{store.planets.map((item, index) => {
						return (
							<div className="mx-2" key={item.uid}>
								<PlanetsCard key={item.uid} item={item} />
							</div>)
					})}
				</div>
			</div>
			<br></br>

			<h2>Vehicles</h2>
			<div className="row mt-5 justify-content-center">
				<div className="d-flex flex-row overflow-auto"
					style={{ maxWidth: "1200px", overflowX: "scroll" }}>
					{store.vehicles.map((item, index) => {
						return (
							<div className="mx-2" key={item.uid}>
								<VehiclesCard key={item.uid} item={item} />
							</div>)
					})}
				</div>
			</div>

		</div>
	);
}; 