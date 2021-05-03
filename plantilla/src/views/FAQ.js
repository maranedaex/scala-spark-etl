import React from "react";
import { Link } from "react-router-dom";

import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Profile() {
  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
            <div className="">
              
                
              <section className="pb-16 bg-blueGray-200 relative pt-32" id="FAQ">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
             
              <h3 className="font-semibold text-3xl">
                Preguntas frecuentes
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                ¿Debo estar registrado para postular y adjudicarme un proyecto?
              </p>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Efectivamente.
              </p>

              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                ¿Solo los usuarios acreditados pueden adjudicarse proyectos?
              </p>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                Efectivamente.
              </p>
              
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
                
             
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
