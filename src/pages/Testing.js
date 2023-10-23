import * as React from 'react';
import classes from './Testing.module.sass'
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import cx from "classnames";
import XPosition from "../components/Block/XPosition/XPosition";

const massScale = [0.1, 10, 100, 200]
const minDeg = -47
const maxDeg = 47
const UserStyleAmperemeter = ['Small', 'Medium']


export function Testing({styleAmperemeter = UserStyleAmperemeter[1]}) {
    let isStyleAmperemeter
    switch (styleAmperemeter) {
        case 'Small':
            isStyleAmperemeter = classes.amperemeterSmall
            break
        case 'Medium':
            isStyleAmperemeter = classes.amperemeterMedium
            break
    }

    const [rotateDeg, setRotateDeg] = useState(minDeg)
    const [valueA, setValueA] = useState(0)
    const [scale, setScale] = useState(massScale[3])

    useEffect(() => {
        let degrees = valueA/scale//Math.acos(valueA/scale)
        if (degrees>=1) {
            degrees = maxDeg
        }
        else {
            degrees = (2*valueA*maxDeg/scale)+minDeg
        }
        setRotateDeg(degrees)
    }, [valueA, scale])

    return (
        <div>
            <XPosition title={"Ток"} titleLabel={"Ампер"} value={valueA} setFunction={setValueA}/>
            <div>
                <ButtonGroup
                    variant="contained"
                    aria-label="outlined primary button group"
                >
                    {massScale.map((valueScale, key) => {
                        return <Button key={key}
                                       onClick={() => {
                                           setScale(valueScale)
                                       }}>{valueScale}</Button>
                    })}
                </ButtonGroup>
            </div>
            <div className={cx(classes.defaultStyle, isStyleAmperemeter)}>
                <div className={classes.amperemeterImage}>
                    <div className={classes.amperemeterLine}
                         style={{transform: `rotate(${rotateDeg}deg`, transitionDuration: '500ms'}}/>
                    <div className={classes.circle}/>
                </div>
            </div>
        </div>
    );
};