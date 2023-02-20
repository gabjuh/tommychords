import React from "react";
import ChordTableInput from "../ChordTableInput/ChordTableInput";
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

