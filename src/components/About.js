import User from "./User";
import UserClass from "./UserClass";
const About = () =>
{
    return(
        <div>
            <h3>About</h3>
            <p>This is about page</p>
            <User fname="deepak patel" city="bhopal" contact="dp@onlyfans"/>
            <UserClass fname="deepak patel" city="bhopal" contact="dp@onlyfans"/>
        </div>
    );
}
export default About;