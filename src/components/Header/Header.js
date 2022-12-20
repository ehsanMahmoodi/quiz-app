import "./Header.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Box className={"header"}>
      <Link to={"/"} className={"title"}>
        Online Quiz
      </Link>
      <hr className={"divider"} />
    </Box>
  );
};

export default Header;
