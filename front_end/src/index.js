import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Contacto from "views/Contacto.js";
import FAQ from "views/FAQ.js";
import Nosotros from "views/Nosotros.js";
import Index from "views/Index.js";

import Listado from "views/propuestas/Listado.js"
import SeleccionarEquipo from "views/propuestas/SelEquipo.js"

import MisPropuestas from "views/propuestas/MisPropuestas.js"
import PropuestaGuardar from "views/propuestas/Guardar.js"
import Postulados from "views/propuestas/Postulados.js"
import Estadisticas from "views/Estadisticas.js"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      <Route path="/admin" component={Admin} />
      <Route path="/auth" component={Auth} />

      {/* add routes without layouts */}
      <Route path="/landing" exact component={Landing} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/Contacto" exact component={Contacto} />
      <Route path="/FAQ" exact component={FAQ} />
      <Route path="/Nosotros" exact component={Nosotros} />
      <Route path="/" exact component={Index} />
      <Route path="/Listado" exact component={Listado} />
      <Route path="/SeleccionarEquipo" exact component={SeleccionarEquipo} />
      <Route path="/MisPropuestas" exact component={MisPropuestas} />
      <Route path="/propuestas/guardar" exact component={PropuestaGuardar} />
      <Route path="/Estadisticas" exact component={Estadisticas} />
      <Route path="/propuestas/postulados" exact component={Postulados} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
