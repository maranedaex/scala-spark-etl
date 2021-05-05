import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";
// import Tooltip from '@material-ui/core/Tooltip';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

// components

export default function GuardarPropuestas() {
  return (
    <>
      <IndexNavbar fixed />


      <section className="header relative pt-16 items-center flex h-screen max-h-860-px ">
      <div className="container mx-auto ">

      <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
        
            <div className="w-full lg:w-6/12 px-4">
              
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-xl font-bold">Propuesta Titulo</h6>
                  </div>

                  <form>
            {/* <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Informacion de los postulados
            </h6>
           */}

              {/* tabla postulados */}

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                Usuarios asignados
              </h6>
                 
                 


            <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className="font-semibold text-lg text-blueGray-700" 
                
              >
                Asignados
              </h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-800 text-blueGray-300 border-blueGray-700"
                  
                >
                  
                  Nombre
                </th>

                <th
                  className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left bg-blueGray-800 text-blueGray-300 border-blueGray-700"
                  
                >
                  
                  
                </th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  
                  <span
                    className={
                      "ml-3 font-bold"
                    }
                  >
                      Usuario 1
                  </span>
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <Link to="/Profile" className="">
                      Ver Perfil
                    </Link>
                </td>
                
                
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  
                  <span
                    className={
                      "ml-3 font-bold"
                    }
                  >
                      Usuario 3
                  </span>
                </th>

                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <Link to="/Profile" className="">
                      Ver Perfil
                    </Link>
                </td>
                
              </tr>
            
            </tbody>
          </table>
        </div>
                    
                </div>
              </div>
 {/* fin tabla postulados */}
              

              

        

          </form>

          <div className="text-center flex justify-between">
           
            
            {/* <Tooltip title="Se muestra solo a las propuestas que ya tienen asignado los investigadores" aria-label="add"> */}
            <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                tooltips="(cuando tenga investigadores aceptados por el guia)"
              >
                Cerrar postulación
            </button>
            {/* </Tooltip> */}
          </div>

                  
                </div>

              
              </div>
              <div className="text-center mt-16"></div>
            </div>
        </div>
        </div>
      </section>




      


      <Footer />
    </>
  );
}
