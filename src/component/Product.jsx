import React, { useEffect, useState } from "react";
import ProductCard, { HOF } from "./ProductCard";
import Skeleton from "./Skeleton";
import { Link } from "react-router-dom";
// import { productList } from '../utils/constant'

const Product = () => {
  const [listofProduct, setlistofProduct] = useState([]);
  const [filterProduct, setfilterProduct] = useState([])
  const [searchText, setsearchText] = useState("") // now will bind this with input field to get the value typed in it
  console.log(listofProduct)


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products"); // this will return promise so we use await to resolve it
    // console.log(data)
    const resData = await data.json();
    // console.log(resData)
    setlistofProduct(resData);
    setfilterProduct(resData)
  };

  const HOFComponent = HOF(Product) ; // this is a higher order component

  // Conditional Rendering
  // if(listofProduct.length===0){
  //   return <Skeleton/>
  // }
  return listofProduct.length === 0 ? <Skeleton /> : (
    <div className="">

      <div className=" rounded flex items-center justify-center my-5 ">

        <input className="px-3 py-2 rounded-md border-2" type="text" placeholder="Search" value={searchText} onChange={(e) => {
          setsearchText(e.target.value)

          // console.log(e.target.value)
        }} />

        <button className="mx-1 px-5 py-2 bg-gray-400 rounded focus:ring-1 ring-black hover:bg-gray-500 " onClick={() => {
          const filterData = listofProduct.filter((product) => {
            return product.title.toLowerCase().includes(searchText.toLowerCase())
          })
          setfilterProduct(filterData)
        }}>Search</button>

        <button
          onClick={() => {
            const result = listofProduct.filter(
              (listofProduct) => listofProduct.rating.rate >= 4
            );
            setfilterProduct(result);
          }}
          className="mx-2   border-black px-5 py-2 bg-blue-500 focus:ring-2 ring-black rounded  hover:bg-blue-600"
        >
          Top Rated Products
        </button>
      </div>


      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-6xl mx-auto  ">
        {filterProduct.map((product, index) => {

          return <Link key={product.id} to={`/product/${product.id}`}>
            {
              product.rating.rate>=4 ? <HOFComponent product={product} /> : <ProductCard product={product} />
              

            }

              </Link>;

        })}
      </div>
    </div>
  );
};

export default Product;
