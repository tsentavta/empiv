import React, {useEffect, useState} from 'react';
import classes from "./VolumetricResonator.module.sass";
import {Container} from "react-bootstrap";
import clsx from "classnames";
import expImg from "../img/exponential_growth_520.jpg";
import {Slider, TextField} from "@mui/material";
const marks = [
    {
        value: 0,
        label: 'Низкая',
    },
    {
        value: 1,
        label: 'Средняя',
    },
    {
        value: 2,
        label: 'Высокая',
    },
];

function VolumetricResonator(props) {


    const [translateX, setTranslateX] = useState(0) // смещение зонда
    const [sliderValue, setSliderValue] = useState(0) //для значения slider

    useEffect(() => {

        setTranslateX(sliderValue * 3);
    }, [sliderValue])
    return (
        <>
            <h1>Исследование вынужденных колебаний в объемном резонаторе</h1>
            <div className={classes.flexContainer}>
                <div className={classes.flexContainerItem}>
                    <TextField
                        label="Генератор (ГГц)"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className={classes.flexContainerItem}>
                    <TextField
                        label="Амперметр"
                        defaultValue="1 А"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
            </div>

        </div>
            <h2>Исследуемая установка:</h2>
            <div className={clsx(classes.flexContainerItem, classes.flexItemSlider)}>
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