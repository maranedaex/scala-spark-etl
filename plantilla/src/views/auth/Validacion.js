import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Registro recibido</small>
                </div>
                
                <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                     Gracias por registrarse, un administrador validara sus datos para que pueda ingresar a la plataforma con el perfil seleccionado.
                    </label>
                    
                  </div>


              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              {/* <div className="w-1/2">
                

                <Link to="/auth/recuperar" className="text-blueGray-200">
                  <small>Olvide clave</small>
                </Link>

              </div> */}
              <div className="w-1/2 text-right">
                <Link to="/auth/login" className="text-blueGray-200">
                  <small>Volver</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
