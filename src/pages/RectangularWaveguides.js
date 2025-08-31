import * as React from 'react';
import classes from "./RectangularWaveguides.module.sass";
import expImg from "../img/RectangularWaveguidesImg.png"
import {FormControl, Input, InputLabel, MenuItem, Select, Slider, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import Ampermetr from "../components/Block/Ampermetr/Ampermetr";
import Generator from "../components/Block/Generator/Generator";
import XPosition from "../components/Block/XPosition/XPosition";
import clsx from "classnames";
import Plot from "../components/Plot/Plot";

function electricFieldStrength(z_position = 0, frequency = 6517) {
    const fkr = 6517000000
    const c = 2.998 * 100000000
    const f = frequency * 1000000
    const l = c/f
    const z = (z_position+40)/ 1000
    const lg = l / Math.sqrt(Math.abs(1-Math.pow(l/0.046, 2)))
    const fg = c/lg

    let ans;
    if (f<fkr) {
        const y = 2 * Math.PI * Math.sqrt(Math.pow(fkr, 2) - Math.pow(f, 2))
        ans = Math.exp(-((z_position)/ 1000) * y / c)
    } else {
        ans = Math.abs(Math.cos(2 * Math.PI * fg * z / c))
        //console.log(2*Math.PI * fg/c) // период
    }

    return 200*ans
}






export function RectangularWaveguides() {

    const [translateX, setTranslateX] = useState(0) // смещение зонда
    const [sliderValue, setSliderValue] = useState(20) //для значения slider
    const [frequencyGen, setFrequencyGen] = useState(6517)
    const [I, setI] = useState(0)
    const [lastFrequency, setLastFrequency] = useState(0)
    const [plotPoints, setPlotPoints] = useState(100)
    const [lastPlotPoints, setLastPlotPoints] = useState(100)

    const [plotData, setPlotData] = useState(createPlotData())

    useEffect(() => {
        setI(electricFieldStrength(sliderValue, frequencyGen))
        setTranslateX(sliderValue * 4.16)

        if (lastFrequency !== frequencyGen || plotPoints !== lastPlotPoints) {
            setPlotData(createPlotData(frequencyGen, plotPoints))
        }
        setLastFrequency(frequencyGen)
        setLastPlotPoints(plotPoints)
    }, [sliderValue, frequencyGen, plotPoints])

    function createPlotData (frequency= frequencyGen , points= plotPoints ) {

        const dataPlot = new Array(points);
        for (let i = 0; i <= points; ++i) {
            dataPlot[i] = electricFieldStrength(i*100/points, frequency)
        }
        return(dataPlot)
    }


    return (
        <>
            <h1>Исследование собственных волн прямоугольного волновода</h1>
            <div className={classes.flexContainer}>
                <div className={classes.flexContainerItem}>
                    <Generator value={frequencyGen} setFunction={setFrequencyGen}/>
                </div>
                <div className={classes.flexContainerItem}>
                    <Ampermetr value={I} />
                </div>
            </div>
            <h2>Исследуемая установка:</h2>
            <div className={clsx(classes.flexContainerItem, classes.flexItemSlider)}>

                <div className={classes.imgBox}>
                    <div className={(classes.volnovodPS)}/>
                    <div className={(classes.shup)} style={{ transform: `translateX(${translateX}px` }}/>
                    <div className={(classes.plot)}>
                        <Plot value={plotData}/>
                    </div>

                </div>

                <div className={classes.sliderBox}>
                    <Slider
                        value={sliderValue}
                        onChange={(e) => {
                            setSliderValue(e.target.value);
                        }}
                        min={0}
                        max={100}
                    />
                </div>
            </div>
            <div className={classes.flexContainer}>
                <XPosition value={sliderValue} setFunction={setSliderValue}/>
                <XPosition title = {"График"} titleLabel = {"Количество точек"} value = {plotPoints} setFunction={setPlotPoints}/>
            </div>
        </>

    );
}