import React, { useEffect, useRef } from 'react'

const UseRef = () => {

    const countValue = useRef(0);
    const divReference = useRef();
    const inputReference = useRef();

    function handleClick() {
        countValue.current++;

        console.log("count : ",countValue.current);
    }

    useEffect(() => {
        const getDivReference = divReference.current;

        console.log(getDivReference);
    },[]);

    useEffect(() => {
        inputReference.current.focus();
        console.log(inputReference.current);
    },[]);

    console.log(inputReference.current);

  return (
    <div>
        <h1>Use Ref Hook</h1>
        <p>Count: {countValue.current}</p>
        <button onClick={handleClick}>Click Me</button>
        <div ref={divReference} className='hello'>Hello World</div>
        <input ref={inputReference} type="text" placeholder='enter some value' />
    </div>
  )
}

export default UseRef