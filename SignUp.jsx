import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const SignUp = () => {
  return (
    <div>
      <Typography variant='h2'  >SignUp</Typography>
      <TextField variant='outlined' label='name'></TextField>
      <br /><br />
      <TextField variant='outlined' label='place'></TextField>
      <br /><br />
      <TextField variant='outlined' label='age'></TextField>
      <br /><br />
      <TextField variant='outlined' label='gender'></TextField>
      <br /><br />
      <TextField variant='outlined' label='email'></TextField>
      <br /><br />
      <TextField variant='outlined' label='password' type='password'></TextField>
      <br /><br />
      <Button variant='outlined'>submit</Button>
      

    </div>
  )
}

export default SignUp