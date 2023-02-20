import React from "react";
import ChordNavigation from "./ChordNavigation";

interface ChordName {
  name: string
  selectedId: [
    selectedId: number,
    setSelectedId: Function,
    objLength: number
  ]
}

const ChordName: React.FC<ChordName> = ({ name, selectedId }) => {

  const [id, setId, objLen] = selectedId


  return (
    <>
      <h1 className="dark:text-[#ddd] text-4xl mt-5">{name}</h1>
      <ChordNavigation
        selectedId={selectedId}
      />
    </>
  )
}

export default ChordName