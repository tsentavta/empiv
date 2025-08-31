import React, {useEffect, useState} from 'react';
import classes from "./VolumetricResonator.module.sass";
import {Container} from "react-bootstrap";
import clsx from "classnames";
import expImg from "../img/exponential_growth_520.jpg";
import { Slider, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Generator from "../components/Block/Generator/Generator";
import Ampermetr from "../components/Block/Ampermetr/Ampermetr";
import Plot from "../components/Plot/Plot";

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

const m = 100
const n = 0
const p = 50
const r = 1
const s =0
const w =0


// Вычисление общего знаменателя
const denominator = m**2 * p + s**2 * m + s * p**2 - s**2 * p - s * m**2 - p**2 * m;

// Первое выражение
const a = (n * p + m * w + r * s - w * p - s * n - r * m) / denominator;

// Второе выражение
const b = (m**2 * r + n * s**2 + p**2 * w - s**2 * r - m**2 * w - p**2 * n) / denominator;

// Третье выражение
const c = (m**2 * p * w + m * r * s**2 + n * s * p**2 - s**2 * p * n - s * r * m**2 - w * m * p**2) / denominator;

// Четвертое выражение
function parabola(x) {
    return (a * x**2 + b * x + c)
}

function VolumetricResonator(props) {
    const [translateX, setTranslateX] = useState(0) // смещение зонда
    const [sliderValue, setSliderValue] = useState(0) //для значения slider
    const [lastSliderValue, setLastSliderValue] = useState(0) //для значения slider
    const [sliderValueGenerator, setSliderValueGenerator] = useState(6517) //для значения slider
    const [frequencyGenerator, setFrequencyGenerator] = useState(6517)
    const [I, setI] = useState(0)
    const [plotData, setPlotData] = useState([])

    function createPlotData (frequency, resonantFrequency, functionQualityFactor) {

        const dataPlot = new Array(100);
        for (let i = 0; i <= 100; ++i) {
            dataPlot[i] = parabola(i)*functionQualityFactor/1000*I
        }
        return(dataPlot)

    }

    useEffect(() => {
        setI (calculateE(frequencyGenerator, 6517000000, marks[sliderValue].qualityFactor))


            setPlotData(createPlotData(frequencyGenerator, 6517000000, marks[sliderValue].qualityFactor))
            setLastSliderValue(sliderValue)


    }, [sliderValue, frequencyGenerator,])
    return (
        <>
            <h1>Исследование вынужденных колебаний в объемном резонаторе</h1>
            <div className={classes.flexContainer}>
                <div className={classes.flexContainerItem}>
                    <Generator setFunction={setFrequencyGenerator} value={frequencyGenerator} defaultValue={6517} titleLabel={"Частота (МГц)"} settings={1}/>

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
                        <div className={(classes.plot)}>
                            <Plot value={plotData}/>
                        </div>
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