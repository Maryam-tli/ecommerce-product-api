const fs = require('fs');
const path = require('path');
const DATA_PATH = path.join(__dirname, '..', 'data', 'products.json');

function loadProducts() {
  return JSON.parse(fs.readFileSync(DATA_PATH, 'utf-8'));
}
function saveProducts(products) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(products, null, 2));
}

// GET /products  (+ ?category=Apparel)
exports.getAll = (req, res) => {
  const products = loadProducts();
  const { category } = req.query;

  let result = products;
  if (category) {
    const q = String(category).toLowerCase();
    result = products.filter(p => String(p.category).toLowerCase() === q);
  }
  res.json(result);
};

// GET /products/:id
exports.getById = (req, res) => {
  const id = Number(req.params.id);
  const products = loadProducts();
  const found = products.find(p => p.id === id);
  if (!found) return res.status(404).json({ message: 'Product not found' });
  res.json(found);
};

// POST /products
exports.create = (req, res) => {
  const { name, category, price } = req.body;

  if (!name || !category || typeof price !== 'number') {
    return res.status(400).json({
      message: 'Validation error',
      details: {
        name: 'required',
        category: 'required',
        price: 'required number'
      }
    });
  }

  const products = loadProducts();
  const nextId = (products.at(-1)?.id || 0) + 1;

  const newProduct = { id: nextId, name, category, price };
  products.push(newProduct);
  saveProducts(products);

  res.status(201).json(newProduct);
};
// PUT /products/:id  (ویرایش جزئی/کامل)
exports.update = (req, res) => {
  const id = Number(req.params.id);
  const products = loadProducts();
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).json({ message: 'Product not found' });

  const { name, category, price } = req.body;

  // اگر هیچ فیلدی ارسال نشده بود
  if (name === undefined && category === undefined && price === undefined) {
    return res.status(400).json({ message: 'Nothing to update' });
  }
  if (price !== undefined && typeof price !== 'number') {
    return res.status(400).json({ message: 'price must be a number' });
  }

  // merge
  const updated = {
    ...products[idx],
    ...(name !== undefined ? { name } : {}),
    ...(category !== undefined ? { category } : {}),
    ...(price !== undefined ? { price } : {}),
  };

  products[idx] = updated;
  saveProducts(products);
  res.json(updated);
};

// DELETE /products/:id
exports.remove = (req, res) => {
  const id = Number(req.params.id);
  const products = loadProducts();
  const idx = products.findIndex(p => p.id === id);
  if (idx === -1) return res.status(404).json({ message: 'Product not found' });

  const deleted = products[idx];
  products.splice(idx, 1);
  saveProducts(products);
  res.json({ message: 'Deleted', product: deleted });
};