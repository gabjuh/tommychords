import React from "react";
import ChordNavigation from "./ChordNavigation";

interface ChordName {
  name: string
  setSelectedId: [setSelectedId: number, setSelectedId: Function, objLength: number]
}

const ChordName: React.FC<ChordName> = ({ name, setSelectedId }) => {
  return (
    <> 
      <h1 className="dark:text-[#ddd] text-4xl mt-5">{name}</h1>
      <ChordNavigation 
        setSelectedId={setSelectedId}
      />
    </>
  )
}

export default ChordName