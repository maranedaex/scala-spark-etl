import React, {Fragment, useState, setState} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Component } from "react";
import { createPropuesta } from '../../actions/createPropuesta';



// components

class GuardarPropuestas extends Component {



  handleSubmit(data) {
     createPropuesta(data);
   }


  render(){ 
  return (
    <>
      <IndexNavbar fixed />


      <section className="header relative pt-16 items-center flex h-screen max-h-860-px ">
      <div className="container mx-auto ">
            <div className="w-full ">
              
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-xl font-bold">Ingreso de Propuesta Nueva</h6>
                  </div>

         <form  onSubmit={this.handleSubmit}>
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
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     />
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

                    <select
                          name="categoria"
                          onChange={this.handleCategoriaChange}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                          <option>Inteligencia Artificial</option>
                          <option>Diseño de Videojuegos</option>
                          <option>Desarrollo Web</option>
                          <option>Redes y Seguridad</option>
                        </select>
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
                    onChange={this.handleDescriptionChange}
                    name="descripcion"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                  <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password">
                      Estado
                    </label>

                    <div className="flex flex-wrap"> 

                    <select
                          name="estado"
                          onChange={this.handleEstadoChange} 
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                          <option>Pendiente</option>
                          <option>Activo</option> 
                        </select>
                    </div> 
                  </div>
              </div>
           
             

              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="idproponente">
                    Proponente
                  </label>
                  
               
                  <input
                    type="text"
                    onChange={this.handleProponenteChange}
                    name="idproponente"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     />
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
                    />
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
                     type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                    
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
                     type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                    
                </div>
              </div>
              
          
              </div>

        

      

          <div className="text-center flex justify-between">
            <button  
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit"
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
          </form>
                  
                </div>

              
              </div>
              <div className="text-center mt-16"></div>
            </div>
        </div>
      </section>




      


      <Footer />
    </>
  )};
}

export default GuardarPropuestas;