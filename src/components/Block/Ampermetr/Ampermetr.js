import React, {useState} from 'react';
import classes from "../Block.module.sass";
import {TextField} from "@mui/material";

function Ampermetr({title = "Амперметр",titleLabel = "Микроампер", value = 0, settings}) {
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
            <TextField
                label={titleLabel}
                value={valueAmpermetr}
                InputProps={{
                    readOnly: true,
                }}
            />
        </div>
    );
}

export default Ampermetr;