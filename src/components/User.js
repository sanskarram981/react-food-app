import { useState } from "react";

const User = (props) =>
{
    const [review,setReview] = useState(0);
    const [like,setLike] = useState(0);
    const {fname,city,contact} = props;
    return(
        <div className="user-card">
            <h3>Name : {fname}</h3>
            <h4>City : {city}</h4>
            <h4>Username : {contact}</h4>
            <h4>Review : {review}</h4>
            <button onClick={()=>{setReview(review+1)}}>Review</button>
            <h4>Like : {like}</h4>
            <button onClick={()=>{setLike(like+1)}}>Like</button>
        </div>
    );
}

export default User;