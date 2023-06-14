import React from 'react'
import './Header.css'
import { TextField } from '@mui/material'

const Header = () => {
  return (
    <div className='headerContainer'>
      <span className='headerTitle'>The Greenhouse</span>
      <TextField 
        label='Search Plants'
        sx={{
        width:500
        }}

      />
    </div>
  )
}

export default Header