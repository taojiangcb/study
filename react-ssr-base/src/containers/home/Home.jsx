
import React from 'react';
export class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div> 同构服务器路由 </div>
        <button onClick={(e) => { alert('再来一下'); }}> 点击一下 </button>
      </div>
    )
  }
}