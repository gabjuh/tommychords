import React from "react";
import MenuItem from "./MenuItem";

interface Menu {
  isMenuOpen: Boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<Boolean>>
}

const Menu: React.FC<Menu> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      {/* -rotate-90 hidden opacity-0 */}
      <div id="menu" className={`absolute pb-2 pt-8 -mt-7 ml-2 border dark:border-[#eee] border-[#222] dark:bg-[#222] w-[7rem] rounded-b-3xl z-40 transform-gpu transition ease-out duration-150 ${!isMenuOpen && 'hidden'}`}>
        {/* hidden opacity-0 */}
        {/* <p className="text-[#777]">Menü</p> */}
        <MenuItem
          name="Overview"
          route="/overview"
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <MenuItem
          name="New"
          route="/new"
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <MenuItem
          name="Let's play!"
          route="/play"
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <MenuItem
          name="Help"
          route="/help"
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <MenuItem
          name="Credits"
          route="/credits"
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </>
  )
}

export default Menu