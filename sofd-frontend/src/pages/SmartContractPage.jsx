import React from "react";
import { Grid, Typography, Paper, Box, Container } from "@material-ui/core";
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
    <Container component="main" maxWidth="md" style={{ marginTop: '140px' }}>

      <Box style={{ border: '1px solid black', borderRadius: '20px', padding: '1rem 2rem', marginBottom: '4rem' }}>
        <Typography style={{ color: '#3B4AE0' }} color={'#3B4AE0'} variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
          What is the Smart Contract for?
        </Typography>
        <Typography style={{ color: 'grey' }} variant='p' component="div" sx={{ flexGrow: 1, color: 'grey' }}>
          The smart contract outlines an agreement between a pseudonymized ride provider (Driver) and a pseudonymized ride requester (Passenger). Both parties, the ride provider and the requester, can provide feedback to each other.
        </Typography>
      </Box>

      <Paper >
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
            <Typography variant="h6">Ride provider</Typography>
            <Typography variant="p">fkuhkdfkdfh8euhiudf8his7ifaasd</Typography>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.item}>
            <HandshakeIcon fontSize="large" />
          </Grid>
          <Grid item xs={12} sm={4} className={classes.item}>
            <IncognitoIcon fontSize="large" />
            <Typography variant="h6">Ride requestor</Typography>
            <Typography variant="p">askdhal37dauhd8dhai2h8dhda8d2h</Typography>
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
    </Container>
  );
};

export default SmartContractPage;
