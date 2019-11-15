import React, { Component, Fragment, useEffect, useState } from 'react'
import { connect } from 'react-redux';
class ScrollView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      loadComp: false
    };
    this.onPageLoadRef = this.onPageLoad.bind(this);
  }

  onPageLoad() {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.body.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let proLoadDis = 30;

    let { page } = this.state;
    let { onPageLoadFunc } = this.props;

    if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
      if (page < 3) {
        console.log('...onPageLoader ....');
        this.setState({
          ...this.state,
          page: this.state.page + 1
        })
        onPageLoadFunc && onPageLoadFunc(page);
      }
      else {
        this.setState({
          ...this.state,
          loadComp: true
        })
      }
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onPageLoadRef);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onPageLoadRef);
  }

  render() {
    return (
      <div>
        {this.props.children}
        {/* <Loading completed={this.state.loadComp} /> */}
      </div>
    )
  }
}

const mapStateToProps = prevState => {
  return prevState;
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ScrollView)