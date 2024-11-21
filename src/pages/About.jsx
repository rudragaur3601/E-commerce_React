import React from 'react'
import Profile from '../component/Profile'
import ProfileClass from '../component/ProfileClass'
import { Component } from 'react'

// const About = () => {
//   return (
//     <div className='mx-5 my-3'> 
//         <h1 className='font-bold'>
//             About section
//         </h1>
//         <Profile name="Rudra" address="New Delhi , India" email="Rudra@gmail.com"/>
//         <ProfileClass name="Gautam" address="New Delhi , India" email="Gautam@gmail.com"/>
//     </div>
//   )
// }
class About extends Component{
    constructor(props){
        super(props)
       
    }
    componentDidMount(){

    }
    render(){
     
        return (
            <ProfileClass/>
            
        )

    }
}

export default About