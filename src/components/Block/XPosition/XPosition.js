import React from 'react';
import {TextField} from "@mui/material";
import classes from "../Block.module.sass";
function XPosition({title = "Координата зонда",titleLabel = "Расстояние (mm)", value, settings, setFunction}) {
    return (
        <div className={classes.flexContainerItem}>
            <div className={classes.titleGenerator}>
                {title}
            </div>
            <TextField
                label={titleLabel}
                value={value}
                type="number"
                onChange={(e) => {
                    setFunction(Math.abs(e.target.value))
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
}

export default XPosition;