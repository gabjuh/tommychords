import React from "react";
import ChordName from "./ChordName";
import { useState, useEffect } from "react";
import chords_static from "../../chords_static.json"
import PlayedStrings from "./PlayedStrings";
import Base from "./Base";
import Fretboard from "./Fretboard";
import ChordNavigation from "./ChordNavigation";
import { IChord } from "./IChord";

interface ChordTable {
  isInput?: 'new' | 'edit'
  newChordObj: [
    newChordObj: IChord,
    setNewChordObj: React.Dispatch<React.SetStateAction<IChord>>
  ]
}

const ChordTable: React.FC<ChordTable> = ({
  isInput,
  newChordObj
}) => {

  const [newChord, setNewChord] = newChordObj

  const horizontalDistance = 60

  const obj = chords_static
  const objLength = obj.length

  const [selectedId, setSelectedId] = useState(0)

  return (
    <>
      <div id="chord-table-wrapper" className="relative mb-[6rem]">

        <ChordName
          isInput={isInput}
          name={obj[selectedId].name}
        />

        <ChordNavigation
          selectedId={[selectedId, setSelectedId, objLength]}
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