import { useEffect, useState } from 'react';
import { Footer } from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { Main } from './pages/Main';
import { SkinEffect } from './pages/SkinEffect';
import { RectangularWaveguides } from './pages/RectangularWaveguides';
import VolumetricResonator from './pages/VolumetricResonator';
import FullResistances from './pages/FullResistances';
import {Container} from "react-bootstrap";
import classes from "./App.module.css";

const pages = [
  {href: "SkinEffect", string: 'Скин-эффект'},
  {href: "RectangularWaveguides", string: 'Прямоугольный волновод'},
  {href: "VolumetricResonator", string: 'Объемный Резонатор'},
  {href: "FullResistances", string: 'Полные сопротивления'},
  {href: "Main", string: 'Главная'}];


function App() {
  const [pathRouter, setPathRouter] = useState(localStorage.getItem('path') ? localStorage.getItem('path') : 'Main');
  useEffect(() => {
    localStorage.setItem('path', pathRouter);
  }, [pathRouter]);

  return (
    <div className={classes.App}>
      <NavBar setPathRouter={setPathRouter} pages={pages} />
        <Container className={classes.container}>
            {
                (pathRouter === 'Main') ? <Main /> : null
            }
            {
                (pathRouter === 'SkinEffect') ? <SkinEffect /> : null
            }
            {
                (pathRouter === 'RectangularWaveguides') ? <RectangularWaveguides /> : null
            }
            {
                (pathRouter === 'VolumetricResonator') ? <VolumetricResonator /> : null
            }
            {
                (pathRouter === 'FullResistances') ? <FullResistances /> : null
            }
            {/* <PublicRoutes/> */}
        </Container>

      <Footer setPathRouter={setPathRouter} pages={pages} />

    </div>
  );
}

export default App;
