import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AuthWrapper from "./components/AuthWrapper";
import Home from "./pages/Home";
import Academics from "./pages/Academics";
import Interests from "./pages/Interests";
import Edge from "./pages/Edge";
import Sensei from "./pages/Sensei";
import Karate from "./pages/Karate";
import Mtb from "./pages/Mtb";
import Aerospace from "./pages/Aerospace";
import Robotics from "./pages/Robotics";
import Programming from "./pages/Programming";
import Printing from "./pages/Printing";
import Volunteering from "./pages/Volunteering";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Check for authentication on mount
        const isAuth = localStorage.getItem("isAuthenticated");
        if (isAuth === "true") {
            setIsAuthenticated(true);
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    function handleLogin() {
        setIsAuthenticated(true);
    }

    return (
        <div className="app">
            <AuthWrapper isAuthenticated={isAuthenticated} onLogin={handleLogin}>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/academics" element={<Academics />} />
                    <Route path="/interests" element={<Interests />} />
                    <Route path="/edge" element={<Edge />} />
                    <Route path="/sensei" element={<Sensei />} />
                    <Route path="/programming" element={<Programming />} />
                    <Route path="/aerospace" element={<Aerospace />} />
                    <Route path="/robotics" element={<Robotics />} />
                    <Route path="/printing" element={<Printing />} />
                    <Route path="/karate" element={<Karate />} />
                    <Route path="/mtb" element={<Mtb />} />
                    <Route path="/volunteering" element={<Volunteering />} />
                </Routes>
                <Footer />
            </AuthWrapper>
            <Toaster />
        </div>
    );
}

export default App;
