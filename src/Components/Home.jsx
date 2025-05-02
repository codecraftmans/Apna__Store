// import React, { useContext } from 'react'
// import Nav from './Nav'
// import { Link } from 'react-router-dom'
// import { ProductContext } from '../Utils/Context'
// import Loading from './Loading'

// function Home() {

//   const [products] = useContext(ProductContext)
    
//   return  products ? (
//     <>
//     <Nav/>
//  <div className=" w-[85%]  p-10   pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">



//   {products.map((p,i)=> <Link key={p.id} to={`/details/${p.id}`}
//  className=" mr-3 mb-3 card p-5 border shadow rounded w-[18%] h-[50vh] flex flex-col justify-center items-center ">
//   <div
//    className=" hover:scale-110 mb-5 w-full h-[80%] bg-contain bg-no-repeat bg-center " 
//    style={{
//     backgroundImage : `url(${p.image})`,
//   }}></div>
//   <h1 className="hover:text-blue-300">{p.title}</h1>
// </Link> )}



// </div>
    
//     </>


//   ) : (
//     <Loading/>
//   )
  
  



// };

// export default Home


import React, { useContext } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { ProductContext } from '../Utils/Context';
import Loading from './Loading';

function Home() {
  const [products] = useContext(ProductContext);

  return products ? (
    <>
      <Nav />
      <div className="w-full px-4 sm:px-6 lg:px-10 py-10 pt-[5%]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {products.length > 0 ? (
            products.map((p) => (
              <Link
                key={p.id}
                to={`/details/${p.id}`}
                className="card p-5 border shadow rounded flex flex-col justify-center items-center hover:shadow-lg transition-shadow"
              >
                <div
                  className="w-full h-48 sm:h-52 md:h-56 lg:h-60 bg-contain bg-no-repeat bg-center mb-5 transition-transform duration-200 hover:scale-110"
                  style={{
                    backgroundImage: `url(${p.image})`,
                  }}
                ></div>
                <h1
                  className="hover:text-blue-400 text-center text-sm sm:text-base font-medium truncate w-full"
                  title={p.title}
                >
                  {p.title}
                </h1>
              </Link>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Home;
