import React from 'react';
import { Button, Typography, Container, CssBaseline, Box, Grid } from '@mui/material';

const AuthServicePage = () => {
  // Dummy data for demonstration
  const dummyData = [
    { title: 'Box 1', description: 'Description for Box 1' },
    { title: 'Box 2', description: 'Description for Box 2' },
    { title: 'Box 3', description: 'Description for Box 3' },
    { title: 'Box 4', description: 'Description for Box 4' },
    { title: 'Box 5', description: 'Description for Box 5' },
    { title: 'Box 6', description: 'Description for Box 6' },
    { title: 'Box 7', description: 'Description for Box 7' },
  ];

  return (
    <Container component="main" maxWidth="md" style={{ marginTop: '180px' }}>
      <CssBaseline />
      <div>
        <Typography variant="h5" style={{fontSize:30, fontWeight: 'bold',}}>AuthServicePage</Typography>

        {/* Render 7 boxes in rows of 3 */}
        <Grid container spacing={2}>
          {dummyData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box m={2} p={2} border={1} borderColor="primary.main">
                {/* Customize the content based on your requirements */}
                <Typography variant="h6">{item.title}</Typography>
                <Typography>{item.description}</Typography>
                {/* Add more fields as needed */}
              </Box>
            </Grid>
          ))}
        </Grid>

        
      </div>
    </Container>
  );
};

export default AuthServicePage;


// import React, { useState, useEffect } from 'react';
// import { Button, Typography, Container, CssBaseline, Box } from '@mui/material';

// const AuthServicePage = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data from your backend API
//     const fetchData = async () => {
//       try {
//         const response = await fetch('your_backend_api_endpoint');
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Container component="main" maxWidth="md">
//       <CssBaseline />
//       <div>
//         <Typography variant="h5">AuthServicePage</Typography>

//         {/* Render data in boxes */}
//         {data.map((item, index) => (
//           <Box key={index} m={2} p={2} border={1} borderColor="primary.main">
//             {/* Customize the content based on your backend data structure */}
//             <Typography variant="h6">{item.title}</Typography>
//             <Typography>{item.description}</Typography>
//             {/* Add more fields as needed */}
//           </Box>
//         ))}

//         <Button variant="contained" color="primary">
//           My Material-UI Button
//         </Button>
//       </div>
//     </Container>
//   );
// };

// export default AuthServicePage;


// import React from 'react';
// import { Button, Typography, Container, CssBaseline } from '@mui/material';

// const AuthServicePage = () => {
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div>
//         <Typography variant="h5">AuthServicePage</Typography>
//         <Button variant="contained" color="primary">
//           My Material-UI Button
//         </Button>
//         {/* Add more Material-UI components as needed */}
//       </div>
//     </Container>
//   );
// };

// export default AuthServicePage;