import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { auth } from '../Context/AuthContext';
import { jwtDecode } from 'jwt-decode';
export default function Register() {
    let {setLogin} = useContext(auth)
    let navigate = useNavigate()
    

    let [msg, setMsg] = useState('')
    let [loading, setLoading] = useState(false)

    function handleRegister(values) {
        setLoading(true)
        axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values)
            .then(({ data }) => {
                if (data.message === 'success') {
                    setLoading(false)
                    setMsg('')
                    localStorage.setItem('userToken', data.token)
                    setLogin(jwtDecode(data.token))
                    navigate('/')
                }

            })
            .catch((err) => {
                setLoading(false)
                setMsg(err?.response?.data?.message)
            })
    }

    // function validation(values) {
    //     let errors = {}
    //     if (!values.name)
    //         errors.name = 'name is required'
    //     else if (!/^[A-Z][a-z]{3,5}$/.test(values.name))
    //         errors.name = 'name must start with cap letter , 3-5 small'
    //     if (!values.email)
    //         errors.email = 'email is required'
    //     else if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(values.email))
    //         errors.email = 'not match'

    //     return errors  //{} | {name:'re',email:'no match'}
    // }


    let validationSchema = Yup.object({
        name: Yup.string().min(2, 'min length is 2').max(10, 'max length is 10').required('name is required'),
        email: Yup.string().email().required('email is required'),
        password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/).required('password is required'),
        rePassword: Yup.string().oneOf([Yup.ref('password')], 'rePassword must be one of the following values password field').required('repassword is required'),
        phone: Yup.string().matches(/^(002)?01[0-25][0-9]{8}$/).required('phone is required')
    })

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            phone: ''
        },
        validationSchema,
        onSubmit: handleRegister
    })


    




    return (
        <div>
            <h2 className='text-2xl my-3 underline'>Register Now:</h2>
            {msg ? <div className=" p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                <span className="font-medium">{msg}</span>
            </div> : ''}
            <form className="max-w-md mx-auto" onSubmit={formik.handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input onBlur={formik.handleBlur} value={formik.values.name} onChange={formik.handleChange} type="text" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                </div>


                {/* alert */}

                {formik.errors.name && formik.touched.name ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">{formik.errors.name}</span>
                </div> : ''}




                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>

                {/* alert */}

                {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">{formik.errors.email}</span>
                </div> : ''}

                <div className="relative z-0 w-full mb-5 group">
                    <input onBlur={formik.handleBlur} type="password" value={formik.values.password} onChange={formik.handleChange} id="password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>


                {/* alert */}

                {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">{formik.errors.password}</span>
                </div> : ''}



                <div className="relative z-0 w-full mb-5 group">
                    <input onBlur={formik.handleBlur} type="password" id="rePassword" value={formik.values.rePassword} onChange={formik.handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                </div>


                {/* alert */}

                {formik.errors.rePassword && formik.touched.rePassword ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">{formik.errors.rePassword}</span>
                </div> : ''}



                <div className="relative z-0 w-full mb-5 group">
                    <input onBlur={formik.handleBlur} value={formik.values.phone} onChange={formik.handleChange} type="tel" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                    <label htmlFor="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                </div>

                {/* alert */}

                {formik.errors.phone && formik.touched.phone ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                    <span className="font-medium">{formik.errors.phone}</span>
                </div> : ''}

                <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    {loading ? <i className='fas fa-spin fa-spinner text-white'></i> : 'Submit'}
                </button>
            </form>


        </div>
    )
}
