import { createMuiTheme } from "@material-ui/core/styles";

const blue = "#0B72B9";
const orange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${blue}`,
      orange: `${orange}`,
    },
    primary: {
      main: `${blue}`,
    },
    secondary: {
      main: `${orange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
});
