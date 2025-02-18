import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import "../styles/Login.css";

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [rememberDevice, setRememberDevice] = useState(false);

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (isAuthenticated === "true") {
            onLogin();
        }
    }, [onLogin]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.error("Incorrect password");
    };

    function checkPassword(password: string) {
        if (password === import.meta.env.VITE_PASSWORD) {
            if (rememberDevice) {
                localStorage.setItem("isAuthenticated", "true");
            }
            onLogin();
        }
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    onChange={(e) => checkPassword(e.target.value)}
                    placeholder="Enter password"
                />
                <div className="remember-device">
                    <input
                        type="checkbox"
                        id="remember-device"
                        checked={rememberDevice}
                        onChange={(e) => setRememberDevice(e.target.checked)}
                    />
                    <label htmlFor="remember-device">Remember this device</label>
                </div>
            </form>
            <p>
                Please refer to my CV or email{" "}
                <a href="mailto:mwmcclure7@gmail.com">mwmcclure7@gmail.com</a>
                {" "}to obtain the password.
            </p>
        </div>
    );
};

export default Login;
