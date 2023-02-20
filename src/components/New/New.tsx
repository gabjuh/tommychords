import React from "react";
import ChordTable from "../ChordTable/ChordTable";
import { useState } from "react";
import PageTitle from "../PageComponents/PageTitle";

interface New {

}

const New: React.FC<New> = () => {

  interface String {
    fret: number
    finger: number
  }

  interface Chord {
    name: string
    base: number
    strings: (String | null)[]
  }

  const [newChordObj, setNewChordObj] = useState<Chord>({
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
        newChord={true}
      />
    </>
  )
}

export default New

