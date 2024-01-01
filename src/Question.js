import { useQuiz } from "./context/QuizContext";

function Question() {
  const { questions, index, dispatch, answer } = useQuiz();
  const question = questions.at(index);
  const hasAnswered = answer !== null;

  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
            key={option}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered &&
              (index === question.correctOption ? "correct" : "wrong")
            }`}
            disabled={hasAnswered}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
