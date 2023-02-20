import React from "react";

interface ChordNavigation {
  selectedId: [
    selectedId: number,
    setSelectedId: Function,
    objLength: number
  ]
}

const ChordNavigation: React.FC<ChordNavigation> = ({ selectedId }) => {

  const [id, setId, objLen] = selectedId

  return (
    <>
      <div className="dark:text-[#ddd] relative h-6 w-56 mx-auto mb-10 ">
        {/* Backward */}
        <span
          className="absolute left-[3rem] bottom-[-.5rem] px-5 cursor-pointer text-5xl select-none"
          style={{
            display: id > 0 ? 'inline-block' : 'none'
          }}
          onClick={() => setId(id - 1)}
        >
          &lsaquo;
        </span>

        <span>
          {id + 1} / {objLen}
        </span>

        {/* Forward */}
        <span
          className="absolute right-[3rem] bottom-[-.5rem] px-5 cursor-pointer text-5xl select-none"
          style={{
            display: id < objLen - 1 ? 'inline-block' : 'none'
          }}
          onClick={() => setId(id + 1)}
        >
          &rsaquo;
        </span>
      </div>
    </>
  )
}

export default ChordNavigation