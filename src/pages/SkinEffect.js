import {FormControl, InputLabel, MenuItem, Select, Slider, TextField} from "@mui/material";
import classes from "./SkinEffect.module.sass";
import expImg from "../img/exponential_growth_520.jpg"
import {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import * as React from "react";


export function SkinEffect() {
    const [translateX, setTranslateX] = useState(0) // смещение зонда
    const [empValue, setEmpValue] = useState(0) // вывод значения ЭМП
    const [sliderValue, setSliderValue] = useState(0) //для значения slider
    const [material, setMaterial] = useState('1') // выбор материала
    const [constForMaterial, setConstForMaterial] = useState(1) // коэффициент материала
    const [probeDisplacement, setProbeDisplacement] = useState(0.1) // вывод значения смещение зонда в мм

    useEffect(() => {
        setTranslateX(sliderValue * 3);
        setEmpValue(sliderValue * constForMaterial)
        setProbeDisplacement(sliderValue/10)

    }, [sliderValue, material])


    return (
        <div className="App">
            <Container>
                <h1>Исследование скин-эффекта</h1>

                <div className={classes.flexContainer}>
                    <div className={classes.flexContainerItem}>
                        <FormControl fullWidth className={classes.flexContainerItem}>
                            <InputLabel id="demo-simple-select-label">Материал</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={material}
                                label="Материал"
                                onChange={(e) => {
                                    setMaterial(e.target.value)
                                    setConstForMaterial(Number(e.target.value))
                                }}
                            >
                                <MenuItem value={1}>Медь</MenuItem>
                                <MenuItem value={2}>Олово</MenuItem>
                                <MenuItem value={3}>Латунь</MenuItem>
                                <MenuItem value={4}>Сталь</MenuItem>
                            </Select>
                        </FormControl>
                    </div>


                </div>

                <h2>Исследуемая установка:</h2>
                <div className={classes.boxContainer}>

                    <div className={classes.imgBox}>
                        <img src={expImg} alt={'img'}/>
                        {/*<div className={classes.image}/>*/}
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

                <div className={classes.flexContainer}>


                    <div className={classes.flexContainerItem}>
                        <TextField
                            label="E"
                            value={empValue + ' мВ/м'}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>

                    <div className={classes.flexContainerItem}>
                        <TextField
                            label="Координата зонда"
                            value={probeDisplacement + " мм"}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
}

