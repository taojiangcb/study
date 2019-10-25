
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
export const Header = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br/>
      <Link to="/Login">Login</Link>
    </div>
  )
} 