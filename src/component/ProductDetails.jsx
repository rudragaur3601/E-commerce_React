

import { useParams } from 'react-router-dom'
import useGetSingleProduct from '../hooks/useGetSingleProduct'


const ProductDetails = () => {

    // const params=useParams();
    const { productid } = useParams() // console.log(params)
    const singleProduct = useGetSingleProduct(productid)
    if (singleProduct === null) {
        return <h1>Loading</h1>
    }
    // console.log(singleProduct)
    const { image, title, rating, price, description } = singleProduct

    return (
        <div className='product border border-black p-8 flex flex-col  w- h-auto  rounded-md bg-white mx-5 my-4'>
            <img
                className="w-[180px] h-[180px] object-cover rounded"
                src={image}
                alt="T-shirt"
            ></img>
            <div className="mx-2 my-5 ">
                <h1 className="font-semibold text-xl my-4 ">{title}</h1>

                <p className="text-l font-serif border bg-green-600 inline p-2 text-center">
                    Ratings : {rating.rate}
                </p>
                <p className="text-l font-medium m-2 ">
                    Price : <span>{price}</span>
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>

    )
}

export default ProductDetails