import React, { useState } from 'react';
import { Button, createTheme, IconButton, ThemeProvider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const theme = createTheme({
    palette: {
        primary: {
            main: "#393939",
        },
        secondary: {
            main: "#f8f8f8"
        }
    },
});

const Menu = ({ data, currentData, setCurrentData }) => {
    const [menu, setMenu] = useState(false)

    return (
        <div className="menu">
            <IconButton onClick={() => setMenu(!menu)}>
                {
                    menu ? <CloseIcon /> : <MenuIcon />
                }
            </IconButton>
            {
                menu ? (
                    <div className="menu-buttons">
                        <ThemeProvider theme={theme}>
                            {
                                data.map((item, index) =>
                                    <Button key={index}
                                        variant="contained"
                                        onClick={() => setCurrentData(item)}
                                        color={currentData.id === index ? 'primary' : 'secondary'}>
                                        {item.name}
                                    </Button>
                                )
                            }
                        </ThemeProvider>
                    </div>
                ) : null
            }
        </div>
    );
};

export default Menu;