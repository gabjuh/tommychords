import React from "react";

interface ChordName {
  name: string
  isInput?: 'new' | 'edit'
}

const ChordName: React.FC<ChordName> = ({ name }) => {

  return (
    <>
      <h1 className="dark:text-[#ddd] text-4xl mt-5">{name}</h1>
    </>
  )
}

export default ChordName