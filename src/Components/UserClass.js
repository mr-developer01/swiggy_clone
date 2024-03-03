import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log(props);

        // creating state variable
        this.state = {
            count : 0,
            count2 : 10,
            userInfo : 0
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/mr-developer01");
        const json = await data.json();

        this.setState({
            userInfo : json
        })
    }

    componentDidUpdate(){
        console.log("Component Did Update Executed!!");
    }

    componentWillUnmount(){
        console.log("Component Will Unmount Executed!!")
    }

    render(){
        // const {name, location} = this.props;
        const {count, count2} = this.state;
        const {name, location, avatar_url} = this.state.userInfo
        if(this.state.userInfo === 0){
            return(
                <h1>Loading....</h1>
            )
        }
        return(
            <>
                <h1>Count : {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count : count + 1,
                    })
                }}>Increase By 1</button>
                <h1>Count : {count2}</h1>
                <button onClick={() => {
                    if(count2 > 0){
                        this.setState({
                            count2 : count2 - 1,
                        })
                    }
                }}>decrease till 0</button>
                <hr />
                <img src={avatar_url} alt="avtar_img" />
                <h1>Name : {name}</h1>
                <h1>Location : {location}</h1>
            </>
        );
    }
};

export default UserClass;