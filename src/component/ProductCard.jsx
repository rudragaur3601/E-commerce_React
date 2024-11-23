import React from "react";

const ProductCard = ({ product }) => {



    const { image, title, rating, price } = product;



    return (
        <div className="border-2 flex flex-col justify-evenly items-center p-8 h-80 hover:bg-slate-200 rounded-lg">
            <div>
            <img
                className="w-[100px] h-[100px] object-cover rounded "
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
