import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Avatar} from "@mui/material";
import logo from "../../img/logo.ico"
import classes from "./NavBar.module.sass";
import * as setPathRouter from "prop-types";


NavBar.propTypes = {
    setPathRouter: setPathRouter.func.isRequired,
};

function NavBar({setPathRouter, pages}) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const LOGO = "ЕМПиВ"




    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    function handleCloseNavMenu(href) {
        if (href != null) {
            setPathRouter(href)
        }
        setAnchorElNav(null);
    }

    return (
        <AppBar position="static" className={classes.appBarBackground}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters>
                    <IconButton sx={{ display: {xs: 'none', md: 'flex'}, p: 0, margin: '10px'}}>
                        <Avatar alt="" src={logo} />
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            flexGrow: 1,
                            mr: 2,
                            display: {xs: 'none', md: 'flex'},
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {LOGO}
                    </Typography>

                    <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={() => handleCloseNavMenu(null)}
                            sx={{
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            {pages.map((page, i) => (
                                <MenuItem key={i} onClick={() => handleCloseNavMenu(page.href)}>
                                    <Typography textAlign="center" sx={{
                                        fontFamily: 'monospace',
                                        textDecoration: 'none',
                                    }}>{page.string}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Avatar alt="" src={logo} sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: {xs: 'flex', md: 'none'},
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        {LOGO}
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                        {pages.map((page, i) => (
                            <Button
                                key={i}
                                onClick={() => handleCloseNavMenu(page.href)}
                                sx={{my: 2, color: 'white', display: 'block'}}
                            >
                                {page.string}
                            </Button>
                        ))}
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;
