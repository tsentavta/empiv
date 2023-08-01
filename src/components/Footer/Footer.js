
import * as React from 'react';
import {Container} from "react-bootstrap";
import classes from "./Footer.module.sass";
import {Link} from "react-router-dom";

const NavMenu = [{href: '', string: 'Главная'}, {href: '', string: 'портал ПГУТИ'}, {href: '', string: 'Ссылка на метадические указания к лабораторной'}]

export function Footer() {
    return (
        <Container className={classes.flexContainer}>

            {NavMenu.map((Item, i)=> {
                return (<Link key={i} to={Item.href} className={classes.flexContainerItem}>{Item.string}</Link>)
            })}
        </Container>
    );
};