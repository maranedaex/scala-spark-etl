import React from "react";
// import { Link } from "react-router-dom";

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <section className="relative block h-350-px">
       
        </section>

        <section className="" id="Contacto">

      <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
             
              <h3 className="font-semibold text-3xl">
                Preguntas frecuentes
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                ¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </p>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Phasellus quis mauris porta, viverra orci vel, hendrerit enim.
              </p>

              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                ¿Proin placerat ipsum non cursus tincidunt.?
              </p>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Nam et nulla et elit blandit luctus a quis justo.
              </p>
              
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
        </section>
      <Footer />
    </>
  );
}
