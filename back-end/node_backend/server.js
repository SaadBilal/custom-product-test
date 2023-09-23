const express = require('express');
const app = express();

const product = {
  id: 1,
  name: 'Sample Product',
  title: 'Product Title',
  price: 19.99,
  description: 'This is a sample product description.',
  image: 'sample-product-image.jpg',
};

app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params;
  if (productId === '1') {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
