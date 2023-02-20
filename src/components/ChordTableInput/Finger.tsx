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
      <div className="absolute dark:text-[#ddd] opacity-0 hover:opacity-100 w-8 h-8 rounded-3xl border border-[#333] dark:border-[#ddd] dark:bg-[#222] bg-[#fff] left-[-1rem] bottom-[1rem] cursor-pointer transition ease-in duration-100"
      style={{
        opacity: griff !== null && griff.fret === line ? 1 : 0
      }}
      >
        <p className="mt-[.22rem] mr-[.03rem]">
          {griff !== null ? griff.finger : ''}
        </p >
      </div>
    </>
  )
}

export default Finger