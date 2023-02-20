import React from "react";
import ChordTable from "../ChordTable/ChordTable";
import PageTitle from "../PageComponents/PageTitle";

interface Overview {

}

const Overview: React.FC<Overview> = () => {
  return (
    <>
      <PageTitle text="Overview" />
      <ChordTable />
    </>
  )
}

export default Overview

