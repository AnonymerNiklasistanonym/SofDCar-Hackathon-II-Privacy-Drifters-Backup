import React, { useEffect, useState } from 'react'

const SecondPage = () => {

  const [count, setCount]=useState(0);

  const clickedOnSubmit = () => {
    setCount(count+1);
    console.log(count);
  }

  useEffect(() => {
    console.log('useEffect called', count);
  }, [count])
  return (
    <div>
      <form action="">
        <input type='text'></input>
      </form>
      <div>Value of the count {count}</div>
      <button onClick={clickedOnSubmit}>ClickOnMe</button>
    </div>
  )
}

export default SecondPage