import { Box, Button, MenuItem, TextField } from "@mui/material";
import "./Home.css";
import Categories from "../../data/Categories";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const Home = ({ name, setName, fetchQuestions }) => {
  const [categorie, setCategorie] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!categorie || !difficulty || !name) setError(true);
    else {
      setError(false);
      fetchQuestions(categorie, difficulty);
    }
  };

  return (
    <Box className={"content"}>
      <Box className={"settings"}>
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <Box className="settings_select">
          {error && <ErrorMessage>لطفا مقادیر را کامل پر کنید!</ErrorMessage>}
          <TextField
            sx={{
              marginBottom: 2,
            }}
            label={"Enter Your Name"}
            variant={"outlined"}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            sx={{
              marginBottom: 2,
            }}
            select
            label={"select category"}
            variant={"outlined"}
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
          >
            {Categories.map((categorieItem) => {
              return (
                <MenuItem
                  key={categorieItem.category}
                  value={categorieItem.value}
                >
                  {categorieItem.category}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            sx={{
              marginBottom: 2,
            }}
            select
            label={"Difficulty"}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <MenuItem key={"Easy"} value={"easy"}>
              Easy
            </MenuItem>
            <MenuItem key={"Medium"} value={"medium"}>
              Medium
            </MenuItem>
            <MenuItem key={"Hard"} value={"hard"}>
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant={"contained"}
            color={"primary"}
            size={"large"}
            onClick={handleSubmit}
          >
            Start
          </Button>
        </Box>
      </Box>
      <img
        src={"/assets/images/quiz.svg"}
        className={"banner"}
        alt="quiz image"
      />
    </Box>
  );
};

export default Home;
