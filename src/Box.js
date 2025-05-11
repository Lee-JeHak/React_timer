//Box.js
import React from "react"; // react를 import한 것이다.
import "./App.css";  // css에서 적용된 걸 가져오겠다.

function Box(props) { // 여기 Box 위치랑   - ㄱ
  return (
       
      <div className="box">  Box1
       {props.name} </div>
     
  );
}

export default Box; // ㄱ과 default 다음의 box위치가 같아야 한다.