import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Users from "views/admin/Users.js";
import UsersSave from "views/usuarios/Guardar.js"

import Tables from "views/admin/Tables.js";
import Propuestas from "views/admin/Propuestas.js";
import PropuestasGuardar from "views/propuestas/Guardar.js";

import Categorias from "views/admin/Categorias.js";
import CategoriasGuardar from "views/categorias/Guardar.js";

import Empresas from "views/admin/Empresas.js";
import EmpresasGuardar from "views/empresas/Guardar.js";

import Sectores from "views/admin/Sectores.js";
import SectoresGuardar from "views/sectores/Guardar.js";

import Centroid from "views/admin/Centroi+d.js";
import CentroidGuardar from "views/centroi+d/Guardar.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/users" exact component={Users} />
            <Route path="/admin/usuarios/guardar" exact component={UsersSave} />
            <Route path="/admin/tables" exact component={Tables} />
            <Route path="/admin/propuestas" exact component={Propuestas} />
            <Route path="/admin/propuestas/guardar" exact component={PropuestasGuardar} />
            
            <Route path="/admin/categorias" exact component={Categorias} />
            <Route path="/admin/categorias/guardar" exact component={CategoriasGuardar} />

            <Route path="/admin/empresas" exact component={Empresas} />
            <Route path="/admin/empresas/guardar" exact component={EmpresasGuardar} />

            <Route path="/admin/sectores" exact component={Sectores} />
            <Route path="/admin/sectores/guardar" exact component={SectoresGuardar} />

            <Route path="/admin/centroi+d" exact component={Centroid} />
            <Route path="/admin/centroi+d/guardar" exact component={CentroidGuardar} />

            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}