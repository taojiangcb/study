import { HeaderWrapper, Logo, Nav, NavItem, Addtion, Button, SearchWapper, NavSearch } from "./style"

import React from 'react';

import { connect } from 'react-redux';
import { ACTION } from "../../store/action";


const Heander = (props) => {
    return (
        <HeaderWrapper>
            <Logo></Logo>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                <SearchWapper className={props.inpFocues ? "focused" : ""}>
                    <NavSearch
                        className="inputSerach"
                        onBlur={props.onInputOutFoucsHandler}
                        onFocus={props.onInputFocusHandler}>
                    </NavSearch>
                    <a className="icon" href="/"><i className="iconfont iconsousuo"></i></a>
                </SearchWapper>
                <NavItem className="right"> 登录 </NavItem>
                <NavItem className="right"> <i className="iconfont ddd iconAa"></i> </NavItem>
            </Nav>
            <Addtion>
                <Button className="reg">注册</Button>
                <Button className="writting"><i style={{ fontSize: "15px" }} className="iconfont iconweibiaoti1"></i>写作</Button>
            </Addtion>
        </HeaderWrapper>
    )
}

// class Heander extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
//             <HeaderWrapper>
//                 <Logo></Logo>
//                 <Nav>
//                     <NavItem className='left active'>首页</NavItem>
//                     <NavItem className='left'>下载App</NavItem>
//                     <SearchWapper className={this.props.inpFocues ? "focused" : ""}>
//                         <NavSearch
//                             className="inputSerach"
//                             onBlur={this.props.onInputOutFoucsHandler}
//                             onFocus={this.props.onInputFocusHandler}>
//                         </NavSearch>
//                         <a className="icon" href="/"><i className="iconfont iconsousuo"></i></a>
//                     </SearchWapper>
//                     <NavItem className="right"> 登录 </NavItem>
//                     <NavItem className="right"> <i className="iconfont ddd iconAa"></i> </NavItem>
//                 </Nav>
//                 <Addtion>
//                     <Button className="reg">注册</Button>
//                     <Button className="writting"><i style={{ fontSize: "15px" }} className="iconfont iconweibiaoti1"></i>写作</Button>
//                 </Addtion>
//             </HeaderWrapper>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return { inpFocues: state.inpFocues }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInputFocusHandler: function () {
            const action = { type: ACTION.CHANGE_FOCUS, value: true };
            dispatch(action);
        },
        onInputOutFoucsHandler: function () {
            const action = { type: ACTION.CHANGE_FOCUS, value: false };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Heander);