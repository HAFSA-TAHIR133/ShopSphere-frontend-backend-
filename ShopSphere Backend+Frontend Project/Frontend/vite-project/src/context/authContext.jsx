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

    return (
        <AuthContext.Provider
            value={{accessToken,login,logout,isAuthenticated: !!accessToken }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = ()=>{
    return useContext(AuthContext);
};
