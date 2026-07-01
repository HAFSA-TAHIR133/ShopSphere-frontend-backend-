import { useLoginContext } from "../context/LoginContext";
import { FaUser } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
import '../css/DropDown.css'
import { useNavigate } from "react-router-dom";

function UserDropDown(){
    const navigate = useNavigate();
    const {isLoggedIn, setIsLoggedIn} =useLoginContext();
    const handleSubmit=()=>{
        if(isLoggedIn){
            setIsLoggedIn(false);
            alert("Logout Sucessfullly!");
            navigate('/');
        }
    }
    return(
        <>
            <div className="user-profile-container">
                <button type="button"><FaUser /> Profile</button>
                <button onClick={ handleSubmit}><LuLogOut /> Logout</button>
            </div>
        </>
    );
}
export default UserDropDown;