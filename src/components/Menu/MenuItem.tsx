import React from "react";
import { Link } from 'react-router-dom'

interface MenuItem {
  name: string
  route: string
}

const MenuItem: React.FC<MenuItem> = ({ name, route }) => {
  return (
    <>
          <Link 
            to={route}
            className="block dark:text-[#ccc] text-[#222] dark:hover:text-[#fff] hover:text-[#222] hover:text-[1.2rem] cursor-pointer my-1 transition-all ease-in-out duration-150" 
          >            
            {name}
          </Link>
    </>
  )
}

export default MenuItem

