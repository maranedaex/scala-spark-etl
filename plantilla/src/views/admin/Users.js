import React from "react";

// components

import CardUsers from "components/Cards/CardUsers.js";
import CardProfile from "components/Cards/CardProfile.js";
import CardUserTable from "components/Cards/CardUsersTable.js";

export default function Users() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CardUsers />
        </div>
        <div className="w-full mb-12 px-4">
          <CardUserTable />
        </div>
      </div>
    </>
  );
}
