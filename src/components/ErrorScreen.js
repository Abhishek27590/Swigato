import { useRouteError } from "react-router-dom";

const ErrorScreen=()=>{
    const error=useRouteError();
    
    return(
        <div>
            Heyy we think you are lost Wanna get help !!
            <p>{error.status}</p>
            <p>{error.statusText}</p>
        </div>
    )
}
export default ErrorScreen;