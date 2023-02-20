import React from "react";
import ChordName from "./ChordName";
import { useState, useEffect } from "react";
import chords_static from "../../chords_static.json"
import String from "./String";
import PlayedStrings from "./PlayedStrings";
import Base from "./Base";

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

        {[...Array(4)].map((line, j) => {

          const verticalPosition = 100
          const getVerticalPosition = j * verticalPosition
          const isFirstFret = j === 0
          const stageLineHeight = 15

          return (
            <div key={j}>
              <div className="relative">
                <div
                  className="absolute border-t-[#ddd] w-[301px] mx-auto left-0 right-0"
                  id="chord-table"
                  style={{
                    borderTop: isFirstFret ? `${stageLineHeight}px solid #ddd` : '0',
                    top: !isFirstFret ? `${getVerticalPosition + stageLineHeight}px` : `${getVerticalPosition}px`
                  }}
                >
                  {[...Array(6)].map((fret, i) => {
                    return (
                      <String
                        key={i}
                        line={j + 1}
                        i={i}
                        horizontalDistance={horizontalDistance}
                        griff={obj[selectedId].strings[5 - i]}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default ChordTable