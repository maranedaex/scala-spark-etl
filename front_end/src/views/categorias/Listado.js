/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import CardTableCategorias from "components/Cards/CardTableCategorias.js";

export default function Listado() {
  return (
    <>
      <IndexNavbar fixed />

      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
      <div className="container mx-auto">
          {/* <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg py-16 px-12 relative z-10"> */}
            <div className="w-full text-center">
              
              <CardTableCategorias />

              <div className="text-center mt-16"></div>
            </div>
          {/* </div> */}
        </div>
      </section>


      
      <Footer />
    </>
  );
}
