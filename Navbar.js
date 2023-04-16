import React from 'react'

export default function Navbar() {
  let Links = [
    {name:"HOME", link:"/"},
    {name:"EXPLORE", link:"/explore"},
    {name:"INVEST", link:"/invest"},
    {name:"CAREER", link:"/career"},
    {name:"COLLEGE", link:"/college"},
    {name:"BUDGET", link:"/budget"},




  ];
  return (
    <div className="sticky top-0 shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl flex items-center text-[#ad112b]">
        <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
          AbraMoney    
      </div>
      
      <ul className="md:flex md.items-center cursor-pointer">
        {
          Links.map((link)=>(
            <li key={link.name} className="md:ml-8 text-xl">
              <a href={link.link} className="text-gray-800 hover:text-[#ad112b] duration-500">{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
    
  )
}