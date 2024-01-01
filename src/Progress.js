import { useQuiz } from "./context/QuizContext";

function Progeress() {
  const { index, numOfQuestions, points, maxPoints, answer } = useQuiz();
  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numOfQuestions}
      ></progress>
      <p>
        Question <strong>{index + 1}</strong>/{numOfQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoints} points
      </p>
    </header>
  );
}

export default Progeress;
