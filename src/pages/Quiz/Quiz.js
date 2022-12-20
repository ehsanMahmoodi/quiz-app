import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import "./Quiz.css";
import Questions from "../../components/Questions/Questions";
const Quiz = ({ setQuestions, questions, name, score, setCore }) => {
  const [options, setOptions] = useState("");
  const [currantQuestion, setCurrantQuestion] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currantQuestion]?.correct_answer,
          ...questions[currantQuestion]?.incorrect_answers,
        ])
    );
  }, [questions, currantQuestion]);
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <Box className={"quiz"}>
      <span className={"subtitle"}>Welcome , {name}</span>
      {questions ? (
        <>
          <Box className="quizInfo">
            <span>{questions[currantQuestion].category}</span>
            <span>Score : {score}</span>
          </Box>
          <Questions
            currantQuestion={currantQuestion}
            setCurrantQuestion={setCurrantQuestion}
            questions={questions}
            options={options}
            correct={questions[currantQuestion]?.correct_answer}
            score={score}
            setCore={setCore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress />
      )}
    </Box>
  );
};

export default Quiz;
