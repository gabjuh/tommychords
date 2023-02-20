import React from "react";
import MenuItem from "./MenuItem";

interface Menu {

}

const Menu: React.FC<Menu> = () => {
  return (
    <>
      {/* -rotate-90 hidden opacity-0 */}
      <div id="menu" className="absolute pb-2 pt-8 -mt-7 ml-2 border dark:border-[#eee] border-[#222] dark:bg-[#222]  w-[7rem] rounded-b-3xl z-40 transform-gpu -rotate-90 hidden opacity-0  origin-top-left transition ease-out duration-150">
        {/* <p className="text-[#777]">Menü</p> */}
        <MenuItem 
          name="Overview" 
          route="/overview"
        />
        <MenuItem 
          name="New" 
          route="/new"
        />
        <MenuItem 
          name="Let's play!" 
          route="/play"
        />
        <MenuItem 
          name="Help" 
          route="/help"
        />
        <MenuItem 
          name="Credits" 
          route="/credits"
        />
      </div>
    </>
  )
}

export default Menu