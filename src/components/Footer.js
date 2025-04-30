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
          Make it used KaKao talk API and React, Material-UI
        </Typography>
      </StyledPaper>
    </div>
  );
};

export default Footer;
