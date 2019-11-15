import React, { useEffect, useState } from 'react'

export const InitData = (initFunc) => {
  let [initFlag, setInit] = useState(false);
  useEffect(() => {
    console.log(initFunc)
    !initFlag && initFunc && initFunc();
    setInit(true)
    return () => { (false); }
  }, [initFlag]);
}
