const router = require('express').Router();
const ctrl = require('../controllers/products.controller');

router.get('/', ctrl.getAll);      // GET /products   (+ ?category=Apparel)
router.get('/:id', ctrl.getById);  // GET /products/:id
router.post('/', ctrl.create);     // POST /products
router.put('/:id', ctrl.update);    // PUT /products/:id
router.delete('/:id', ctrl.remove); // DELETE /products/:id

module.exports = router;
