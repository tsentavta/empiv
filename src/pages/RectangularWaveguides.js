import * as React from 'react';
import classes from "./RectangularWaveguides.module.sass";
import expImg from "../img/imgSkin.png"
import {FormControl, Input, InputLabel, MenuItem, Select, Slider, TextField} from "@mui/material";
import {useEffect, useState} from "react";

function electricFieldStrength(z_position, frequency) {
    const f = frequency * 1000000
    const z = z_position
    console.log({f,z})
    let ans;
    if (frequency<6520) {
        const y = Math.sqrt((100000000000000) / (2 * Math.PI * f * Math.PI))
        ans = Math.exp(-z * (y))
    } else {
        ans = Math.abs(Math.cos(2*Math.PI*f*z/300000000))
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
        setTranslateX([sliderValue[0] * 3, sliderValue[1] * 3]);
    }, [sliderValue, frequencyGen])


    return (
        <>
            <h1>Исследование собственных волн прямоугольного волновода</h1>
            <div className={classes.flexContainer}>
                <div className={classes.flexContainerItem}>
                    <TextField
                        label="Генератор (МГц)"
                        value={frequencyGen}
                        type="number"
                        onChange={(e) => {
                            setFrequencyGen(Math.abs(e.target.value))
                            // setConstForMaterial(Number(e.target.value))
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </div>
            <h2>Исследуемая установка:</h2>
            <div className={classes.boxContainer}>

                <div className={classes.imgBox}>
                    {/*<div className={clsx({backgroundColor: '#b87333'}, classes.img)}/>*/}
                    <div className={classes.img}/>
                    {/*<div className={classes.image}/>*/}
                    <div className={(classes.verticalLine)} style={{transform: `translateX(${translateX[0]}px`}}></div>
                    <div className={(classes.verticalLine)} style={{transform: `translateX(${translateX[1]}px`}}></div>
                </div>

                <div className={classes.sliderBox}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        valueLabelDisplay="auto"
                        value={sliderValue}
                        onChange={(e) => {
                            setSliderValue(e.target.value)
                        }}
                        min={0}
                        max={100}
                    />
                </div>
            </div>
            <div className={classes.flexContainer}>
                <div className={classes.flexContainerItem}>
                    <TextField
                        label="Зонд 1 (мм)"
                        value={sliderValue[0]}
                        type="number"
                        onChange={(e) => {
                            setSliderValue([Math.abs(e.target.value), sliderValue[1]])
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <div className={classes.flexContainerItem}>
                    <TextField
                        label="Зонд 2 (мм)"
                        value={sliderValue[1]}
                        type="number"
                        onChange={(e) => {
                            setSliderValue([sliderValue[0], Math.abs(e.target.value)])
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
            </div>
            <div className={classes.flexContainer}>
                <div className={classes.flexContainerItem}>
                    <TextField
                        label="Амперметр зонда 1"
                        value={I[0]}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
                <div className={classes.flexContainerItem}>
                    <TextField
                        label="Амперметр зонда 2"
                        value={I[1]}
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </div>

        </>

    );
}