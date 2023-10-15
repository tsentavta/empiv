import React, {useEffect, useState} from 'react';
import classes from "./VolumetricResonator.module.sass";
import {Container} from "react-bootstrap";
import clsx from "classnames";
import expImg from "../img/exponential_growth_520.jpg";
import { Slider, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Generator from "../components/Block/Generator/Generator";
import Ampermetr from "../components/Block/Ampermetr/Ampermetr";

function calculateE(frequency, resonantFrequency, functionQualityFactor) {
    const fr = frequency*1000000
    const rFr = resonantFrequency
    const twoQ = 2 * functionQualityFactor

    const b = Math.pow(rFr / twoQ, 2)
    const a = Math.pow(fr - rFr, 2)

    //нормировка
    const E = 1 / b
    const c = a+b
    const Ef = 1/c
    const ans = Ef/E
    //

    return (200*Math.sqrt(ans))//(random*111345*Math.sqrt(1 / ans))
}
const random = (max = 100) => {
    let x = Math.random(max);
    while (!x) {
        x = Math.random(max)
    }
    console.log(x)
    x = 100
    return x/100
}

const marks = [
    {
        value: 0,
        label: 'Низкая',
        qualityFactor: 333,
    },
    {
        value: 1,
        label: 'Средняя',
        qualityFactor: 500,
    },
    {
        value: 2,
        label: 'Высокая',
        qualityFactor: 1000,
    },
];

function VolumetricResonator(props) {


    const [translateX, setTranslateX] = useState(0) // смещение зонда
    const [sliderValue, setSliderValue] = useState(0) //для значения slider
    const [frequencyGenerator, setFrequencyGenerator] = useState(10000)
    const [I, setI] = useState(0)

    useEffect(() => {
        setI (calculateE(frequencyGenerator, 10000000000, marks[sliderValue].qualityFactor))
    }, [sliderValue, frequencyGenerator])
    return (
        <>
            <h1>Исследование вынужденных колебаний в объемном резонаторе</h1>
            <div className={classes.flexContainer}>
                <div className={classes.flexContainerItem}>
                    <Generator setFunction={setFrequencyGenerator} titleLabel={"Частота (МГц)"}/>
                </div>
                <div className={classes.flexContainerItem}>
                    <Ampermetr value={I} />
            </div>

        </div>
            <h2>Исследуемая установка:</h2>
            <div className={clsx(classes.flexContainerItem, classes.flexItemSlider)}>
                <div className={classes.flexContainerItem}>
                    <div className={classes.imgBox}>
                        <div  className={classes.img}/>
                    </div>

                </div>
                <h3>Добротность резонатора</h3>
                <div className={classes.sliderBox}>
                    <Slider
                        aria-label="Restricted values"
                        defaultValue={0}
                        // getAriaValueText={valuetext}
                        onChange={(e) => {
                            setSliderValue(e.target.value)
                        }}
                        step={null}
                        valueLabelDisplay="off"
                        marks={marks}
                        max={2}
                    />
                </div>
            </div>
        </>
    );
}

export default VolumetricResonator;