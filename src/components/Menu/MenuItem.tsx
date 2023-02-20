import React from "react";
import { Link } from 'react-router-dom'

interface MenuItem {
  name: string
  route: string
  isMenuOpen: Boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<Boolean>>
}

const MenuItem: React.FC<MenuItem> = ({ name, route, setIsMenuOpen }) => {
  return (
    <>
      <Link
        to={route}
        className="block dark:text-[#ccc] text-[#222] dark:hover:text-[#fff] hover:text-[#222] hover:text-[1.2rem] cursor-pointer my-1 transition-all ease-in-out duration-150"
        onClick={() => setIsMenuOpen(false)}
      >
        {name}
      </Link>
    </>
  )
}

export default MenuItem

