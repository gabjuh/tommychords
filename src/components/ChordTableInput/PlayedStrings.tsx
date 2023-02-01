import React from "react";

interface PlayedStrings {
  obj: {
    name: string;
    base: number;
    strings: ({
        fret: number;
        finger: number;
    } | null)[];
  }
  horizontalDistance: number
}

const PlayedStrings: React.FC<PlayedStrings> = ({ obj, horizontalDistance }) => {
  return (
    <>
      <div className="relative">
        {obj.strings.map((el, i) => {
          const getHorizontalPosition = (i + 1) * 59
          return (
            <span
              key={i}
              className="absolute bottom-1 text-xl"  
              style={{
                right: `${getHorizontalPosition}px`
              }}
            >
              {el?.finger === undefined ? 'X' : el?.fret === 0 ? 'O' : ''}
            </span>
          )
        })}
      </div>
    </>
  )
}

export default PlayedStrings