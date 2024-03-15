import { useNavigate } from "react-router-dom";


const ErrorPage=()=>{
    const navigate=useNavigate()
return(
    <>
     <h1>No Page Found</h1>
     <button onClick={()=>(navigate('/'))}>Go Back to Home</button>

    </>
)


}
export  default ErrorPage;