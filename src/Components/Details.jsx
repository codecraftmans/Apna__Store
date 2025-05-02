// import axios from '../Utils/Axios'
// import React, { useEffect , useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import Loading from './Loading'


// const Details = () => {
//   const [product, setproduct] = useState(null)
//   const {id} = useParams();
 

//   const getsingleproduct = async () => {
//     try {
      

//       const {data} = await axios.get(`/products/${id}`)
//       setproduct(data)
//     } 
//     catch (error) {
//       console.log(error)
      
//     }

//   }

//   useEffect(()=>{
//     getsingleproduct();
//   },[])



//   return product ? (
//   <div className='w-screen flex h-full justify-center items-center  m-auto p-[10%] overflow-x-hidden '>

//     <img
//       className=' object-contain h-[80%] w-[40%]  '
//       src={`${product.image}`} alt="" />
//     <div className='content  w-[70%] h-[60%] '>
//       <h1 className='text-5xl'>{product.title}</h1>
//       <h3 className='text-zinc-400 my-5'>{product.category}</h3>
//       <h2 className='text-red-300 mb-3'>{product.price}</h2>
//       <p className='mb-[5%]'>{product.description}</p>
//       <Link className=' mr-5 py-2 px-5 border rounded border-blue-200 text-blue-300' >Edit</Link>
//       <Link className='py-2 px-5 border rounded border-red-200 text-red-300'>Delete</Link>
//     </div>

//   </div>) :(
//     <Loading/>
//   )

// }

// export default Details

import axios from '../Utils/Axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from './Loading';

const Details = () => {
  const [product, setproduct] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const getsingleproduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setproduct(data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  useEffect(() => {
    getsingleproduct();
  }, [id]);

  if (error) {
    return <div className="text-red-500 text-center mt-10">Failed to load product.</div>;
  }

  return product ? (
    <div className="w-screen min-h-screen flex flex-col lg:flex-row justify-center items-center px-4 lg:px-[10%] py-10 overflow-x-hidden">
      <img
        className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mb-8 lg:mb-0"
        src={product.image || '/fallback.jpg'}
        alt={product.title}
      />

      <div className="content w-full lg:w-1/2 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">{product.title}</h1>
        <h3 className="text-zinc-400 my-3 text-sm sm:text-base">{product.category}</h3>
        <h2 className="text-red-300 mb-3 text-lg sm:text-xl">${product.price}</h2>
        <p className="mb-5 text-sm sm:text-base">{product.description}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/edit/${id}`}
            className="py-2 px-5 border rounded border-blue-200 text-blue-300 text-center"
          >
            Edit
          </Link>
          <Link
            to={`/delete/${id}`}
            className="py-2 px-5 border rounded border-red-200 text-red-300 text-center"
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;
