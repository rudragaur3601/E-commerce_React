

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
        <div className='product border  border-black p-8 flex  justify-evenly  rounded-md bg-white mx-5 my-4'>
            <div>
            <img
                className="w-[400px] h-[400px] object-fill rounded p-5"
                src={image}
                alt="T-shirt"
            ></img>

            </div>
            
            <div className="w-[500px] h-[300px] ">
                <h1 className="font-semibold text-xl  p-5 my-5   ">{title}</h1>

                <p className="text-l font-serif border bg-green-600 inline p-4 text-center">
                    Ratings : {rating.rate}
                </p>
                <p className="text-l  font-medium p-5 my-5">
                    Price : <span>{price}</span>
                </p>
                <p className=' p-5'>
                    {description}
                </p>
            </div>
        </div>

    )
}

export default ProductDetails