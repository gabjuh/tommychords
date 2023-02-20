import React from "react";
import ChordTableInput from "../ChordTable/ChordTable";
import PageTitle from "../PageComponents/PageTitle";

interface Overview {

}

const Overview: React.FC<Overview> = () => {
  return (
    <>
      <PageTitle text="Overview" />
      <ChordTableInput />
    </>
  )
}

export default Overview

