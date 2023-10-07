import React from 'react';
import {TextField} from "@mui/material";
import classes from "../Block.module.sass";
function XPosition({title = "Зонд 1",titleLabel = "Расстояние", value, settings, setFunction}) {
    return (
        <div className={classes.flexContainerItem}>
            <div className={classes.titleGenerator}>
                {title}
            </div>
            <TextField
                label={titleLabel}
                value={value[0]}
                type="number"
                onChange={(e) => {
                    setFunction([Math.abs(e.target.value), value[1]])
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </div>
    );
}

export default XPosition;