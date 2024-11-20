import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            count:0,
           
        }
    }
    componentDidMount(){
        console.log("mounting is done")
    }
    render(){
        const {name,location,designation,message}=this.props;
        const {count}=this.state
        return(
            <div>
                <h1>{name}</h1>
                <h2>{`(${designation.toUpperCase()})`}</h2>
                <h2>{location}</h2>
                <h3>{message}</h3>
                <p>{count}</p>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>Click Me!</button>
            </div>
        )
    }
}
export default UserClass;