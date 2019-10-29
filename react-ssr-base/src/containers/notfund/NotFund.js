
import React from 'react';


export class NotFund extends React.Component {


  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    this.props.staticContext && (this.props.staticContext.NOT_FUND = true)
    return (
      <div>
        Not Fund page 404
      </div>
    )
  }
}