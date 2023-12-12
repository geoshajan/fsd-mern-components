import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography >MY APP</Typography>&nbsp;&nbsp;
          <Button variant='contained' color='error'>Home</Button>&nbsp;&nbsp;
          <Button variant='contained' color='error' >LogIn</Button>&nbsp;&nbsp;
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar