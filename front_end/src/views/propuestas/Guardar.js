import React, {Fragment, useState, setState} from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Component } from "react";
import axios from "axios";
 
// components

class GuardarPropuestas extends Component {
  
  constructor(props) {
    super(props);
    // 1: GET SET
    this.state = {
      titulo: '',
      categoria: '',
      descripcion: '',
      estado: '',
      id_proponente: '',
      archivo: null,
      organizacion:'',
      base64: '',
      filename: '',
      filesize: '',
      messageerror: ''
    };
    // 2: PERMISOS 
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    
  }

 
   handleChange(e) {
      
    this.setState({
      [e.target.id]: e.target.value,
    })


  }
  // handleCategoriaChange(e){
  //   this.setState({categoria: e.target.value});
  // }
 
  handleSubmit = e => {
    e.preventDefault();
    console.log('submited!!!!');
    console.log('a titulo was : ' + this.state.titulo);
    console.log('a categoria: ' + this.state.categoria);
    console.log('a descriopcion was : ' + this.state.descripcion);
    console.log('a estado: ' + this.state.estado);
    console.log('a id proponenete: ' + this.state.id_proponente);
    console.log('a archivo: ' + this.state.image);
    console.log('a organizacion: ' + this.state.organizacion);

    // Armando la Data para Axios
    var formData = new FormData();
    
    //formData.append("id_proponente", 1);
    formData.append("titulo", this.state.titulo);
    formData.append("estado", this.state.estado);
    formData.append("id_proponente", this.state.id_proponente);
    formData.append("descripcion", this.state.descripcion);
    formData.append("categoria", this.state.categoria); 
    formData.append("organizacion", this.state.organizacion);
    formData.append("image", this.state.archivo);

    axios.post('http://localhost:5000/addpropuesta', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(function (){
      console.log('SUCCESS!!!!');
    })
    .catch(err => {
      console.error({err});
    });
 
  }  

  handleChangeImage = e => {

    console.log("Uploading...");
    var self = this;
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = function(upload) {
        self.setState({
            archivo: upload.target.result
        });
    };
    reader.onerror = function(e) {
      console.log(e);
      self.setState({
        messageerror: "Intente nuevamente" + reader.error
      });
      reader.abort(); 
      
    };
      reader.readAsDataURL(file);

      if(self.state.archivo!==null){
         console.log(self.state.archivo);
         self.setState({
          messageerror: ""
        });

          console.log("Uploaded");


      }  else {
        self.setState({
          messageerror: "Disculpe!, Intente nuevamente"
        });
      }   
    
  }

  render(){ 
  return (
    <>
      <IndexNavbar fixed />
      <form onSubmit={this.handleSubmit}>

      <section className="header relative pt-16 items-center flex h-screen max-h-860-px ">
      <div className="container mx-auto ">
            <div className="w-full ">
              
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center flex justify-between">
                    <h6 className="text-xl font-bold">Ingreso de Propuesta Nueva</h6>
                  </div>

      
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Información de la propuesta
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="titulo">
                    Título
                  </label>
                  <input type="text" id="titulo"  onChange={this.handleChange} />
                  {/* <input
                    value={this.state.titulo} onChange={this.handleChange} 
                    type="text"
                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     /> */}
                </div>
              </div>
            
            
              <br />

              <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                  <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="categoria">
                      Categorías
                    </label>

                    <div className="flex flex-wrap"> 

                    <select
                          id="categoria"
                          onChange={this.handleChange}
                          value={this.state.categoria}
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
                    htmlFor="descripcion">
                    
                    Descripcion (Texto)
                  </label>
                  <textarea
                    onChange={this.handleChange} 
                    id="descripcion"
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     />
                </div>
              </div>

              <div className="w-full lg:w-6/12 px-4">
                  <div className="relative w-full mb-3">
                  <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="estado">
                      Estado
                    </label>

                    <div className="flex flex-wrap"> 

                    <select
                          onChange={this.handleChange} 
                          id="estado"
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
                    htmlFor="id_proponente">
                    Proponente
                  </label>
                  
               
                  <input
                    type="text"
                    onChange={this.handleChange} 
                    id="id_proponente"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     />
                </div>
              </div>


              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    
                    PDF
                  </label>
                  {/* <input
                     onChange={this.handleChange} 
                     id="archivo"
                    type="file"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    /> */}
                    <input  type="file" id="archivo" 
                              className="upload-file"  
                              onChange={this.handleChangeImage}
                              encType="multipart/form-data" 
                              accept="application/pdf"
                              required/>
                     <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password">
                    
                    {this.state.messageerror} 
                  </label>     
                </div>
              </div>
             
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="organizacion">
                    
                    Organización proponente
                  </label>
                  <input
                     onChange={this.handleChange} 
                     id="organizacion"
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
            {/* <button  
                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit"
              >
                Guardar
            </button> */}
            
            <input className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="submit" value="Submit" />
            
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




      

      </form>
      <Footer />
    </>
  )};
}

export default GuardarPropuestas;