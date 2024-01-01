function StartScreen({ numOfQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Quiz App</h2>
      <h3>{numOfQuestions} questions to test your React Mastery</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
