import React from 'react';
import classes from "../Block.module.sass";
import {Slider, TextField} from "@mui/material";

function Generator({title = "Генератор", titleLabel = "Частота (МГц)",defaultValue= 10000, value, settings = 0, setFunction}) {
    return (
        <div>
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
                        // setConstForMaterial(Number(e.target.value))
                    }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                {settings ? <div>
                    <Slider
                        value={value}
                        onChange={(e) => {
                            setFunction(e.target.value)
                        }}
                        min={6477}
                        max={6557}
                    />
                </div> : <></> }
            </div>
        </div>

    );
}

export default Generator;