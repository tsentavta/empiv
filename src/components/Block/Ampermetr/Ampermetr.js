import React, {useState} from 'react';
import classes from "../Block.module.sass";
import {FormControlLabel, TextField} from "@mui/material";
import {alpha, styled} from '@mui/material/styles';
import {orange} from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import {Testing} from "../../../pages/Testing";
const colorOrange = orange[800]


const ColorSwitch = styled(Switch)(({theme}) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: colorOrange,
        '&:hover': {
            backgroundColor: alpha(colorOrange, theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: colorOrange,
    },
}));

const label = {inputProps: {'aria-label': 'Color switch demo'}};


function Ampermetr({title = "Амперметр", titleLabel = "Микроампер", value = 0, settings = 1}) {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (e) => {
        setChecked(e.target.checked);
    };


    let valueAmpermetr
    try {
        valueAmpermetr = value.toFixed(4)
    } catch (e) {
        valueAmpermetr = value
    }
    return (
        <div className={classes.flexContainerItem}>

                <div className={classes.titleGenerator}>
                    {title}
                </div>
                {
                    !checked ?
                        <TextField
                            label={titleLabel}
                            value={valueAmpermetr}
                            InputProps={{
                                readOnly: true,
                            }}
                        />
                        : <Testing value={valueAmpermetr}/>
                }

            {settings ? <FormControlLabel
                control={
                    <ColorSwitch {...label} onChange={handleChange}/>
                }
                label="Вид измерительного прибора"
            />: <></>}

        </div>


    )
        ;
}

export default Ampermetr;