import React, { Component } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import axios from "axios";
import { Redirect } from "react-router"; 
import swal from 'sweetalert';
 
 


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
      image: null,
      organizacion:'',
      email:'',
      published: false,
      base64: '',
      filename: '',
      filesize: '',
      messageerror: '',
      redirect: false,
      msgsubmit: '',
      error: null,
      guardarErrors: {image: '', id_proponente: ''},
      emailValid: false,
      descripcionValid: false,
      formValid: false
    };
    // 2: PERMISOS 
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind();
    this.handleChangeImage = this.handleChangeImage.bind();
  
  }

  componentWillUnmount() {
    // fix Warning: Can't perform a React state update on an unmounted component
    this.setState = (state,callback)=>{
        return;
    };
}

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let descripcionValid = this.state.descipciondValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'descripcion':
        descripcionValid = value.length >= 6;
        fieldValidationErrors.descripcion = descripcionValid ? '': ' is too short';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    descripcionValid: descripcionValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.descripcionValid});
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }


   mostrarAlerta=(e)=>{
      swal("Esta es la alerta");
   }

   handleChange = (e) =>{
      this.setState({[e.target.name]:e.target.value}) 

  }
 
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
  
    const headers =  {
      'Content-Type': 'multipart/form-data' 
    };
    const propuesta = {
      id_proponente : this.state.id_proponente,
      titulo: this.state.titulo,
      categoria: this.state.categoria,
      descripcion: this.state.descripcion,
      estado: this.state.estado,
      organizacion: this.state.organizacion,
      image: this.state.image,
      email: this.state.email,
      published: this.state.published

  };
    // Armando la Data para Axios
    const formData = new FormData(); 
    formData.append("titulo", this.state.titulo);
    formData.append("estado", this.state.estado);
    formData.append("id_proponente", this.state.id_proponente);
    formData.append("descripcion", this.state.descripcion);
    formData.append("categoria", this.state.categoria); 
    formData.append("organizacion", this.state.organizacion);
    formData.append("image", this.state.image);
    formData.append("email", this.state.email);
    formData.append("published", this.state.published);

    axios.post('http://localhost:5000/api/propuestas/add', { propuesta, headers })
    .then(response =>{ 
      // handle submit form success
      console.log(response); 
      this.setState({ redirect: true}); // ok 
      this.setState({ msgsubmit: ''});  // ok 

    })
    .catch(err => {
      // handle submit fail
      console.error({err});
      //this.setState({error : err});
    });
 
  } ;
  // Manejo del Upload File
  handleChangeImage = e => {

    console.log("Uploading...");
    var self = this;
    var reader = new FileReader();
    var file = e.target.files[0];

    reader.onload = function(upload) {
        self.setState({
            image: upload.target.result
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

      if(self.state.image!==null){
         
        console.log(self.state.image);
        
        self.setState({
          messageerror: ""
        });
        //this.successShow();

        console.log("Uploaded");


      }  else {
        self.setState({
          messageerror: "Disculpe!, Intente nuevamente"
        });
         //this.handleShow();
      }   
    
  }

 
  

  render(){ 
    const { titulo, estado, categoria, id_proponente, descripcion, organizacion, image, email, redirect } = this.state;

    if (redirect) {
       return <Redirect to="/Listado" />;
    }

    
  return (
    <>
      <IndexNavbar fixed />
      <form onSubmit={this.submitHandler}>
      {this.state.error != null && <p>{this.state.error}</p> }
 
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
                  <input type="text" id="titulo"  name="titulo"  onChange={this.handleChange} value={titulo} placeholder="Titulo"  required/>
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
                          name="categoria"
                          onChange={this.handleChange}
                          value={categoria}
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                          <option value="">Make a selection</option>
                          <option value="Inteligencia Artificial">Inteligencia Artificial</option>
                          <option value="Diseño de Videojuegos">Diseño de Videojuegos</option>
                          <option value="Desarrollo Web">Desarrollo Web</option>
                          <option value="Redes y Seguridad">Redes y Seguridad</option>
                          <option value="Redes y Seguridad">Redes y Seguridad</option>
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
                    name="descripcion"
                    value={descripcion}
                    type="text"
                    cols="40" rows="3"
                    required minLength={5} maxLength={150}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Descripcion de la propuesta" />
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
                          name="estado"
                          value={estado}
                          required
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                           <option value="">Make a selection</option>
                          <option value="Pendiente">Pendiente</option>
                          <option value="Activo">Activo</option> 
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
                    name="id_proponente"
                    value={id_proponente}
                    placeholder="Propopnente"
                    required
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     />
                </div>
              </div>


              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="image">
                    
                    PDF
                  </label>
             
                    <input  type="file" id="image"  name="image" required
                              className="upload-file"  
                              onChange={this.handleChangeImage}
                              encType="multipart/form-data" 
                              accept="application/pdf"
                              placeholder="PDF"
                              />

                    
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
                     name="organizacion"
                     value={organizacion}
                     type="text"
                     placeholder="Nombre Organizacion"
                     required
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                    
                </div>
              </div>
              
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="email">
                    
                    Email
                  </label>
                  <input
                     onChange={this.handleChange} 
                     type="text" 
                     id="email"
                     name="email"
                     value={email}
                    placeholder="Ingrese su email"
                    required
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                     />
                    <br/>
                   
                    <br/>
                </div>
              </div>
          </div>
                    <div className="text-center flex justify-between">
                         <input className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                           type="submit" value="Submit" /> 
                           <input className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                           type="button" value="Volver"  onPress={() => this.props.navigation.goBack()} />
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