const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const productRoutes = require('./routes/products.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (_req, res) => {
  res.json({ ok: true, service: 'ecommerce-product-api' });
});

app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
