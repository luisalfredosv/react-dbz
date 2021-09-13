import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "../components/NavBar";
const ManScreen = lazy(() => import("../pages/ManScreen"));
const WomanScreen = lazy(() => import("../pages/WomanScreen"));
const SearchScreen = lazy(() => import("../pages/SearchScreen"));
const CharacterScreen = lazy(() => import("../pages/CharacterScreen"));

const AppRouter = () => {
	return (
		<>
			<NavBar />
			<Suspense
				fallback={
					<Container>
						<h1>Loading...</h1>
					</Container>
				}
			>
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
			</Suspense>
		</>
	);
};

export default AppRouter;
