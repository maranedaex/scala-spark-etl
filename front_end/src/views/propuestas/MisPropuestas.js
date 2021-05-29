/*eslint-disable*/
import React from "react";
import {Link} from "react-router-dom";
import 'react-dropzone-uploader/dist/styles.css';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

//import CardTablePropuestas from "components/Cards/CardTablePropuestas.js"; 

import CardPropuestasList from "components/Cards/CardPropuestasList.js";

export default function MisPropuestas() {
   

    // const MisPropuestas = props => {
  
    // const initialPropuestaState = {
    //   id: null,
    //   title: "",
    //   description: "",
    //   published: false
    // };
    // const [currentPropuesta, setCurrentPropuesta] = useState(initialPropuestaState);
    // const [message, setMessage] = useState("");
  
    // const getPropuesta = id => {
    //   PropuestaDataService.get(id)
    //     .then(response => {
    //       setCurrentPropuesta(response.data);
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // };
  
    // useEffect(() => {
    //   getPropuesta(props.match.params.id);
    // }, [props.match.params.id]);
  
    // const handleInputChange = event => {
    //   const { name, value } = event.target;
    //   setCurrentPropuesta({ ...currentPropuesta, [name]: value });
    // };
  
    // const updatePublished = status => {
    //   var data = {
    //     id: currentPropuesta.id,
    //     titulo: currentPropuesta.titulo,
    //     descripcion: currentPropuesta.descripcion,
    //     published: status
    //   };
  
    //   PropuestaDataService.update(currentPropuesta.id, data)
    //     .then(response => {
    //       setCurrentPropuesta({ ...currentPropuesta, published: status });
    //       console.log(response.data);
    //       setMessage("The status was updated successfully!");
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // };
  
    // const updatePropuesta = () => {
    //   PropuestaDataService.update(currentPropuesta.id, currentPropuesta)
    //     .then(response => {
    //       console.log(response.data);
    //       setMessage("The propuesta was updated successfully!");
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // };
  
    // const deletePropuesta = () => {
    //   PropuestaDataService.remove(currentPropuesta.id)
    //     .then(response => {
    //       console.log(response.data);
    //       props.history.push("/propuestas");
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // };
  
  return (
    <>
      <IndexNavbar fixed/>
      
      <section className="relative block h-70-px" />
      
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto ">
          <div className="w-full text-center ">

            <div
              className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center flex justify-between">
                  <h6 className="text-xl font-bold">Listado de propuestas</h6>

                  <Link
                  className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  to="/propuestas/guardar"
                >
                  Ingresar
                </Link>
                </div>

               

              </div>

              <CardPropuestasList color="dark"/>
            </div>
            <div className="text-center mt-16"/>
          </div>
        </div>
         
        
      
      </section>

      <Footer/>
    </>
  );
}

//export default MisPropuestas;
