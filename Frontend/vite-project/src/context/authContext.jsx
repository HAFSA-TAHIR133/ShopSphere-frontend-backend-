import { useContext,createContext ,useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [accessToken, setAccessToken] = useState(
        localStorage.getItem("accessToken") || null);

    const login = (token) => {
        localStorage.setItem("accessToken", token);
        setAccessToken(token);
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAccessToken(null);
    };
    const API_URL = "http://localhost:8000/api/v1/shopSphere";

    return (
        <AuthContext.Provider
            value={{accessToken,login,logout,isAuthenticated: !!accessToken ,API_URL}}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = ()=>{
    return useContext(AuthContext);
};
