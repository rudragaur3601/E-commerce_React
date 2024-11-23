

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
        <div className='max-w-2xl mx-auto  shadow-xl border-black p-5 flex rounded-md my-5  bg-slate-200'>
            <div className=' w-[500px] '>
            <img
                className="w-[400px] h-[400px] object-contain rounded p-5 "
                src={image}
                alt="T-shirt"
            ></img>

            </div>
            
            <div className="w-[500px] items-center p-4 shadow-md">
                <h1 className="font-bold text-xl mt-5 py-5  ">{title}</h1>
                <p className=' py-3 text-sm'>
                    {description}
                </p>

                <p className="text-l font-medium inline py-3 text-center">
                    Ratings : {rating.rate}
                </p>
                <p className="text-l  font-medium py-3">
                    Price : <span className=''>{price}</span>
                </p>
            </div>
        </div>

    )
}

export default ProductDetails