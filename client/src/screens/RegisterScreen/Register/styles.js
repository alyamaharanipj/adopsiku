import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  sub: {
    fontSize: 12,
  },
  otherAuthLink: {
    fontSize: 15,
    color: "black",
    textDecoration: "none",
  },
  link: {
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  alert: {
    display: "flex",
    flexDirection: "row",
    width: "95%",
  },
}));
