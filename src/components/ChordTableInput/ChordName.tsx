import React from "react";

interface ChordName {
  name: string
  setSelectedId: [setSelectedId: number, setSelectedId: Function, objLength: number]
}

const ChordName: React.FC<ChordName> = ({ name, setSelectedId }) => {
  const [val, fn, len] = setSelectedId
  return (
    <> 
      <h1 className="text-4xl mt-5">{name}</h1>
      <div className="relative h-6 w-56 mx-auto mb-10 ">
        {/* Back */}
        <span 
          className="absolute left-[3rem] bottom-[-.6rem] px-5 cursor-pointer text-5xl" 
          style={{
            display: val > 0 ? 'inline-block' : 'none'
          }}
          onClick={() => fn(val - 1)}
        >
          &lsaquo;
        </span>

        <span>
          1/2
        </span>
      
        {/* Forward */}
        <span 
          className="absolute right-[3rem] bottom-[-.6rem] px-5 cursor-pointer text-5xl" 
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

export default ChordName