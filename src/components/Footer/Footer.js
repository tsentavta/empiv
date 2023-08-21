
import * as React from 'react';
import classes from "./Footer.module.sass";
import {AppBar, Container, Link} from "@mui/material";
import * as setPathRouter from "prop-types";
import {ReactComponent as MuiLogo} from "../../img/muilogo.svg"
import {ReactComponent as ReactLogo} from "../../img/Reactlogo.svg"
import {ReactComponent as GitHubLogo} from "../../img/github.svg"

Footer.propTypes = {
    setPathRouter: setPathRouter.func.isRequired,
};

export function Footer({setPathRouter, pages}) {

    function handleCloseNavMenu (href) {
        if (href != null) {
            setPathRouter(href)
        }
    }

    return (
        <AppBar position={"relative"} className={classes.background}>
            <Container maxWidth="xl">



                <div className={classes.flexContainer}>
                    <div className={classes.flexContainerNav}>
                        <div className={classes.flexContainerItem}>
                            <div className={classes.flexContainerItemPages}>
                                {
                                    pages.map(
                                        (item, i) => {
                                            return <Link
                                                className={classes.link}
                                                color={'#97cec2'}
                                                key={i}
                                                onClick={() => handleCloseNavMenu(item.href)}
                                                underline="hover"
                                            >{item.string}</Link>
                                        }
                                    )
                                }
                            </div>
                        </div>

                        <div className={classes.flexContainerItem}>
                            <p>
                                Пименов Ю.В., Вольман В.И., Муравцов А.Д. «Техническая электродинамика» – М.: «Радио и связь», 2000. – 536 с.
                            </p>

                            <p>
                                Семенов Н.А., «Техническая электродинамика» – М.: «Связь», 1973. – 480 с.
                            </p>
                        </div>

                        <div className={classes.flexContainerItem}>
                            <div className={classes.flexContainerItemPages}>
                                <Link
                                    className={classes.link}
                                    color={'#06233a'}
                                    href={"https://studfile.net/preview/4600332/"}
                                    underline="hover"
                                >Методичка</Link>
                                <Link
                                    className={classes.link}
                                    color={'#06233a'}
                                    href={"https://www.psuti.ru/"}
                                    underline="hover"
                                >psuti.ru</Link>
                                <Link
                                    className={classes.link}
                                    color={'#06233a'}
                                    href={"http://antenna.psuti.ru"}
                                    underline="hover"
                                >antenna.psuti.ru</Link>
                            </div>
                        </div>
                    </div>

                    <div className={classes.textBy}>
                        <a href={"https://mui.com/"}>
                            <div className={classes.divMuiLogo}>
                                <MuiLogo/> Material UI
                            </div>
                        </a>

                        <a href={"https://legacy.reactjs.org/"}>
                            <div className={classes.divMuiLogo}>
                                <ReactLogo/> React
                            </div>
                        </a>
                        <a href={"https://github.com/tsentavta/empiv/tree/main/src"}>
                            <div className={classes.divMuiLogo}>
                                <GitHubLogo/> by tsentavta
                            </div>
                        </a>


                    </div>
                </div>

            </Container>
        </AppBar>

    );
};