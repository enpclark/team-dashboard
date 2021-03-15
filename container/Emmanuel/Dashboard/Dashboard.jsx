import React from "react";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import useDate from "../../../hooks/useDate";

const useStyles = makeStyles(() => ({
  grid: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "grid",
    gridTemplateRows: "repeat( 100, 1vh)",
    gridTemplateColumns: "repeat(100, 1vw)",
    alignItems: "center",
    justifyContent: "center",
    background: "#FEAC5E  /* fallback for old browsers */",
    background:
      "-webkit-linear-gradient(to left, #4BC0C8, #C779D0, #FEAC5E)  /* Chrome 10-25, Safari 5.1-6 */",
    background:
      "linear-gradient(to left, #4BC0C8, #C779D0, #FEAC5E) /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */",
  },
  headingWrapper: {
    fontSize: "4rem",
    gridRow: "15 / 50",
    gridColumn: "10 / 40",
    textAlign: "left",
    // color: 'white',
    // lineHeight: 1.15,
    // // whiteSpace: 'nowrap',
    // width: '100%',
    // boxSizing: 'border-box',
    fontFamily: "serif",
    // border: '1px solid green',
  },
  heading: {
    color: "white",
    fontSize: "5rem",
    // border: '1px solid green',
    fontFamily: "serif",
  },
  greeting: {
    fontSize: "4rem",
  },
  name: {
    fontSize: "8rem",
    color: "white",
    // border: '1px solid green',
    lineHeight: 0.75,
    // textAlign: 'left',
    // gridRow: '30 / 35',
    // gridColumn: '10 / 30',
    // // whiteSpace: 'nowrap',
    // width: '100%',
    // boxSizing: 'border-box',
  },
  timeWrapper: {
    fontSize: "1rem",
    paddingTop: "4rem",
    paddingRight: "2rem",
    gridRow: "0 / 10",
    gridColumn: "90 / 101",
  },
  time: {
    color: "white",
    textAlign: "right",
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const dateTime = useDate();
  console.log(dateTime);
  return (
    <div className={classNames(classes.grid)}>
      <div className={classNames(classes.headingWrapper)}>
        <Typography className={classNames(classes.heading, classes.greeting)}>
          {dateTime.wish}
        </Typography>
        <Typography className={classNames(classes.heading, classes.name)}>
          Emmanuel
        </Typography>
      </div>
      <div className={classNames(classes.timeWrapper)}>
        <Typography className={classNames(classes.time)}>
          {dateTime.time}
        </Typography>
      </div>
    </div>
  );
}
