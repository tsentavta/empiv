import React from 'react';
import classes from "../Block.module.sass";
import {TextField} from "@mui/material";

function Ampermetr({title = "Амперметр",titleLabel = "Микроампер", value, settings}) {
    return (
        <div className={classes.flexContainerItem}>
            <div className={classes.titleGenerator}>
                {title}
            </div>
            <TextField
                label={titleLabel}
                value={value}
                InputProps={{
                    readOnly: true,
                }}
            />
        </div>
    );
}

export default Ampermetr;