import React from 'react';
import {TextField} from "@mui/material";
import classes from "../Block.module.sass";
import Box from "@mui/material/Box";
function XPosition({title = "Координата зонда",titleLabel = "Расстояние (mm)", value, settings, setFunction}) {
    return (
        <div className={classes.flexContainerItem}>
            <div className={classes.titleGenerator}>
                {title}
            </div>
            <Box autoComplete='current-password'>
                <TextField

                    label={titleLabel}
                    value={value}
                    type="number"
                    onChange={(e) => {
                        setFunction(Math.abs(e.target.value))
                    }}
                />
            </Box>

        </div>
    );
}

export default XPosition;