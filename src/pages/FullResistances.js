import React, {useEffect, useState} from 'react';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider,} from '@mui/material';
import clsx from 'classnames';
import classes from './FullResistances.module.sass';
import Ampermetr from "../components/Block/Ampermetr/Ampermetr";
import XPosition from "../components/Block/XPosition/XPosition";
import Plot from "../components/Plot/Plot";

function ksvSignal(x,value) {
    const n = workload[value].value
    const a = 1/n
    const e1 = Math.exp(Math.abs(n * Math.cos(x / 8))) - 1
    const e2 = Math.exp(n) - 1
    const e = e1/e2
    return 200 * a * e + n - 1

}

const workload = [
    {
        workload : "Замыкание",
        value : 1
    },
    {
        workload : "Малый КСВ",
        value : 6
    },

    {
        workload : "Большой КСВ",
        value : 2
    },

]

function FullResistances() {
    const [myWorkload,setMyWorkload] = useState(0)
    const [EMP, setEMP] = useState(0)
    const [translateX, setTranslateX] = useState(0); // смещение зонда
    const [sliderValue, setSliderValue] = useState(0); // для значения slider
    const [plotData, setPlotData] = useState(createPlotData())
    const [lastFrequency, setLastFrequency] = useState(0)
    const [plotPoints, setPlotPoints] = useState(100)
    const [lastPlotPoints, setLastPlotPoints] = useState(100)

    function createPlotData (load= myWorkload ) {

        const dataPlot = new Array(100);
        for (let i = 0; i <= 100; ++i) {
            dataPlot[i] = ksvSignal(i, load)
        }
        return(dataPlot)
    }

  useEffect(() => {
    setTranslateX(sliderValue * 4.16);
    setEMP(ksvSignal(sliderValue,myWorkload))
      setPlotData(createPlotData(myWorkload))
  }, [sliderValue,myWorkload]);

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <h1>Измерение полных сопротивлений</h1>
      <div className={classes.form}>
          <FormControl className={classes.formControl}>
              <FormLabel id="demo-radio-buttons-group-label">Характер нагрузки</FormLabel>
              <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue={0}
                  value={myWorkload}
                  name="radio-buttons-group"
                  onChange={(e) => {
                      setMyWorkload(e.target.value)
                  }}
              >
                  <FormControlLabel value={0} control={<Radio />} label="Замыкание" />
                  <FormControlLabel value={1} control={<Radio />} label="Малый КСВ" />
                  <FormControlLabel value={2} control={<Radio />} label="Большой КСВ" />
              </RadioGroup>
          </FormControl>
          <Ampermetr value={EMP} />

      </div>
      <h2>Исследуемая установка:</h2>
      <div className={clsx(classes.flexContainerItem, classes.flexItemSlider)}>

        <div className={classes.imgBox}>
            <div className={(classes.volnovodPS)}/>
            <div className={(classes.shup)} style={{ transform: `translateX(${translateX}px` }}/>
            <div className={(classes.plot)}>
                <Plot value={plotData}/>
            </div>
        </div>

        <div className={classes.sliderBox}>
          <Slider
            value={sliderValue[0]}
            onChange={(e) => {
              setSliderValue(e.target.value);
            }}
            min={0}
            max={100}
          />
        </div>

      </div>
        <div className={classes.flexContainer}>
            <XPosition value={sliderValue} setFunction={setSliderValue}/>
        </div>
    </>
  );
}

export default FullResistances;
