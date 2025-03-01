import { FaGoogle } from "react-icons/fa6";
import useAuth from "../../hooks/useAuth";


const SocialLogin = () => {
    const {googleSignIn}=useAuth();
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            console.log(result)
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