import loginImg from '../../assets/others/authentication2.png';
import bgImg from '../../assets/others/authentication.png'
import { loadCaptchaEnginge, LoadCanvasTemplate,validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
    const [disabled,setdisabled]=useState(true);
    const navigate=useNavigate();
    const location=useLocation();
    
    const {loginUser}=useContext(AuthContext);
    const from=location.state?.from?.pathname || '/login';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            Swal.fire({
                title: "Login Successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              navigate(from,{replace:true})

        })
        .catch(error=>console.error(error))
    }
    useEffect(()=>{
        loadCaptchaEnginge(6); 

    },[])
    const validateUserCaptcha=(e) =>{
        const user_captcha_value=e.target.value;
        if(validateCaptcha(user_captcha_value)){
            setdisabled(false)

        }
        else {
            setdisabled(true)
        }



    }
    return (
        <div
            className="hero bg-base-200 min-h-screen"
            style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* Login Form - Shadow Added */}
                <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl rounded-xl p-6">
                    <h1 className="text-4xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input onBlur={validateUserCaptcha} type="text"name='captcha' placeholder="Type the captcha" className="input input-bordered" required />
                           
                           
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} type="submit" value="Login" className="btn bg-[#D1A054] text-white hover:bg-[#b88640]"/>
                        </div>
                    </form>
                    <p className='text-[#D1A054] text-center'>New here? <small><Link to='/signUp'>Create a New Account</Link></small></p>
                </div>

                {/* Image - Shadow Added */}
                <div className="text-center lg:text-left w-1/2">
                    <img src={loginImg} alt="" className="rounded-lg shadow-2xl w-full" />
                </div>
            </div>
        </div>
    );
};

export default Login;