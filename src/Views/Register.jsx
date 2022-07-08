import '../Styles/UserForm.css'
import { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import Helpers from '../Helpers'
import Components from '../Components'


const Register = () => {


    const {handleSubmit, handleChange, values, errors} = useFormik({
        initialValues: {
            email: '', password: '', repassword : '',
            role: 'none', region: 'none', country: 'none'
        },validate: Helpers.RegisterValidator, validateOnChange: false, onSubmit: (values) =>{
            localStorage.setItem('status','registered')
        }
    })

    const {regionList, countriesFrom} = useContext(Components.Countries.Context);
    const [region, setRegion] = useState('none');
    const [countryValue, setCountryValue] = useState('none');

    const changeRegion = (e) => {
        handleChange(e)
        setRegion(e.target.value)
        setCountryValue('none')
    }

    const changeCountry = (e) => {
        handleChange(e)
        setCountryValue(e.target.value)
    } 

    useEffect(() => {
        
    },[region, regionList, countriesFrom])

    return <>
        <form onSubmit={handleSubmit}>
            <h3 className='text-center'>Join to GoScrum</h3>
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
            <div className="form-group">
                <label htmlFor="repassword">Verify Password</label>
                <input name='repassword' value={values.repassword} onChange={handleChange} type="password" />
                {errors.repassword && <p>{errors.repassword}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select name='role' defaultValue={values.role} onChange={handleChange}>
                    <option value='none' disabled>Select One</option>
                    <option value='leader'>Team Leader</option>
                    <option value='menber'>Team Member</option>
                </select>
                {errors.role && <p>{errors.role}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="region">Region</label>
                <select name='region' defaultValue={values.region} onChange={changeRegion}>
                    <option value='none' disabled>Select One</option>
                    {regionList.map((r, k) => <option key={k} value={r}>{r}</option>)} 
                </select>
                {errors.region && <p>{errors.region}</p>}
            </div>
            <div className="form-group">
                <label htmlFor="country">Country</label>
                <select name='country' value={countryValue} onChange={changeCountry}>
                    <option value='none' disabled>Select One</option>
                    {countriesFrom[region]?.map((r, k) => <option key={k} value={r}>{r}</option>)} 
                </select>
                {errors.country && <p>{errors.country}</p>}
            </div>
            <button type='submit' className='btn'>Register</button>
        </form>
    </>
}

export default Register