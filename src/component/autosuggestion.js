import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import API from "../api/cityapi"

const useStyles = makeStyles({
  root: {
    padding: '0px',
  },
});

export default function ComboBox(props) {
  const classes = useStyles();

  // const [citylist, setcitylist] = useState();

  // useEffect(() => {
  //   API
  //   .get(
  //     `citylist/city`
  //   )
  //   .then(({ data }) => {
  //     console.log(data.citylist2);
  //     setcitylist(data.citylist2);
  //     console.log(citylist);
  //   })
  // },[]);

  // console.log(props.listofcity);

  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.listofcity}
      getOptionLabel={(option) => option.city}
      className={classes.root}
      renderInput={(params) => <TextField {...params} variant="outlined" />}
    />
  );
}
