import React from "react";
import { useState, useEffect } from "react";

interface Finger {
  griff: {
    fret: number;
    finger: number;
  } | null
  line: number
}

const Finger: React.FC<Finger> = ({ griff, line }) => {

  return (
    <>
      <div className="absolute opacity-0 hover:opacity-100 w-8 h-8 rounded-3xl border bg-[#222] left-[-1rem] bottom-[1rem] cursor-pointer transition ease-in duration-100"
      style={{
        opacity: griff !== null && griff.fret === line ? 1 : 0
      }}
      >
        <p className="mt-[.2rem]">
          {griff !== null ? griff.finger : ''}
        </p >
      </div>
    </>
  )
}

export default Finger