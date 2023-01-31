import React from "react";
import ChordName from "./ChordName";
import String from "./String";

interface ChordTableInput {

}

const ChordTableInput: React.FC<ChordTableInput> = () => {  
  return (
    <>
      <div id="chord-input-wrapper">
        <ChordName />
        {new Array(4).fill('').map((line, j) => {

          const verticalPosition = 100
          const getVerticalPosition = j * verticalPosition
          const isFirstFret = j === 0
          const stageLineHeight = 15

          return (
            <div className="relative " key={j}>
              <div 
                className="absolute border-t-[#ddd] w-[361px] mx-auto left-0 right-0" 
                id="chord-table-input"
                style={{
                  borderTop: isFirstFret ? `${stageLineHeight}px solid #ddd` : '0',
                  top: !isFirstFret ? `${getVerticalPosition + stageLineHeight}px` : `${getVerticalPosition}px`
                }}
              >  
                {new Array(7).fill('').map((fret, i) => {
                  return (
                    <String 
                      key={i}
                      i={i}
                    />
                  )
                })}
              </div>
           </div>
          )
        })}
      </div>
    </>
  )
}

export default ChordTableInput