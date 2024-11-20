import UserClass from "./UserClass";

const About = () =>{
    return(
        <div>
            <h1>We are Swigato !!</h1>
            <p>Our vision is to give better user experience and to avoid future duopoly</p>
            <UserClass name={"Abhishek"} location={"Faridabd, NCR"} message={"Hello guys"} designation={"founder"}/>
        </div>
    )
}
export default About;