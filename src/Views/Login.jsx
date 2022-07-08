import '../Styles/UserForm.css'
import { useFormik } from 'formik'
import Helpers from '../Helpers'

const Login = () => {

    const {handleSubmit, handleChange, values, errors} = useFormik({
        initialValues: {
            email: '', password: ''
        },validate: Helpers.LoginValidator, validateOnChange: false, onSubmit: (values) =>{
            localStorage.setItem('status','logged')
        }
    })
    
    return <>
        <form onSubmit={handleSubmit}>
            <h3 className='text-center'>Welcome again</h3>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input name='email' value={values.email} onChange={handleChange} type="email" />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input name='password' value={values.password} onChange={handleChange} type="password" />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <button type='submit' className='btn'>Login</button>
        </form>
    </>
}

export default Login