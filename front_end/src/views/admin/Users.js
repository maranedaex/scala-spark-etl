import React from "react";
import { Link } from "react-router-dom";

// components

// import CardUsers from "components/Cards/CardUsers.js";
// import CardProfile from "components/Cards/CardProfile.js";
import CardUserTable from "components/Cards/CardUsersTable.js";

export default function Users() {
  return (
    <>

      <div className="flex flex-wrap">
        <div className="w-full mb-12 px-4">
          
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t bg-white mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-blueGray-700 text-xl font-bold">Administracion de Usuarios</h6>

                <Link
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  to="/admin/usuarios/guardar"
                >
                  Ingresar
                </Link>


              </div>
            </div>

            <CardUserTable />
          </div>
          
        </div>
      </div>

{/* 
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardUsers />
        </div>
        <div className="w-full mb-12 px-4">
          <CardUserTable />
        </div>
      </div> */}
    </>
  );
}