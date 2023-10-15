import React from 'react';
import classes from "../Block.module.sass";
import {TextField} from "@mui/material";

function Generator({title = "Генератор", titleLabel = "Частота",defaultValue= 10000, value, settings, setFunction}) {
    return (
        <div className={classes.flexContainerItem}>
            <div className={classes.titleGenerator}>
                {title}
            </div>
            <TextField
                defaultValue={defaultValue}
                label={titleLabel}
                value={value}
                type="number"
                onChange={(e) => {
                    setFunction(Math.abs(e.target.value))
                    // setConstForMaterial(Number(e.target.value))
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
}

export default Generator;