import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import ManScreen from "../pages/ManScreen";
import WomanScreen from "../pages/WomanScreen";
import SearchScreen from "../pages/SearchScreen";
import CharacterScreen from "../pages/CharacterScreen";

import NavBar from "../components/NavBar";

const AppRouter = () => {
	return (
		<>
			<NavBar />
			<Switch>
				<Route exact path='/mans' component={ManScreen} />
				<Route exact path='/womans' component={WomanScreen} />
				<Route exact path='/search' component={SearchScreen} />

				<Route
					exact
					path='/character/:id'
					component={CharacterScreen}
				/>

				<Redirect to='/mans' />
			</Switch>
		</>
	);
};

export default AppRouter;
