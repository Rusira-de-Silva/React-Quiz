import { useEffect } from "react";
import { useQuiz } from "./context/QuizContext";

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();
  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
      return function () {
        clearInterval(id);
      };
    },
    [dispatch]
  );

  const seconds = secondsRemaining % 60;
  const secondsStr = seconds < 10 ? `0${seconds}` : seconds;
  const minutes = Math.floor(secondsRemaining / 60);
  const minutesStr = minutes < 10 ? `0${minutes}` : minutes;
  const timeStr = `${minutesStr}:${secondsStr}`;
  return <div className="timer">{timeStr}</div>;
}

export default Timer;
