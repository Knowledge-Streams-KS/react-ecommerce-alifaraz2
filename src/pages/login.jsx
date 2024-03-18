// pages/Login.js
import React, { useContext } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { UserAuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
})

const Login = () => {
  const handleLogin = (values) => {
    setEmail(values.email)
    setIsLoggedIn(true)
    navigate("/")
    console.log(values)
  }

  const { setEmail, setIsLoggedIn } = useContext(UserAuthContext)
  const navigate = useNavigate()

  return (
    <div>
      <h1>Login Page</h1>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Login
