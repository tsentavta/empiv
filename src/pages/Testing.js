import * as React from 'react';
import classes from './Testing.module.sass'
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";
import cx from "classnames";
import XPosition from "../components/Block/XPosition/XPosition";
import Box from "@mui/material/Box";
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';

const massScale = [0.2, 20, 200, 400, 800]
const minDeg = -47
const maxDeg = 47
const UserStyleAmperemeter = ['Small', 'Medium']
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

export function Testing({styleAmperemeter = UserStyleAmperemeter[0], value = 0, settings } ) {
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
    const [scale, setScale] = useState(massScale[massScale.length-1])




    useEffect(() => {
        let degrees = value/scale//Math.acos(valueA/scale)
        if (degrees>=1) {
            degrees = maxDeg
        }
        else {
            degrees = (2*value*maxDeg/scale)+minDeg
        }
        setRotateDeg(degrees)
    }, [value, scale])

    return (

            <div>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderColor: 'black',
                        alignItems: 'center',
                        '& > *': {
                            m: 1,
                        },
                    }}
                >
                    <p style={{margin: '0'}}>Множитель:</p>
                    <ButtonGroup
                        size="small" aria-label="small button group"
                    >
                        {massScale.map((valueScale, key) => {
                            return <Button key={key}
                                           onClick={() => {
                                               setScale(valueScale)
                                           }}>{valueScale}</Button>
                        })}
                    </ButtonGroup>
                </Box>



                <div className={cx(classes.defaultStyle, isStyleAmperemeter)}>
                    <div className={classes.amperemeterImage}>
                        <div className={classes.amperemeterLine}
                             style={{transform: `rotate(${rotateDeg}deg`, transitionDuration: '500ms'}}/>
                        <div className={classes.circle}/>
                    </div>
                </div>
            </div>


    );
}