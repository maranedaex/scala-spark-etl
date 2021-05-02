import React from "react";

// components

import CardTablePropuestas from "components/Cards/CardTablePropuestas.js";

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTablePropuestas />
        </div>
        <div className="w-full mb-12 px-4">
          <CardTablePropuestas color="dark" />
        </div>
      </div>
    </>
  );
}
