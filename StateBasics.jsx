import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
  // var name="geo"
  var[fname,setfname]=useState("geo")
  var [val,setVal]=useState()

  const changename=()=>{
    console.log("clicked")
    setfname(val)
  }

  const inputHandler=(e)=>{
    console.log(e.target.value)
    setVal(e.target.value)
  }
  return (
    <div>
      <Typography>My name is {fname}</Typography>
      <TextField label='Enter name' onChange={inputHandler} value={val} ></TextField><br /><br />
      <Button variant='contained' onClick={changename} >Change</Button>
    </div>
  )
}

export default StateBasics