import useAuth from "../../../hooks/useAuth";


const UserHome = () => {
    const {user}=useAuth();
    return (
        <div>
            <h2>Hi Welcome Back</h2>
            {
                user?.displayName? user.displayName : 'welcome back'
            }
        </div>
    );
};

export default UserHome;