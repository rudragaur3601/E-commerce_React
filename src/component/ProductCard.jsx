import React from "react";

const ProductCard = ({ product }) => {



    const { image, title, rating, price } = product;



    return (
        <div className="border border-black p-8 flex flex-col items-center w-[230px] h-auto  rounded-md bg-white">
            <img
                className="w-[180px] h-[180px] object-cover rounded"
                src={image}
                alt="T-shirt"
            ></img>
            <div className="m-2 ">
                <h1 className="font-semibold text-xl my-2 ">{title}</h1>

                <p className="text-l font-serif border bg-green-600 inline p-2 ">
                    Ratings : {rating.rate}
                </p>
                <p className="text-l font-medium m-2 ">
                    Price : <span>{price}</span>
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
