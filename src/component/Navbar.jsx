import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // let btnName="Light"
    const [btnName, setbtnName] = useState("Light")
    /*
    case1 : []-> empty array dependency (will only be called once when navbar renders)
    case2 : -> no array dependency (when ever navbar renders useEffect will be called )
    case3 : when we pass something in array dependency , then when ever it changes or an event occure the useEffect will also render
    */
    useEffect(() => {
        // console.log("useEffect Called")

    }, [btnName])

    return (
        <div className='bg-blue-950 flex justify-between p-6 shadow border-black text-white cursor-pointer '>
            <h1 className='text-3xl font-semibold'><Link to ="/">NewTrendz</Link></h1>
            <div className='flex gap-5 '>
                <ul className='flex gap-5 text-sm list-none items-center '>
                    <li className='hover:text-lg' >
                        <Link to="/men">MEN</Link>
                    </li>
                    <li className='hover:text-lg' >
                        <Link to="/women">WOMEN</Link>
                    </li>
                    <li className='hover:text-lg' >
                        <Link to="/kids">KIDS</Link>
                    </li>
                    <li className='hover:text-lg' >
                        <Link to="/grocery">GROCERY</Link>
                    </li>
                    <li className='hover:text-lg' >
                        <Link to="/cart">CART</Link>
                    </li>
                    <li className='hover:text-lg' >
                        <Link to="/About">ABOUT</Link>
                    </li>
                </ul>
                <button onClick={() => {
                    btnName === "Light" ? setbtnName("Dark") : setbtnName("Light")
                }} className='items-center text-l px-3 bg-green-500 rounded'>{btnName}</button>

            </div>

        </div>
    )
}

export default Navbar