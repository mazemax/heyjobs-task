import React from 'react';
import Link from 'next/link';
import { useTheme } from '@material-ui/core/styles';

import { NavWrapper, AppBar, Toolbar, IconButton, MenuIcon, HomeIcon, Typography, Divider,
         List, ListItem, ListItemText, ListItemIcon, Drawer, SidebarWrapper, LinkWrapper
} from "../styles/Nav.style";

/**
 * Functional component for Navigation and AppBar
 * @returns {*}
 * @constructor
 */
function Nav () {
    const theme = useTheme();
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    const sideList = side => (
        <SidebarWrapper
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List>
                <Link href="/">
                    <LinkWrapper>
                        <ListItem button>
                            <ListItemIcon><HomeIcon/></ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem>
                    </LinkWrapper>
                </Link>
            </List>
            <Divider />
        </SidebarWrapper>
    );

    return (
        <NavWrapper>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        theme={theme}
                        onClick={toggleDrawer('left', true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6">
                        HeyJobs React Assessment Task
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
        </NavWrapper>
    );
}

export default Nav;
