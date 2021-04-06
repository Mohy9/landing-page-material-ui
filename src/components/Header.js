import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
//MUI Icons
import SortIcon from "@material-ui/icons/Sort";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    height: "100vh",
    fontFamily: "Nunito, sans-serif",
  },
  appbar: {
    background: "none",
    boxShadow: "none",
  },
  appbarTitle: {
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  title: {
    color: "#fff",
    fontSize: "3rem",
  },
  iconButton: {
    backgroundColor: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island</span>
          </h1>
          <IconButton className={classes.iconButton}>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h2 className={classes.title}>
            Welcome to <br /> My
            <span className={classes.colorText}>Island.</span>
          </h2>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton className={classes.iconButton}>
              <ArrowDownwardIcon className={classes.icon} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
