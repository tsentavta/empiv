import * as React from 'react';
import classes from "./RectangularWaveguides.module.sass";
import expImg from "../img/RectangularWaveguidesImg.png"
import {FormControl, Input, InputLabel, MenuItem, Select, Slider, TextField} from "@mui/material";
import {useEffect, useState} from "react";

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


                    <div className={classes.flexContainer}>
                        <div className={classes.flexContainerItem}>
                            <p className={classes.verticalText}>Начало волновода</p>
                        </div>
                        <div className={classes.flexContainerItem}>
                            <div className={classes.imgBox}>
                                <div  className={classes.img}/>
                                <div className={(classes.verticalLine)} style={{transform: `translateX(${translateX[0]}px`}}></div>
                                {/*<div className={(classes.verticalLine)} style={{transform: `translateX(${translateX[1]}px`}}></div>*/}
                                <div className={(classes.verticalLineStatic)}></div>
                            </div>

                        </div>
                        <div className={classes.flexContainerItem}>
                            <p className={classes.verticalText}>Выход волновода</p>
                        </div>


                </div>

                <div className={classes.sliderBox}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        valueLabelDisplay="auto"
                        value={sliderValue[0]}
                        onChange={(e) => {
                            setSliderValue([e.target.value, 0])
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

                {/*<div className={classes.flexContainerItem}>*/}
                {/*    <TextField*/}
                {/*        label="Зонд 2 (мм)"*/}
                {/*        value={sliderValue[1]}*/}
                {/*        type="number"*/}
                {/*        onChange={(e) => {*/}
                {/*            setSliderValue([sliderValue[0], Math.abs(e.target.value)])*/}
                {/*        }}*/}
                {/*        InputLabelProps={{*/}
                {/*            shrink: true,*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</div>*/}
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
                {/*<div className={classes.flexContainerItem}>*/}
                {/*    <TextField*/}
                {/*        label="Амперметр зонда 2"*/}
                {/*        value={I[1]}*/}
                {/*        InputProps={{*/}
                {/*            readOnly: true,*/}
                {/*        }}*/}
                {/*    />*/}
                {/*</div>*/}
            </div>

        </>

    );
}