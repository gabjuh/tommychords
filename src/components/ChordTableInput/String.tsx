import React from "react";

interface String {
  i: number
}

const String: React.FC<String> = ({i}) => {

  const horizontalDistance = 60

  const getHorizontalPosition = i * horizontalDistance

  const isLastString = i > 5

  return (
    <>
      <div 
        className="absolute border-l-[1px] w-[0px] h-[100px]"
        style={{
          left: `${getHorizontalPosition}px`
        }}        
      >
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