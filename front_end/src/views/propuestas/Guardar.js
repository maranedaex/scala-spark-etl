import React, {Fragment, useEffect, useState} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
 


 

// components

const GuardarPropuestas = () => {
 
  

  return (
    <>
      <IndexNavbar fixed />


      <section className="header relative pt-16 items-center flex h-screen max-h-860-px ">
      <div className="container mx-auto ">
            <div className="w-full ">
              
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-xl font-bold">Registro de propuestas</h6>
                  </div>

                  <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Información de la propuesta
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    Título
                  </label>
                  <input
                    type="text"
                    name="titulo"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue=""/>
                </div>
              </div>
            
            
              <br />

              <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                  <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">
                      Categorías
                    </label>

                    <div className="flex flex-wrap"> 
                    <fieldset>
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              name="categoria"
                              id="categoria"
                              type="radio"
                              className="form-radio border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                            />
                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                              Inteligencia Artificial
                            </span>
                              </label>
                        </div>
                      </div>

                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              name="categoria"
                              id="categoria"
                              type="radio"
                              className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                            />
                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                              Diseño de Videojuegos
                            </span>
                          </label> 
                        </div>
                      </div> 
                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3"> 
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              name="categoria"
                              id="categoria"
                              type="radio"
                              className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                            />
                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                              Desarrollo Web
                            </span>
                          </label> 
                        </div>
                      </div>

                      <div className="w-full lg:w-6/12 px-4">
                        <div className="relative w-full mb-3">
                          <label className="inline-flex items-center cursor-pointer">
                            <input
                              name="categoria"
                              id="categoria"
                              type="radio"
                              className="form-radio border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                            />
                            <span className="ml-2 text-sm font-semibold text-blueGray-600">
                              Redes y Seguridad
                            </span>
                          </label>
                        </div>
                      </div> 
                    </fieldset>
                    </div> 
                  </div>
              </div>
              
              <br />

           
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    
                    Descripcion (Texto)
                  </label>
                  <textarea
                    name="descripcion"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue=""/>
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    
                    Fecha Inicio
                  </label>
                  <input
                   name="fechaInicio"
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue=""/>
                </div>
              </div>
           
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    
                    Fecha Termino
                  </label>
                  <input
                     name="fechaTermino"
                    type="date"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue=""/>
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    
                    Foto
                  </label>
                  <input
                     name="archivo"
                    type="file"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue=""/>
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    Proponente
                  </label>
                  
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    email_proponente_creador@mail.com
                  </label>

                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    
                    Links de interes Nº
                  </label>
                  <input
                    name="links"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue=""/>
                    
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    
                    Organización proponente
                  </label>
                  <input
                    name="organizacion"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue=""/>
                    
                </div>
              </div>
              
          
              </div>

        

          </form>

          <div className="text-center flex justify-between">
            <button  
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
              >
                Guardar
            </button>
            
            {/* <Tooltip title="Se muestra solo a las propuestas que ya tienen asignado los investigadores" aria-label="add"> */}
            {/* <button
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                tooltips="(cuando tenga investigadores aceptados por el guia)"
              >
                Cerrar 
            </button> */}
            {/* </Tooltip> */}
          </div>

                  
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

export default GuardarPropuestas;