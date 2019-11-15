### createStore.ts
```
  let currentReducer = reducer                          //当前的reducer
  let currentState = preloadedState as S                //store 初始化是的数据
  let currentListeners: (() => void)[] | null = []      //当前监听的派发列表
  let nextListeners = currentListeners                  
  let isDispatching = false

  ```

  这将创建一个currentlistener的浅拷贝，以便我们使用
  在调度时将nextlistener作为临时列表。
  这样可以防止用户调用时出现任何bug
  在发送过程中订阅/取消订阅。

  ```
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice()
    }
  }
  ```
当前的状态树
```
  function getState(): S {return currentState as S}
```

添加更改侦听器。它会在任何时候调用一个动作，
状态树的某些部分可能已经更改。你可能会
调用' getState() '来读取回调函数中的当前状态树。
你可以从一个变更监听器调用' dispatch() '，如下所示
说明:

1. 订阅将在每次调用dispatch()之前快照。
如果在调用侦听器时订阅或取消订阅，则执行以下操作
不会对当前正在进行的“dispatch()”产生任何影响。
然而，下一个' dispatch() '调用，不管嵌套与否，都将使用more
订阅列表的最新快照。

2. 侦听器不应该期望看到所有的状态更改，即状态
可能在嵌套的' dispatch() '之前多次更新
监听器被调用。但是，它保证所有的订阅者
在' dispatch() '启动之前注册的将被调用
在它退出时状态。
```
function subscribe(listener: () => void){
  if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.')
    }

    if (isDispatching) {
      throw new Error(
        'You may not call store.subscribe() while the reducer is executing. ' +
          'If you would like to be notified after the store has been updated, subscribe from a ' +
          'component and invoke store.getState() in the callback to access the latest state. ' +
          'See https://redux.js.org/api-reference/store#subscribelistener for more details.'
      )
    }

    let isSubscribed = true

    ensureCanMutateNextListeners()
    nextListeners.push(listener)

    //这里返回一个取消监听的方法。
    return function unsubscribe() {
      if (!isSubscribed) {
        return
      }

      if (isDispatching) {
        throw new Error(
          'You may not unsubscribe from a store listener while the reducer is executing. ' +
            'See https://redux.js.org/api-reference/store#subscribelistener for more details.'
        )
      }

      isSubscribed = false

      ensureCanMutateNextListeners()
      const index = nextListeners.indexOf(listener)
      nextListeners.splice(index, 1)
      currentListeners = null
    }
}
```