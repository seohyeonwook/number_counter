import { useState } from "react";
import CounterInput from "./counterInput";
import CountButton from "./CountButton";

function Counter() {
    const[ number, setNumber] = useState(0);//자동완성해서 위에 import띄워야해 상태변수에 0 녛음
  // "0"이거 넣으면 number가 string형이 된다 ()뭘넣냐에따라서 자료형 바뀜
  // useState = 0; 이거랑 위에랑 같음 초기화 하는거임

    const[ count, setCount] = useState(0);

  // const[ inputValue, setInputValue] = useState("0");// input은 항상 String 형이라 변환 해줘야함 아래 parseInt(inputValue)
  //setInputValue가 바뀌면 inputValue의 state가 바뀐다

  const handleOnIncrease = () => {
    setNumber(number + count);// 자기자신 + 하고 다시 setNumber에 대입하겠다
    

  } 
  const handleOnDecrease = () => {
   setNumber(number - count);
  }

  // const handleInputChange = (e) => {//아래 text에서 이벤트가 일어나면
  //   console.log(e);
  //   setInputValue(e.target.value);
  // }

    return(
        <>
        {/* <h1>{ number }</h1> 
        {/* jsx문법 = 리액트 코드안에서 html 태그를 사용하는 문법 */}
        {/* <input type="text" onChange={handleInputChange} value ={ inputValue }/> */}
        {/* input은 항상 끝에 / 넣어줘야해 */}
        {/*  onChange = value의 값이 바뀌면 동작하는 이벤트*/}
        {/* 입력할때마다 inputValue의 값이 바뀌고 */}
        {/* <button onClick={handleOnDecrease}>-</button> */}
        {/* 클래스 네임도 자동으로 만들어준다 */}
        {/* <button onClick={handleOnIncrease}>+</button> */} 

        <h1>{ number }</h1>
       
        <CounterInput setCount={ setCount } />
        <CountButton title= {" - "} onClick={ handleOnDecrease } /> 
        {/* components는 태그가 아니다 이벤트 안됨 */}
        <CountButton title= {" + "} onClick={ handleOnIncrease }/>
        </>
    );
}

export default Counter;