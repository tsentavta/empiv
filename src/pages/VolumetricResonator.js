import React, {useEffect, useState} from 'react';
import classes from "./VolumetricResonator.module.sass";
import {Container} from "react-bootstrap";
import clsx from "classnames";
import expImg from "../img/exponential_growth_520.jpg";
import { Slider, TextField } from "@mui/material";
import Button from "@mui/material/Button";

function calculateE(frequency, resonantFrequency, functionQualityFactor) {
    const fr = frequency
    const rFr = resonantFrequency 
    const twoQ = 2 * functionQualityFactor
    const a = fr - rFr
    const b = rFr / twoQ
    const ans = Math.pow(a, 2) + Math.pow(b, 2)
    return Math.sqrt(1 / ans)
}

const marks = [
    {
        value: 0,
        label: 'Низкая',
        qualityFactor: 1000,
    },
    {
        value: 1,
        label: 'Средняя',
        qualityFactor: 10000,
    },
    {
        value: 2,
        label: 'Высокая',
        qualityFactor: 100000,
    },
];

function VolumetricResonator(props) {


    const [translateX, setTranslateX] = useState(0) // смещение зонда
    const [sliderValue, setSliderValue] = useState(0) //для значения slider
    const [frequencyGenerator, setFrequencyGenerator] = useState(10000000000)
    const [I, setI] = useState(0)

    useEffect(() => {
        setI (calculateE(frequencyGenerator, 10000000000, marks[sliderValue].qualityFactor))
    }, [sliderValue, frequencyGenerator])
    return (
        <>
            <h1>Исследование вынужденных колебаний в объемном резонаторе</h1>
            <div className={classes.flexContainer}>
                <div className={classes.flexContainerItem}>
                    <div className={classes.flexContainerItemGenerator}>
                        <Button variant="contained" disabled className={classes.titleGenerator}>
                            Генератор СВЧ
                        </Button>
                        <TextField
                            label="Частота (ГГц)"
                            type="number"
                            onChange={(e) => {
                                setFrequencyGenerator(e.target.value)
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </div>
                </div>
                <div className={classes.flexContainerItem}>
                    <div className={classes.flexContainerItemGenerator}>
                        <Button variant="contained" disabled className={classes.titleGenerator}>
                            Микроамперметр
                        </Button>
                        <TextField
                            label="Амперметр"
                            value={I}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
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