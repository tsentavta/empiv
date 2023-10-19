
import * as React from 'react';
import {Container} from "react-bootstrap";
import classes from "./Main.module.sass";
import Typography from "@mui/material/Typography";
import {ReactComponent as File} from "../img/upload_file.svg"
import {Link} from "react-router-dom";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import pages from "../pages";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {NULL} from "sass";


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
            <div className={classes.divAccordion}>
                {pages.map((pagesItem,key)=>{
                    if (pagesItem.hasOwnProperty('title')) {
                        return <Accordion key={key}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <>{pagesItem.title}</>
                            </AccordionSummary>
                            <AccordionDetails>
                                <h5>Цель работы</h5>
                                <p>
                                    {pagesItem.purpose}
                                </p>
                                <h5>Литература</h5>
                                <p>
                                    {pagesItem.purpose}
                                </p>
                                <h5>Примечание</h5>
                                <p>
                                    {pagesItem.description}
                                </p>
                            </AccordionDetails>
                        </Accordion>
                    }

                })}

            </div>
        </>
    );
};