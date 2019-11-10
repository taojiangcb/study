import React from 'react';
import "./loading.scss"

export const Loading = (props) => {
  let mesc = "加载中";
  if (props.completed) {
    mesc = "已完成"
  }
  return (
    <div className="Loading">{mesc}</div>
  )
}