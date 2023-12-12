import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseE = () => {
  var [name,setName]=useState()
  
  const changehname=()=>{
    setName("home")
  }

  const changecname=()=>{
    setName("contact")
  }

  const changegname=()=>{
    setName("gallery")
  }
  useEffect(()=>{
    changehname()
  },[])

  return (
    <div>
      <Typography>welcome to {name}</Typography>&nbsp;
      <Button onClick={changehname}>Home</Button>&nbsp;
      <Button onClick={changecname}>contact</Button>&nbsp;
      <Button onClick={changegname}>gallery</Button>
    </div>
  )
}

export default UseE