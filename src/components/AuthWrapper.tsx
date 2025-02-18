import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';

interface AuthWrapperProps {
    isAuthenticated: boolean;
    onLogin: () => void;
    children: React.ReactNode;
}

export default function AuthWrapper({ isAuthenticated, onLogin, children }: AuthWrapperProps) {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // If not authenticated and not at root, redirect to root
        if (!isAuthenticated && location.pathname !== '/') {
            navigate('/', { replace: true });
        }
    }, [isAuthenticated, location, navigate]);

    if (!isAuthenticated) {
        return <Login onLogin={onLogin} />;
    }

    return <>{children}</>;
}
