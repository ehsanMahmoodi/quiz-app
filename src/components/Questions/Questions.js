import { Box, Button } from "@mui/material";
import { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Questions.css";
import { useNavigate } from "react-router-dom";
const Questions = ({
  currantQuestion,
  correct,
  questions,
  options,
  score,
  setQuestions,
  setCurrantQuestion,
  setCore,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const handleSelected = (item) => {
    if (selected === item && selected === correct) {
      return "select";
    } else if (selected === item && selected !== correct) {
      return "wrong";
    } else if (item === correct) {
      return "select";
    }
  };
  const handleCheck = (item) => {
    setSelected(item);
    if (item === correct) setCore(score + 1);
    setError(false);
  };
  const navigate = useNavigate();
  const handleQuit = () => {
    navigate("/");
  };
  const handleNext = () => {
    if (currantQuestion > 8) {
      navigate("/result");
    } else if (selected) {
      setCurrantQuestion(currantQuestion + 1);
      setSelected();
    } else {
      setError("please select an option first");
    }
  };
  return (
    <Box className={"question"}>
      <h1>Question {currantQuestion + 1}</h1>
      <Box className="singleQuestion">
        <h2>{questions[currantQuestion].question}</h2>
        <Box className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((item) => (
              <button
                className={`singleOption ${selected && handleSelected(item)}`}
                disabled={selected}
                key={item}
                onClick={() => handleCheck(item)}
              >
                {item}
              </button>
            ))}
        </Box>
        <Box className="controls">
          <Button
            variant={"contained"}
            color={"secondary"}
            size={"large"}
            sx={{
              width: 185,
            }}
            onClick={handleQuit}
          >
            Quit
          </Button>
          <Button
            variant={"contained"}
            color={"primary"}
            size={"large"}
            sx={{
              width: 185,
            }}
            onClick={handleNext}
          >
            Next Question
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Questions;
