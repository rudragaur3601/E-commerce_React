import React from 'react'


const Profile = (props) => {
    const {name, address,email}=props
    return (
        <div className='border-2 p-5 my-2'>
            <h1 className='font-semibold'>Functional Based Component</h1>
            <h3>Name : {name}</h3>
            <p>Address : {address} </p>
            <p>Email : {email}</p>
        </div>
    )
}

export default Profile