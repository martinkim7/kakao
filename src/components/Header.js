import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const MarginDiv = styled("div")(({ theme }) => ({
  margin: theme.spacing(1),
}));

const FlexTypography = styled(Typography)({
  flex: 1,
});

const Header = (props) => {
  return (
    <MarginDiv>
      <AppBar position="static">
        <Toolbar>
          <FlexTypography variant="h5" color="inherit">
            KaKao Talk Web
          </FlexTypography>
        </Toolbar>
      </AppBar>
    </MarginDiv>
  );
};

export default Header;
