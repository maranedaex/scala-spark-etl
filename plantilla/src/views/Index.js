/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import CardSlider from "components/Cards/CardSlider.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />

      <section>
        
        <CardSlider />

      </section>
        

      <Footer />
    </>
  );
}
