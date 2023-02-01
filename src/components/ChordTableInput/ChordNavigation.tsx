import React from "react";

interface ChordNavigation {
  setSelectedId: [setSelectedId: number, setSelectedId: Function, objLength: number]
}

const ChordNavigation: React.FC<ChordNavigation> = ({ setSelectedId }) => {

  const [val, fn, len] = setSelectedId

  return (
    <>
      <div className="relative h-6 w-56 mx-auto mb-10 ">
        {/* Back */}
        <span 
          className="absolute left-[3rem] bottom-[-.5rem] px-5 cursor-pointer text-5xl" 
          style={{
            display: val > 0 ? 'inline-block' : 'none'
          }}
          onClick={() => fn(val - 1)}
        >
          &lsaquo;
        </span>

        <span>
          {val + 1} / {len}
        </span>
      
        {/* Forward */}
        <span 
          className="absolute right-[3rem] bottom-[-.5rem] px-5 cursor-pointer text-5xl" 
          style={{
            display: val < len - 1 ? 'inline-block' : 'none'
          }}
          onClick={() => fn(val + 1)}
        >
          &rsaquo;
        </span> 
      </div>
    </>
  )
}

export default ChordNavigation