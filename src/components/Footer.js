import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
}));

const StyledLink = styled("a")({
  textDecoration: "none",
});

const Footer = () => {
  return (
    <div>
      <StyledPaper elevation={0}>
        <Typography component="p">
          <StyledLink href="https://kakao-martin.netlify.app">
            링크
          </StyledLink>
        </Typography>
        <Typography component="p">
          카카오톡 API와 React, Material-UI로 만들었습니다.
        </Typography>
      </StyledPaper>
    </div>
  );
};

export default Footer;
