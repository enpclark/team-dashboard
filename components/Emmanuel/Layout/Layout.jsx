import React from 'react';
import classNames from 'classnames';
import { makeStyles }  from  '@material-ui/core/styles';

const useStyles = makeStyles(()=> ({
  root: {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))


export default function Layout(props) {
  const {children} = props;
  const classes = useStyles();
  return (
    <div className={classNames(classes.root)}>
      {children}
    </div>
  )
}
