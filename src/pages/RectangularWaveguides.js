import * as React from 'react';
import classes from "./RectangularWaveguides.module.sass";
import expImg from "../img/RectangularWaveguidesImg.png"
import {FormControl, Input, InputLabel, MenuItem, Select, Slider, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import Ampermetr from "../components/Block/Ampermetr/Ampermetr";
import Generator from "../components/Block/Generator/Generator";
import XPosition from "../components/Block/XPosition/XPosition";
import clsx from "classnames";

function electricFieldStrength(z_position, frequency) {
    const fkr = 6517000000
    const c = 2.998 * 100000000
    const f = frequency * 1000000
    const l = c/f
    const z = z_position
    const lg = l / Math.sqrt(1-Math.pow(l/0.046, 2))
    const fg = c/lg

    console.log({f,z,fkr,fg,lg})
    let ans;
    if (f<fkr) {
        const y = 2 * Math.PI * Math.sqrt(Math.pow(fkr, 2) - Math.pow(f, 2))
        ans = Math.exp(-z * y / c)
    } else {
        ans = Math.abs(Math.sin(2*Math.PI*fg*z/c))
    }

    return Math.pow(ans, 2).toFixed(4)
}


export function RectangularWaveguides() {

    const [translateX, setTranslateX] = useState([0, 0]) // смещение зонда
    const [sliderValue, setSliderValue] = useState([20, 37]) //для значения slider
    const [frequencyGen, setFrequencyGen] = useState(6500)
    const [I, setI] = useState([0, 0])

    useEffect(() => {
        console.log({1:sliderValue[1] / 1000})
        setI([
            electricFieldStrength(sliderValue[0] / 1000, frequencyGen),
            electricFieldStrength(sliderValue[1] / 1000, frequencyGen)
        ])
        setTranslateX([sliderValue[0] * 4.16, sliderValue[1] * 3]);
    }, [sliderValue, frequencyGen])


    return (
        <>
            <h1>Исследование собственных волн прямоугольного волновода</h1>
            <div className={classes.flexContainer}>
                <div className={classes.flexContainerItem}>
                    <Generator setFunction={setFrequencyGen}/>
                </div>
                <div className={classes.flexContainerItem}>
                    <Ampermetr value={I[0]} />
                </div>
            </div>
            <h2>Исследуемая установка:</h2>
            <div className={clsx(classes.flexContainerItem, classes.flexItemSlider)}>

                <div className={classes.imgBox}>
                    <div className={(classes.volnovodPS)}/>
                    <div className={(classes.shup)} style={{ transform: `translateX(${translateX[0]}px` }}/>
                </div>

                <div className={classes.sliderBox}>
                    <Slider
                        value={sliderValue[0]}
                        onChange={(e) => {
                            setSliderValue([e.target.value,0]);
                        }}
                        min={0}
                        max={100}
                    />
                </div>
            </div>
            <div className={classes.flexContainer}>
                <XPosition value={sliderValue} setFunction={setSliderValue}/>
            </div>
        </>

    );
}