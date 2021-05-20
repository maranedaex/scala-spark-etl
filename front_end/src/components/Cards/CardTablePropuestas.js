import React,{useEffect, useState}  from "react";
import PropTypes from "prop-types";

import {Link} from "react-router-dom";
import Modal from 'react-modal';

// components
import ModalConfirmarPostulacion from "../Modals/ModalConfirmarPostulacion";
// import TableDropdown from "components/Dropdowns/TableDropdownPropuesta.js";

export default function CardTableCategorias({color}) {
  let getConf = require("config.js");
  const conf = getConf()
  const baseUrl = conf.backend.baseUrl
  const [modalIsOpen, setIsOpen] = useState(false);
  const [ propuestas, setPropuestas ] = useState([]);

  const getPropuesta = async () => {

    try {

      const response = await fetch(`${baseUrl}/propuestas`);
      const jsonData = await response.json();
      console.log('========>>>>>'); 
      console.log(jsonData);
      
      setPropuestas(jsonData);
    } catch (err) {
     //console.log(err);
    }
  };

  useEffect(() => {
    getPropuesta();
  }, []);

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-200")
        }
      >
        {/* Form */}
        {/* <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
          <div className="relative flex w-full flex-wrap items-stretch">
            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              placeholder="Search here..."
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
            />
          </div>
        </form> */}

        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "")
                }
              >
                Listado de propuestas
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
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-blueGray-800 text-blueGray-300 border-blueGray-700")
                }
              >
               ID
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-blueGray-800 text-blueGray-300 border-blueGray-700")
                }
              >
                Titulo propuesta
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-blueGray-800 text-blueGray-300 border-blueGray-700")
                }
              >
                Categoría
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-blueGray-800 text-blueGray-300 border-blueGray-700")
                }
              >
                Estado
              </th>

              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-blueGray-800 text-blueGray-300 border-blueGray-700")
                }
              ></th>
            </tr>
            </thead>
            <tbody>
            {propuestas.map((propuesta, index) => (
            <tr>
              <th>
              {index+1}
              </th>
              <th
                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                  
                  <span
                    className={
                      "ml-3 font-bold " +
                      +(color === "light" ? "text-blueGray-600" : "text-white")
                    }
                  >
                   {propuesta.descripcion}
                  </span>
              </th>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">
                  {propuesta.categoria}
              </td>
              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left ">
                <i className="fas fa-circle text-orange-500 mr-2"></i>  
                  {propuesta.estado}
              </td>

              <td
                className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">


                <Link
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  to="/SeleccionarEquipo"
                >
                  Postular
                </Link>


              </td>
            </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

CardTableCategorias.defaultProps = {
  color: "light",
};

CardTableCategorias.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
