import './App.css';
import {BrowserRouter, HashRouter, useLocation} from "react-router-dom";
import {PublicRoutes} from "./components/routes";
import {Footer} from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <NavBar/>
                <PublicRoutes/>
                <Footer/>

            </HashRouter>
        </div>
    );
}

export default App;
