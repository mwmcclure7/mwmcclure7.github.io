import toast from "react-hot-toast";
import "../styles/Login.css";

interface LoginProps {
    onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.error("Incorrect password");
    };

    function checkPassword(password: string) {
        // if (password === import.meta.env.VITE_PASSWORD) onLogin(); Temporary fix for secrets bug
        if (password === "innovate") onLogin();
    }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <input
                    type="password"
                    onChange={(e) => checkPassword(e.target.value)}
                    placeholder="Enter password"
                />
            </form>
        </div>
    );
};

export default Login;
