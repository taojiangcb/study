
import React from 'react';

import { Redirect } from 'react-router-dom'

export class Login extends React.Component {

  constructor(props) { super(props); }
  render() {
    return (
      <div>
        Login
        <Redirect to="/" />
      </div>
    )
  }
}