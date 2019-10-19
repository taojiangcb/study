### styled-components 

### react-transition-group

### redux && react-redux 的使用 

### combineReducers 整合拆分的reducer 
```
import {combineReducers} from 'redux-immutable';
import headerReducer from '../common/header/store/reducer'
/**整合拆分的reducer */
const reducer = combineReducers({ header:headerReducer })
export default reducer;
```

### immutable 的使用
```

const defaultState = fromJS({
    inpFocues: false,
})

export default (state = defaultState, action) => {
    console.log(JSON.stringify(action));
    if (action.type === ACTION.CHANGE_FOCUS) {
        return state.set('inpFocues',action.value);
    }
    return state;
}; 
```

### react-router-dom 的使用
```
- BrowserRouter Router

- Router
    - path:'/'
    - render = {()=><div>home</div>}
    - exact 完全匹配
```



### 活用css3
- 父子选择器
    - 父子间接选择器
    - 父子直接选择器
- 伪元素选择器
    - first-child
    - last-child
    - 属性选择器
  
### flex 布局
- content 包裹元素
  - flex-direction
    - flex-direction: row | row-reverse | column | column-reverse;
  - flex-wrap
    -   flex-wrap: nowrap | wrap | wrap-reverse;
  - flex-flow flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
    -   flex-flow: <flex-direction> <flex-wrap>;
  - justify-content justify-content属性定义了项目在主轴上的对齐方式。
    -   justify-content: flex-start | flex-end | center | space-between | space-around;
  - align-items align-items属性定义项目在交叉轴上如何对齐。(垂直对齐))
    - align-items: flex-start | flex-end | center | baseline | stretch;
  - align-content
    - align-content: flex-start | flex-end | center | space-between | space-around | stretch;

- item 子级元素
    - order
      -   order: <integer>; order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
    - flex-grow
      -   flex-grow: <number>; /* default 0 */ flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
    - flex-shrink
      -   flex-shrink: <number>; /* default 1 */ flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
    - flex-basis
      -   flex-basis: <length> | auto; /* default auto */ 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
    - flex 以上三个元素的合并
      -   flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    - align-self 自身覆盖 conent 元素的item-align 的属性可以以其他元素达到不一样的对齐方式
      -   align-self: auto | flex-start | flex-end | center | baseline | stretch;