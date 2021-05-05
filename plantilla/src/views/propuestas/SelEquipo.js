/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

// import CardTablePropuestas from "components/Cards/CardTablePropuestas.js";

export default function SelEquipo() {
  return (
    <>
      <IndexNavbar fixed />




      <section className="header relative pt-16 items-center flex h-screen max-h-860-px ">
      <div className="container mx-auto ">
            <div className="w-full text-center ">
              
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center flex justify-between">
                <h6 className="text-xl font-bold">Seleccionar Equipo de trabajo para la propuesta: Titulo de la Propuesta</h6>
              </div>


            </div>


            <div className="container px-4 mx-auto">
  <div className="flex flex-wrap">
    <div className="w-full px-4 flex-1">
      
      

{/* tabla postulantes */}
<div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-200"
        }
      >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className="font-semibold text-lg text-blueGray-700" 
                
              >
                Investigadores Postulantes
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
                    Usuario 2
                  </span>
                </th>
                
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  
                  <span
                    className={
                      "ml-3 font-bold"
                    }
                  >
                    Usuario 4
                  </span>
                </th>
                
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  
                  <span
                    className={
                      "ml-3 font-bold"
                    }
                  >
                    Usuario 5
                  </span>
                </th>
                
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  
                  <span
                    className={
                      "ml-3 font-bold"
                    }
                  >
                    Usuario 6
                  </span>
                </th>
                
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  
                  <span
                    className={
                      "ml-3 font-bold"
                    }
                  >
                    Usuario 7
                  </span>
                </th>
                
              </tr>
            </tbody>
          </table>
        </div>
        </div>




    </div>

{/* Opciones */}
    <div className="w-full px-4 flex-1">
      <button>Agregar</button><br></br>
      <button>Quitar</button>
    </div>

    <div className="w-full px-4 flex-1">
      
      
{/* tabla postulados */}
<div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-200"
        }
      >
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
                
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  
                
                </th>
                
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  
                
                </th>
                
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  
                
                </th>
                
              </tr>
            </tbody>
          </table>
        </div>
        </div>
        
    </div>
    
  </div>
  <button>Finalizar Seleccion</button><button>Cancelar</button>
</div>












          </div>
              <div className="text-center mt-16"></div>
            </div>
        </div>
      </section>


      
      <Footer />
    </>
  );
}
