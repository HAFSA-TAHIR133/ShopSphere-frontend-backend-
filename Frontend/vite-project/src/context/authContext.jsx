import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [accessToken, setAccessToken] = useState(
        localStorage.getItem("accessToken") || null
    );
    const [loading, setLoading] = useState(true);

    const API_URL = "http://localhost:8000/api/v1/shopSphere";

    // Load user from localStorage on app start
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser && accessToken) {
            setUser(JSON.parse(savedUser));
        }
        setLoading(false);
    }, [accessToken]);

    // Auto Logout after 10 minutes of inactivity
    useEffect(() => {
        let inactivityTimer;

        const resetInactivityTimer = () => {
            clearTimeout(inactivityTimer);
            inactivityTimer = setTimeout(() => {
                logout(); // Auto logout after 10 minutes
            }, 10 * 60 * 1000); // 10 minutes
        };

        const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
        events.forEach(event => window.addEventListener(event, resetInactivityTimer));

        resetInactivityTimer();

        return () => {
            clearTimeout(inactivityTimer);
            events.forEach(event => window.removeEventListener(event, resetInactivityTimer));
        };
    }, []);

    // Axios Response Interceptor for Auto Token Refresh
    useEffect(() => {
        const interceptor = axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error.config;

                if (error.response?.status === 401 && !originalRequest._retry) {
                    originalRequest._retry = true;

                    try {
                        const refreshToken = localStorage.getItem("refreshToken");
                        if (!refreshToken) throw new Error("No refresh token");

                        const res = await axios.post(`${API_URL}/auth/refresh-token`, {
                            refreshToken
                        });

                        const { accessToken: newAccessToken, user: newUser } = res.data;

                        // Update localStorage and state
                        localStorage.setItem("accessToken", newAccessToken);
                        localStorage.setItem("user", JSON.stringify(newUser));

                        setAccessToken(newAccessToken);
                        setUser(newUser);

                        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
                        return axios(originalRequest);
                    } catch (refreshError) {
                        logout();
                        return Promise.reject(refreshError);
                    }
                }
                return Promise.reject(error);
            }
        );

        return () => axios.interceptors.response.eject(interceptor);
    }, []);

    const login = (userData, newAccessToken, refreshToken) => {
        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", JSON.stringify(userData));

        setAccessToken(newAccessToken);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");

        setAccessToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                accessToken,
                isAuthenticated: !!accessToken && !!user,
                loading,
                login,
                logout,
                API_URL
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    return useContext(AuthContext);
};