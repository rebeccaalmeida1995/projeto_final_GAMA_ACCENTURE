import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./login";
import Painel from "./painel";
import Informacoes from "./informacoes";
import novoElenco from "./newCast";
import PrivateRoute from "../components/PrivateRoute";

const Pages = () => (
	<Switch>
		<Route path="/" component={Login} exact />
		<PrivateRoute path="/painel" component={Painel} />
		<PrivateRoute path="/informacoes" component={Informacoes} />
		<PrivateRoute path="/newCast" component={novoElenco} />
	</Switch>
);

export default Pages;
