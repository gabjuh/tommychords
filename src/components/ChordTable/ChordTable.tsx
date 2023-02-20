import React from "react";
import ChordName from "./ChordName";
import { useState, useEffect } from "react";
import chords_static from "../../chords_static.json"
import PlayedStrings from "./PlayedStrings";
import Base from "./Base";
import Fretboard from "./Fretboard";

interface ChordTable {
  newChord?: true
}

const ChordTable: React.FC<ChordTable> = ({ newChord }) => {

  const horizontalDistance = 60

  const obj = chords_static
  const objLength = obj.length

  const [selectedId, setSelectedId] = useState(0)

  return (
    <>
      <div id="chord-table-wrapper" className="relative mb-[6rem]">

        <ChordName
          setSelectedId={[selectedId, setSelectedId, objLength]}
          name={obj[selectedId].name}
        />

        <PlayedStrings
          obj={obj[selectedId]}
          horizontalDistance={horizontalDistance}
        />

        <Base
          obj={obj[selectedId]}
        />

        <Fretboard
          obj={obj[selectedId]}
          horizontalDistance={horizontalDistance}
        />

      </div>
    </>
  )
}

export default ChordTable