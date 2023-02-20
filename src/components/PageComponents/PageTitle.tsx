import React from "react";

interface PageTitle {
  text: string
}

const PageTitle: React.FC<PageTitle> = ({ text }) => {
  return (
    <h2 className="text-[#333] dark:text-[#eee] mt-8 text-[2rem]">{text}</h2>
  )
}

export default PageTitle