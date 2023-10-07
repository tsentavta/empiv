import React, { useEffect, useState } from 'react';
import {
  FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider, TextField,
} from '@mui/material';
import clsx from 'classnames';
import { Container } from 'react-bootstrap';
import classes from './FullResistances.module.sass';
import Ampermetr from "../components/Block/Ampermetr/Ampermetr";

function FullResistances() {
  const [translateX, setTranslateX] = useState(0); // смещение зонда
  const [sliderValue, setSliderValue] = useState(0); // для значения slider

  useEffect(() => {
    setTranslateX(sliderValue * 4.16);
  }, [sliderValue]);

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <>
      <h1>Измерение полных сопротивлений</h1>
      <div className={classes.form}>
          <FormControl className={classes.formControl}>
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
          <Ampermetr value={0} />

      </div>
      <h2>Исследуемая установка:</h2>
      <div className={clsx(classes.flexContainerItem, classes.flexItemSlider)}>

        <div className={classes.imgBox}>
            <div className={(classes.volnovodPS)}/>
            <div className={(classes.shup)} style={{ transform: `translateX(${translateX}px` }}/>
        </div>

        <div className={classes.sliderBox}>
          <Slider
            value={sliderValue}
            onChange={(e) => {
              setSliderValue(e.target.value);
            }}
            min={0}
            max={100}
          />
        </div>
      </div>
    </>
  );
}

export default FullResistances;
