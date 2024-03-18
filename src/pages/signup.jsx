// pages/Signup.js
import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  contactNumber: Yup.string().matches(/^[0-9]{10}$/, "Invalid contact number"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).{6,}$/,
      "Password must contain at least one uppercase letter and one number"
    ),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
})

const Signup = () => {
  const handleSignup = (values) => {
    // Perform signup logic with form values
    console.log(values)
  }

  return (
    <div>
      <h1>Signup Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          contactNumber: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSignup}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
              <label htmlFor="name">Name:</label>
              <Field type="text" id="name" name="name" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="contactNumber">Contact Number:</label>
              <Field type="tel" id="contactNumber" name="contactNumber" />
              <ErrorMessage
                name="contactNumber"
                component="div"
                className="error"
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="error"
              />
            </div>
            <button type="submit">Signup</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Signup
