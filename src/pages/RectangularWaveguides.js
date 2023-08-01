import * as React from 'react';
import classes from "./RectangularWaveguides.module.sass";
import {Container} from "react-bootstrap";
import expImg from "../img/exponential_growth_520.jpg";
import {Slider, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import clsx from "classnames";


export function RectangularWaveguides() {

    const [translateX, setTranslateX] = useState(0) // смещение зонда
    const [sliderValue, setSliderValue] = useState(0) //для значения slider

    useEffect(() => {

        setTranslateX(sliderValue * 3);
    }, [sliderValue])


    return (
        <Container className={classes.container}>
            <h1>Исследование собственных волн прямоугольного волновода</h1>
            <div className={classes.flexContainer}>
                <div className={classes.flexContainerItem}>
                    <TextField
                        defaultValue="Hello World"
                        label="Генератор (ГГц)"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>


                <div className={classes.flexContainerItem}>
                    <TextField
                        label="Ампереметр"
                        defaultValue="1 А"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                </div>
            </div>
            <h2>Исследуемая установка:</h2>
            <div className={clsx(classes.flexContainerItem, classes.flexItemSlider)}>

                <div className={classes.imgBox}>
                    <img src={expImg} alt={'img'}/>
                    <div className={(classes.verticalLine)} style={{transform: `translateX(${translateX}px`}}></div>
                </div>

                <div className={classes.sliderBox}>
                    <Slider
                        value={sliderValue}
                        onChange={(e) => {
                            setSliderValue(e.target.value)
                        }}
                        min={0}
                        max={100}
                    />
                </div>
            </div>

        </Container>

    );
}