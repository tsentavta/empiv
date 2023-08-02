import React, {useEffect, useState} from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider, TextField} from "@mui/material";
import clsx from "classnames";
import classes from "./RectangularWaveguides.module.sass";
import expImg from "../img/exponential_growth_520.jpg";
import {Container} from "react-bootstrap";

function FullResistances(props) {

    const [translateX, setTranslateX] = useState(0) // смещение зонда
    const [sliderValue, setSliderValue] = useState(0) //для значения slider

    useEffect(() => {

        setTranslateX(sliderValue * 3);
    }, [sliderValue])

    return (
        <Container>
            <h1>Измерение полных сопротивлений</h1>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Характер нагрузки</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="Замыкание" control={<Radio />} label="Замыкание" />
                    <FormControlLabel value="МалыйКСВ" control={<Radio />} label="Малый КСВ" />
                    <FormControlLabel value="БольшойКСВ" control={<Radio />} label="Большой КСВ" />
                </RadioGroup>
            </FormControl>
            <TextField
                label="Ампереметр"
                defaultValue="1 А"
                InputProps={{
                    readOnly: true,
                }}
            />
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

export default FullResistances;