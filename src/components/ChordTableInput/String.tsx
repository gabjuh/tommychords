import React from "react";
import Finger from "./Finger";

interface String {
  i: number
  griff: {
    fret: number;
    finger: number;
  } | null
  line: number
}

const String: React.FC<String> = ({ i, line, griff}) => {

  const horizontalDistance = 60

  const getHorizontalPosition = i * horizontalDistance

  const isLastString = i > 4

  return (
    <>
      <div 
        className="absolute border-l-[1px] w-[0px] h-[100px]"
        style={{
          left: `${getHorizontalPosition}px`
        }}        
      >
      <Finger 
        griff={griff}
        line={line}
      />
        <div 
          className="absolute border bottom-[0px]"
          style={{
            display: isLastString ? 'none' : 'block', 
            width: isLastString ? 0 : `${horizontalDistance}px`
          }}
        >
        </div>
      </div>
    </>
  )
}

export default String