import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IncognitoIcon from "@material-ui/icons/PermIdentity";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Rating from "@mui/lab/Rating";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "80%",
    height: "80%",
    displayflex: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem auto",
    padding: "0 1rem",
  },
  item: {
    textAlign: "center",
  },
  elevatedDiv: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
  },
}));

const SmartContractPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ marginTop: 300 }}>
      <Paper className={classes.elevatedDiv}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
          justifyContent="space-between"
        >
          <div>
            <div style={{ marginBottom: 10 }}>
              <Rating value={2.5} precision={0.5} readOnly />
            </div>
            <div>Driver's Rating</div>
          </div>
        </Grid>
        <Grid container spacing={3} alignItems="center" justify="center">
          <Grid item xs={12} sm={4} className={classes.item}>
            <DirectionsCarIcon fontSize="large" />
            <Typography variant="h6">Driver</Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.item}>
            <HandshakeIcon fontSize="large" />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.item}>
            <IncognitoIcon fontSize="large" />
            <Typography variant="h6">Rahul</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justify="center"
          justifyContent="space-between"
          marginTop="50px"
        >
          <div>
            <div style={{ marginBottom: 10 }}>
              <Rating value={2.5} precision={0.5} readOnly />
            </div>
            <div>Rahul's Rating</div>
          </div>
        </Grid>
      </Paper>
    </div>
  );
};

export default SmartContractPage;
