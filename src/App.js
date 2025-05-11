import React, { useState, useEffect } from "react";
import "./App.css";
import TimerDisplay from "./TimerDisplay";
import TimerButtons from "./TimerButton";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false); // 타이머 실행 여부 // 초기 상태이기 때문에 처음에는 false상태로 유지되어 클릭되면 true가 되어 돌아가는 것이다. 

  // 자동 증가 타이머
  useEffect(() => {    //약간 조건문 같은 style - 그래서 들어가서 if가 true이면 1초마다 시간이 증가하는 코드로 적혀있어 그렇게 수행되는 것이다.
    let interval = null;

    if (isRunning && seconds < 20) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1); // 1초마다 시간 증가
      }, 1000);
    }

    //20초가 되었을 때 멈추고 alert
      else if (seconds === 20) {
      setIsRunning(false);
      alert("20초가 지났습니다!");
    }

    // cleanup: 컴포넌트가 unmount되거나 다시 실행될 때 정리
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const handleStart = () => {
    setIsRunning(true);
    console.log("타이머 시작");
  };
  const handleStop = () => {
    setIsRunning(false);
    console.log("타이머 멈춤");
  };

  // 리셋 기능 함수
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
    console.log("타이머 리셋"); // 콘솔 로그 추가
  };

  return (
    <div className="container">
      <TimerDisplay seconds={seconds} />
      <TimerButtons onStart={handleStart} onStop={handleStop} onReset={handleReset} />
    </div>
  );
}

export default App;


//effect와 state 진짜 중요한 것이다. state는 새로고침을 해야 사용자 화면에 보이는 것이다.