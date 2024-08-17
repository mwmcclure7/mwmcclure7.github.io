import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
    return (
        <div className="app">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/academics" element={<Academics />} />
                <Route path="/interests" element={<Interests />} />
                <Route path="/edge" element={<Edge />} />
                <Route path="/sensei" element={<Sensei />} />
                <Route path="/karate" element={<Karate />} />
                <Route path="/mtb" element={<Mtb />} />
                <Route path="/aerospace" element={<Aerospace />} />
                <Route path="/robotics" element={<Robotics />} />
                <Route path="/programming" element={<Programming />} />
                <Route path="/printing" element={<Printing />} />
                <Route path="/volunteering" element={<Volunteering />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
