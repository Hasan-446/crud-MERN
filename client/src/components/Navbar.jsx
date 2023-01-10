import { AppBar, Toolbar, styled } from '@mui/material';

import { NavLink } from 'react-router-dom';

    
const Tabs = styled(NavLink)`
    color: #FFFFFF;
    margin-right: 20px;
    text-decoration: none;
    font-size: 20px;
`;

const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Tabs to="./" exact>User managenment system</Tabs>
                <Tabs to="all" exact>All Users</Tabs>
                <Tabs to="add" exact>Add User</Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;