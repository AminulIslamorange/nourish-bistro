import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const axiosPublic=useAxiosPublic();
    const {googleSignIn}=useAuth();
    const navigate=useNavigate();
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result);
            const userInfo={
                email:result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })

    }
    return (
        <div>
             <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className="btn btn-dash btn-warning px-32"><FaGoogle/> Google</button>
            
        </div>
    );
};

export default SocialLogin;