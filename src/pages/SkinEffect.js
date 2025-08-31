import {FormControl, InputLabel, MenuItem, Select, Slider, TextField} from "@mui/material";
import classes from "./SkinEffect.module.sass";
import expImg from "../img/imgSkin.png"
import * as React from "react";
import {useEffect, useState} from "react";
import {materialConsts} from "../components/consts";
import Generator from "../components/Block/Generator/Generator";
import Ampermetr from "../components/Block/Ampermetr/Ampermetr";
import XPosition from "../components/Block/XPosition/XPosition";


function electricFieldStrength(z_position, electric_field_strength, frequency, relative_magnetic_permeability, electrical_conductance) {
    const rmp = relative_magnetic_permeability
    const mp = 4 * Math.PI
    const ec = electrical_conductance
    const f = frequency
    const efs = electric_field_strength
    const z = z_position
    console.log({z_position,electric_field_strength,frequency,relative_magnetic_permeability,electrical_conductance})

    const y = (1/Math.sqrt((10000000) / (Math.PI * f * mp * rmp * ec)))

    let ans =  efs * Math.exp(-z * (y))
    return ans.toFixed(4)
}



export function SkinEffect() {
    const [translateX, setTranslateX] = useState(0) // смещение зонда
    const [empValue, setEmpValue] = useState(0) // вывод значения ЭМП
    const [sliderValue, setSliderValue] = useState(0) //для значения slider
    const [material, setMaterial] = useState(1) // выбор материала
    const [probeDisplacement, setProbeDisplacement] = useState(0.1) // вывод значения смещение зонда в мм
    const [frequencyGen, setFrequencyGen] = useState(1000)

    useEffect(() => {
        setTranslateX(sliderValue * 3);
        // setEmpValue(sliderValue * constForMaterial)
        let position

        if (material !== 4 ) {
            position = sliderValue / 10 /1000
            setProbeDisplacement(sliderValue / 10)
        } else {
            position = sliderValue * 3 / 100 /1000
            setProbeDisplacement(sliderValue * 3 / 100)
        }

        switch (material) {
            case 1:
                setEmpValue(electricFieldStrength(position, 1, frequencyGen, materialConsts.copper.relative_magnetic_permeability, materialConsts.copper.electrical_conductance))
                break
            case 2:
                setEmpValue(electricFieldStrength(position, 1, frequencyGen, materialConsts.tin.relative_magnetic_permeability, materialConsts.tin.electrical_conductance))
                break
            case 3:
                setEmpValue(electricFieldStrength(position, 1, frequencyGen, materialConsts.brass.relative_magnetic_permeability, materialConsts.brass.electrical_conductance))
                break
            case 4:
                setEmpValue(electricFieldStrength(position, 1, frequencyGen, materialConsts.steel.relative_magnetic_permeability, materialConsts.steel.electrical_conductance))
                break
        }
    }, [sliderValue, material, frequencyGen])

    return (
        <>
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
                            }}
                        >
                            <MenuItem value={1}>Медь</MenuItem>
                            <MenuItem value={2}>Олово</MenuItem>
                            <MenuItem value={3}>Латунь</MenuItem>
                            <MenuItem value={4}>Сталь</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <Generator value={frequencyGen} titleLabel={'Частота (Гц)'} title={"Генератор"} setFunction={setFrequencyGen}/>
            </div>

            <h2>Исследуемая установка:</h2>
            <div className={classes.boxContainer}>

                <div className={classes.imgBox}>
                    <div className={classes.img}/>
                    <div className={(classes.verticalLine)} style={{transform: `translateX(${translateX/2}px`}}></div>
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
                <Ampermetr title={"Напряженность ЭМП"} titleLabel={"мВ/м"} value={empValue + ' мВ/м'} settings={0}/>
                <XPosition title={"Координата зонда"} value={probeDisplacement} setFunction={setSliderValue}/>
            </div>
        </>
    );
}

