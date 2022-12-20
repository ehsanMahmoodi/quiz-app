import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Result = ({ score, name }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "60vh",
        textAlign: "center",
      }}
    >
      <span style={{}}>Final Score : {score}</span>
      <Button
        variant={"contained"}
        color={"secondary"}
        sx={{
          alignSelf: "center",
          marginTop: 2,
        }}
        onClick={() => navigate("/")}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default Result;
