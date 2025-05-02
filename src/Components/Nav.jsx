// import React from 'react'

// const Nav = () => {
//   return   <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
//   <a className="py-2 px-5 border rounded border-blue-200 text-blue-300 ">Add new Product</a>
//   <hr className="w-[80%] my-3" />
//   <h1 className="text-2xl  mb-3 w-[80%] ">Category Filter</h1>
//   <ul className=" w-[80%]">
//     <li className=" flex items-center mb-3 "><span className=" mr-2 w-[15px] h-[15px] bg-blue-200 rounded-full"></span>Cat 1</li>
//     <li className=" flex items-center mb-3 "><span className=" mr-2 w-[15px] h-[15px] bg-green-200 rounded-full"></span>Cat 1</li>
//     <li className=" flex items-center mb-3 "><span className=" mr-2 w-[15px] h-[15px] bg-red-200 rounded-full"></span>Cat 1</li>

//   </ul> 
// </nav>
// }

// export default Nav

import React from 'react';

const categories = [
  { label: 'Cat 1', color: 'bg-blue-200' },
  { label: 'Cat 2', color: 'bg-green-200' },
  { label: 'Cat 3', color: 'bg-red-200' },
];

const Nav = () => {
  return (
    <nav className="w-full sm:w-[40%] md:w-[25%] lg:w-[15%] h-auto md:h-full bg-zinc-100 flex flex-col items-center pt-5 p-4">
      <button className="w-full py-2 px-5 border rounded border-blue-200 text-blue-300 text-center">
        Add new Product
      </button>

      <hr className="w-full my-3" />

      <h1 className="text-xl md:text-2xl mb-3 w-full">Category Filter</h1>

      <ul className="w-full">
        {categories.map((cat, index) => (
          <li key={index} className="flex items-center mb-3">
            <span className={`mr-2 w-[15px] h-[15px] ${cat.color} rounded-full`}></span>
            {cat.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
