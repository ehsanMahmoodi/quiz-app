import "./assets/css/App.css";
import { Box } from "@mui/material";
import { Header } from "./components";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, Quiz, Result } from "./pages";
import { useState } from "react";
import axios from "axios";
import { ScaleLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const fetchQuestions = async (category = "", difficulty = "") => {
    setLoading(true);
    const { data, status } = await axios({
      method: "get",
      url: `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`,
    });
    console.log(data);
    setQuestions(data?.results);
    setLoading(false);
    if (data?.results.length && status === 200) {
      navigate("/quiz");
    } else {
      toast.error(
        "Something went wrong please check your internet connection and try again"
      );
    }
  };
  return (
    <Box
      className={"app"}
      sx={{
        backgroundImage: "url(./assets/images/ques1.png)",
      }}
    >
      <ToastContainer />
      <Header />
      {loading && (
        <div
          style={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            background: "#ff000000",
            top: 0,
            left: 0,
            zIndex: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ScaleLoader color="#72b0ff" />
        </div>
      )}

      <Routes>
        <Route
          path={"/"}
          element={
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          }
        />
        <Route
          path={"/quiz"}
          element={
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setCore={setScore}
              setQuestions={setQuestions}
            />
          }
        />
        <Route
          path={"/result"}
          element={<Result score={score} name={name} />}
        />
      </Routes>
    </Box>
  );
};

export default App;
