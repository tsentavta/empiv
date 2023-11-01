import React, {useState} from 'react';
import classes from "../Block.module.sass";
import {FormControlLabel, TextField} from "@mui/material";
import {alpha, styled} from '@mui/material/styles';
import {pink} from '@mui/material/colors';
import Switch from '@mui/material/Switch';
import {Testing} from "../../../pages/Testing";

const PinkSwitch = styled(Switch)(({theme}) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
    },
}));

const label = {inputProps: {'aria-label': 'Color switch demo'}};


function Ampermetr({title = "Амперметр", titleLabel = "Микроампер", value = 0, settings = 1}) {
    const [checked, setChecked] = React.useState(false);
    const handleChange = (e) => {
        setChecked(e.target.checked);
    };

    const digital = {}

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
                    <PinkSwitch {...label} onChange={handleChange} className={classes.PinkSwitch}/>
                }
                label="Вид измерительного прибора"
            />: <></>}

        </div>


    )
        ;
}

export default Ampermetr;