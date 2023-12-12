import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
      <Typography variant='h4'>Login</Typography>
      <TextField variant='standard' label='username'></TextField>
      <Button variant='outlined'>submit</Button>
      
    </div>
  )
}

export default Login