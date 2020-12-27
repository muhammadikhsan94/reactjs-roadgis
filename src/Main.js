import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Lapor from "./Lapor";
import Contact from "./Contact";
import logo from "./icon/dbm.png";

class Main extends Component {
	render() {
		return (
			<HashRouter>
				<div className="page-container">

					<div className="page-sidebar">
						<ul className="x-navigation">
							<li className="xn-logo">
								<NavLink to="/"><img alt="road-gis" src={logo} width="20px" height="20px" /> RoadGIS</NavLink>
								<NavLink to="" className="x-navigation-control"></NavLink>
							</li>
							<li className="xn-title">Menu Utama</li>
							<li><NavLink to="/"><span className="glyphicon glyphicon-home"></span>Home</NavLink></li>
							<li><NavLink to="/lapor"><span className="glyphicon glyphicon-plus"></span>Lapor</NavLink></li>
							<li><NavLink to="/contact"><span className="glyphicon glyphicon-th-list"></span>Contact</NavLink></li>
						</ul>
					</div>

					<Route exact path="/" component={Home} />
					<Route path="/lapor" component={Lapor} />
					<Route path="/contact" component={Contact} />

				</div>
			</HashRouter>
		);
	}
}

export default Main;