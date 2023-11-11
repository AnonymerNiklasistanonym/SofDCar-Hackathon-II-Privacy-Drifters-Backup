import React from 'react';
import { Typography, Container, List, Card, Box, CardContent, useTheme } from '@mui/material';

const DataCard = ({ title, description }) => {
  const theme = useTheme();

  return (
    <Box mb={4}>
      <Card sx={{ minWidth: 275, backgroundColor: theme.palette.background.paper }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const AuthServicePage = () => {
  const dataOthersCanSee = [
    { title: 'Your pseudonym', description: 'Description for Box 1' },
  ];

  const dataOf = [
    { title: 'Personal Data', description: 'We need personal data for legal uses (Your name & home address / Date of Birth)' },
    { title: 'Your rating', description: 'Description' },
    { title: 'Account Data', description: 'AccountID, Banned, Data hash' },
    { title: 'My pseudonyms', description: 'With this pseudonyms you can get the XYZ (welche rides / smart contracts)' }
  ];

  return (
    <Container component="main" maxWidth="md" style={{ marginTop: '140px', paddingBottom: '4rem' }}>

      <Box mb={8} style={{ border: '1px solid black', borderRadius: '20px', padding: '1rem 2rem' }}>
        <Typography color={'#3B4AE0'} variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
          What is the Auth Service for?
        </Typography>
        <Typography variant='p' component="div" sx={{ flexGrow: 1, color: 'grey' }}>
          The Auth Service is for signing in and signing up a user, after the the auth service everything is only handled by the users pseudonym, which also changes for each login
        </Typography>
      </Box>

      <div style={{ display: 'flex' }}>
        <Typography color={'#3B4AE0'} variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
          What the users can see about you
        </Typography>
      </div>

      <List>
        {dataOthersCanSee.map((item, index) => (
          <DataCard key={index} title={item.title} description={item.description} />
        ))}
      </List>

      <div style={{ display: 'flex' }}>
        <Typography color={'#3B4AE0'} variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
          What the Auth Service needs to know
        </Typography>
      </div>

      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-4px', right: '-16px', bottom: '-16px', left: '-16px', backgroundColor: '#000000', zIndex: 10, opacity: .7, borderRadius: '20px' }}>

        </div>
        <div style={{ position: 'absolute', top: '-4px', right: '-16px', bottom: '-16px', left: '-16px', zIndex: 99, opacity: 1, color: '#FFFFFF', fontWeight: 'bold', fontSize: '1.5rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ cursor: 'pointer' }}>Click to see all data</span>
        </div>

        <List style={{ filter: 'blur(4px)' }}>
          {dataOf.map((item, index) => (
            <DataCard key={index} title={item.title} description={item.description} />
          ))}
        </List>

      </div>
    </Container>
  );
};

export default AuthServicePage;