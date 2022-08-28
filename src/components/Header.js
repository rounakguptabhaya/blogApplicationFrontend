import React from 'react'

import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../store';

const Header = () => {
    const dispatch = useDispatch();
    const loggedIn = useSelector(state=> state.loggedIn)
    const [selectedTab, setSelectedTab] = React.useState();
    const handleChange = (event , newValue) =>{
        setSelectedTab(newValue);
    }
  return <AppBar position='sticky' sx={{background: 'linear-gradient(90deg, rgba(76,5,133,1) 0%, rgba(103,14,109,1) 37%, rgba(214,14,196,1) 100%);'}}>
    <Toolbar>
        <Typography variant='h4'>BlogsApp</Typography>
        {loggedIn && <Box display="flex" marginLeft={'auto'} marginRight={'auto'}>
            <Tabs textColor='inherit' value={selectedTab} onChange={handleChange}>
                <Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
                <Tab LinkComponent={Link} to="/myBlogs" label="My Blogs" />
                <Tab LinkComponent={Link} to="/blogs/add" label="Add Blog" />
            </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
            {!loggedIn && <> <Button LinkComponent={Link} to="/login" variant='contained' sx={{margin: 1,borderRadius:10}} color='warning'>Login</Button>
            <Button LinkComponent={Link} to="/login" variant='contained' sx={{margin: 1,borderRadius:10}} color='warning'>Signup</Button> </>}
            {loggedIn && <Button onClick={()=>dispatch(loginActions.logout())} LinkComponent={Link} to="/login" variant='contained' sx={{margin: 1,borderRadius:10}} color='warning'>Logout</Button>}

        </Box>
    </Toolbar>
  </AppBar>
}

export default Header