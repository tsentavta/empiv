import './App.css';
import {PublicRoutes} from "./components/routes";
import {Footer} from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import {Main} from "./pages/Main";
import {Route} from "react-router-dom";
import {SkinEffect} from "./pages/SkinEffect";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Route exact path={'/'} component={Main}/>
            <Route exact path={'/SkinEffect'} component={SkinEffect}/>

                {/*<PublicRoutes/>*/}
                <Footer/>


        </div>
    );
}

export default App;
