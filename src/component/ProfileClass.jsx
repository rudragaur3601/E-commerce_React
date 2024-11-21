import React from "react";
class ProfileClass extends React.Component {
    constructor() {
        super()
        // console.log("Constructor is called")
        this.state = {
            userDetails: null
        }
        console.log("ctr is called")
    }

    // we use componentDidMount to call API here
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/rudragaur3601")
        const resData = await data.json()
        console.log(resData)
        this.setState({
            userDetails: resData
        })

        console.log("componentDidMount called")
    }
    // componentDidUpdate(){
    //     console.log("component did upadate")
    // }
    // componentWillUnmount(){
    //     console.log("unmount is called")
    // }
    render() {
        console.log("render is called");
        if (this.state.userDetails === null) {
            return <h1>Loading</h1>

        }
        const { name, avatar_url } = this.state.userDetails
        return (
            <div className='border-2 p-5'>
                <h1 className='font-semibold'>Class Based Component</h1>
                <h3>Name : {name}</h3>
                <img src={avatar_url} />

            </div>
        )
    }
}
export default ProfileClass
