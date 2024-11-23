import React from "react";

const ProductCard = ({ product }) => {



    const { image, title, rating, price } = product;



    return (
        <div className=" box-border border-2 flex flex-col justify-evenly items-center p-2 h-[350px] hover:bg-slate-200 hover:shadow-xl rounded-lg bg-slate-100">
            <div>
            <img
                className="w-full h-36 object-cover rounded "
                src={image}
                alt="T-shirt"
            ></img>
            </div>
            
            <div className=" my-3 p-2">
                <h1 className="text-sm font-semibold ">{title}</h1>

                <p className="text-sm  bg-green-600 inline  ">
                    Ratings : {rating.rate}
                </p>
                <p className=" text-sm ">
                    Price : <span>{price}</span>
                </p>
            </div>
        </div>
    );
};

export default ProductCard;


export const HOF=( Product)=>{
    return (props)=>{
        return(
            <div className="relative">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-md absolute -left-1 -top-1" > Best Seller</span>
                <ProductCard {...props}/>
                

            </div>
        )
    }
}
