import React from 'react';
import {Link }from 'react-router-dom';
import { Box, Container, Typography, Grid } from '@mui/material';

 const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        padding: '20px 0',
        marginTop: 'auto',   
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          {"In our shop you can buy electric equipment for yourself and use this things every day in  your life "}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="center" gutterBottom>
              Company Name
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Shoptech  
            </Typography>
          </Grid>

          {}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="center" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Email: contact@company.com
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Phone: +123456789
            </Typography>
          </Grid>

          { }
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" align="center" gutterBottom>
              Follow Us
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" >
            <Link  to={"https://www.instagram.com/bakser__/"}>Instagram</Link>| Twitter | Facebook
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;