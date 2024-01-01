import { useQuiz } from "./context/QuizContext";

function FinishedScreen() {
  const { points, maxPoints, highscore, dispatch } = useQuiz();
  return (
    <>
      <p className="result">
        You scored {points} points out of {maxPoints}.
      </p>
      <p className="highscore">Highscore : {highscore} </p>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="btn btn-ui"
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
