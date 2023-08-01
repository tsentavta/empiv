import './App.css';
import {PublicRoutes} from "./components/routes";
import {Footer} from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import {Main} from "./pages/Main";
import {Route, Routes} from "react-router-dom";
import {SkinEffect} from "./pages/SkinEffect";
import {useContext, useEffect, useState} from "react";
import {RectangularWaveguides} from "./pages/RectangularWaveguides";

function App() {
    const [pathRouter, setPathRouter] = useState(localStorage.getItem('path') ? localStorage.getItem('path') : "Main")
    useEffect(() => {
        localStorage.setItem('path', pathRouter)
    }, [pathRouter])

    return (
        <div className="App">
            <NavBar setPathRouter={setPathRouter}/>
            {
                (pathRouter === 'Main') ? <Main/> : null
            }
            {
                (pathRouter === 'SkinEffect') ? <SkinEffect/> : null
            }
            {
                (pathRouter === 'RectangularWaveguides') ? <RectangularWaveguides/> : null
            }
            {/*<PublicRoutes/>*/}
            <Footer/>


        </div>
    );
}

export default App;
