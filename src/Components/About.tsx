import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us</h1>
            {/* <User name="Prasad" location="Chandera" /> */}
            <UserClass name="Prasad" location="Chandera" />
        </div>
    )
}

export default About