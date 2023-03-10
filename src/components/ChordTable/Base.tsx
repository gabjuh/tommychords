import React from 'react'
import { IObj } from './IObj';

interface Base {
  obj: IObj
}

const base = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'XIII', 'XIV', 'XV']

const Base: React.FC<Base> = ({ obj }) => {
  return (
    <div className="absolute dark:text-[#ddd] text-lg bottom-[-62px] left-[-.5rem]">
      {obj.base !== 0 ? `${base[obj.base]}` : ''}
    </div>
  )
}

export default Base