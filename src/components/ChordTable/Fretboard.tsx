import React from 'react'
import String from "./String";

interface Fretboard {
  horizontalDistance: number
  obj: {
    name: string;
    base: number;
    strings: ({
      fret: number;
      finger: number;
    } | null)[];
  }
}

const Fretboard: React.FC<Fretboard> = ({
  obj,
  horizontalDistance,
}) => {
  return (
    <>
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
                      griff={obj.strings[5 - i]}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Fretboard