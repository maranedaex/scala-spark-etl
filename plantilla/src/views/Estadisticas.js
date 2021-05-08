import React from "react";
// import { Link } from "react-router-dom";

import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";

export default function Estadisticas() {
  return (
    <>
      <Navbar fixed />
      <main className="">
        <section className="relative block h-350-px">
       
        </section>


        <section className="" id="Contacto">
       

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            


          <div className="flex flex-wrap ">
            <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
              <CardLineChart />
            </div>
            <div className="w-full xl:w-6/12 px-4">
              <CardBarChart />
            </div>
          </div>



            
          </div>
        </div>
      </section>
        
      </main>
      <Footer />
    </>
  );
}
