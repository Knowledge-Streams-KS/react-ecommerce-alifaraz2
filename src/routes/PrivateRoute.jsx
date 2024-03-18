import { Navigate } from "react-router"

const PrivateRoutes = (props) => {
  const loggedIn = false

  return (
    <>{loggedIn ? <>{props.children}</> : <Navigate to={"/user/login"} />}</>
  )
}

export default PrivateRoutes
