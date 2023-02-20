import React from "react";
import ChordTable from "../ChordTable/ChordTable";
import { useState } from "react";
import PageTitle from "../PageComponents/PageTitle";
import { IChord } from "../ChordTable/IChord";

interface New {

}

const New: React.FC<New> = () => {

  interface String {
    fret: number
    finger: number
  }

  const [newChordObj, setNewChordObj] = useState<IChord>({
    "name": "?",
    "base": 0,
    "strings": [
      null,
      null,
      null,
      null,
      null,
      null
    ]
  })

  return (
    <>
      <PageTitle text="New Chord" />
      <ChordTable
        input={true}
        newChordObj={[newChordObj, setNewChordObj]}
      />
    </>
  )
}

export default New

