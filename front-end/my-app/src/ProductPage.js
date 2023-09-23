import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Card, CardContent, Button, Grid } from '@mui/material';

function ProductPage() {
  // Define a state variable to store product data
  const [product, setProduct] = useState({});

  useEffect(() => {
    // Fetch product data from your backend API
    // Replace this with your actual API endpoint
    fetch('https://650eba7f54d18aabfe996886.mockapi.io/products?id=1') // Assuming you have an API endpoint for fetching product with ID 1
      .then((response) => response.json())
      .then((data) => setProduct(data[0]))
      .catch((error) => console.error('Error fetching product data:', error));
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Product Page</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Card container spacing={2} >
            <CardContent>
              <Typography variant="h5">{product.name}</Typography>
              <Typography variant="subtitle1">{product.title}</Typography>
              <Typography variant="body1">Price: ${product.price}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default ProductPage;
