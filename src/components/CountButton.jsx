import React from 'react';

function CountButton({ title, onClick }) {//props 매개변수가 들어와서 아래 .title 사용중 props는 객체 

    return (
       <button onClick={ onClick }>{ title }</button>// -와 + 가 들어올떄 서로 다르게 작동해야한다 그래서 위에 매개변수에 onClick 넣어줌
       // onClick 두개 서로 다름 뒤에껀 props임  카운터 밑에 onClick임  이름 맘대로 정해도 됨
       // props 컴포넌트한테 값을 전달해주기위해서 이름 마음대로 정할 수 있음
    );
}

export default CountButton;//reactjs code sni 다운로드  rsf 치면 자동완성




