import { useState } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();

	const deleteFromFavorites = (uid, category) => {
		dispatch({ type: 'delete_from_favorite', payload: { uid, category } })
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img width="70" height="70" src="https://img.icons8.com/ios/100/star-wars.png" alt="star-wars" />
					</span>
				</Link>
				<div className="ml-auto ">
					{/* <Link to="/demo"> */}
					<div className="dropdown">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favorites <span>{"(" + store.favorites.length + ")"}</span>
						</button>

						<ul className="dropdown-menu">
							{store.favorites.map((item, index) => (
								<li key={index} >
									<div className="dropdown-item d-flex justify-content-between align-items-center">

										<Link to={item.linkto} className="text-decoration-none text-dark">
											{item.name}
										</Link>

										<i className="fa-solid fa-trash"
											style={{ cursor: "pointer" }}
											onClick={() => {
												deleteFromFavorites(item.uid, item.category);
											}}
										></i>
									</div>
								</li>
							))}
						</ul>

					</div>
					{/* </Link> */}
				</div>
			</div>
		</nav>
	);
};