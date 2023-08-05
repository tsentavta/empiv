
import * as React from 'react';
import {Container} from "react-bootstrap";
import classes from "./Main.module.sass";
import Typography from "@mui/material/Typography";
import {ReactComponent as File} from "../img/upload_file.svg"
import {Link} from "react-router-dom";

export function Main() {
    return (
        <>
            <h1>Кафедра электродинамики и антенн</h1>
            <Link to={"https://studfile.net/preview/4600332/"} className={classes.link}>
                <div className={classes.flexContainer}>
                    <File/>
                    <div className={classes.flexContainerItem}>
                        <Typography variant="h6" gutterBottom className={classes.title}>
                            Электромагнитные поля и волны
                        </Typography>
                        <Typography variant="body1" gutterBottom className={classes.paragraph}>
                            Методическая разработка к лабораторному практикуму по курсу
                        </Typography>
                    </div>
                </div>
            </Link>



        </>
    );
};