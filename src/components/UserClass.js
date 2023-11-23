import React from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {review:0,like:0,userInfo:{}};
    }

    
    componentDidMount()
    {
        const getData = async () => {
            const URL = "https://api.github.com/users/sanskarram981";
            const jsonData = await fetch(URL);
            const myData = await jsonData.json();
            this.setState({userInfo:myData});
        }

        getData();
    }
    render()
    {
        const {fname,city,contact} = this.props;
        const {review,like} = this.state;
        const {name,location,login} = this.state.userInfo;
        return(
            <div className="user-card">
                <UserContext.Consumer>
                    {
                        (data) =>{
                            const userData = data;
                            console.log(userData);
                        }
                    }
                </UserContext.Consumer>
                <h3>Name : {name}</h3>
                <h4>City : {location}</h4>
                <h4>Username : {login}</h4>
                <h4>Review : {review}</h4>
                <button onClick={()=>{this.setState({review:this.state.review+1})}}>Review</button>
                <h4>Like : {like}</h4>
                <button onClick={()=>{this.setState({like:this.state.like+1})}}>Like</button>
            </div>
        );
    }
};

export default UserClass;