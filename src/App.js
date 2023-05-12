import { Formik } from "formik"
import "./App.css"
import * as Yup from "yup"
function App() {
    return (
      <>
      <div className="forum">
        <div className="formik">
          <div className="formik2">

        <Formik
                    initialValues={{
                        name: "",
                        surname: "",
                        email: "",
                        password: "",
                        agree: false,
                        
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().required("Name is required!"),
                        surname: Yup.string().required("Surname is required!"),
                        email: Yup.string().email().required("Email is required"),
                        password: Yup.string().required("Password is required"),
                        agree: Yup.boolean().required("u must agree term of use"),
                    })}
                    onSubmit={(values, { resetForm, setSubmitting }) => {
                        console.log(values)
                        setTimeout(() => {
                            setSubmitting(false)
                            resetForm()
                        }, 2000);
                    }}
                >
                    {({ values, handleChange, dirty, errors, touched, handleSubmit, handleReset, isSubmitting }) => (
                        <form className="magic-form" onSubmit={handleSubmit}>
                            <h3>Sign Up</h3>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                id="name"
                                className="input"
                                value={values.name}
                                onChange={handleChange}
                            />
                            {errors.name && touched.name && (
                                <div className="input-feedback">{errors.name}</div>
                            )}
                            <label htmlFor="surname">Surname</label>
                            <input
                                type="text"
                                placeholder="Surname"
                                id="surname"
                                className="input"
                                value={values.surname}
                                onChange={handleChange}
                            />
                            {errors.surname && touched.surname && (
                                <div className="input-feedback">{errors.surname}</div>
                            )}
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                placeholder="Email Address"
                                id="email"
                                className="input"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && touched.email && (
                                <div className="input-feedback">{errors.email}</div>
                            )}
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                id="password"
                                className="input"
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && touched.password && (
                                <div className="input-feedback">{errors.password}</div>
                            )}
                            <div className="checkbox topMargin">
                                <input type="checkbox" value={values.agree} onChange={handleChange} id="agree" />
                                <label htmlFor="agree" className="checkbox-label">Term of Use</label>
                            </div>
                            {errors.agree && touched.agree && (
                                <div className="input-feedback">{errors.agree}</div>
                            )}
                            <button type="submit" disabled={!dirty || isSubmitting} >Sign Up</button>
                        </form>
                    )}
                </Formik>
          </div>
        </div>
      </div>
      </>
    )
}

export default App