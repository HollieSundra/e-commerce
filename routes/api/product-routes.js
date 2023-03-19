const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// Get all products
router.get('/', async (req, res) => {
  try {
    const productsData = await Product.findAll({
      include: [
        { model: Category },
        { model: Tag, through: ProductTag },
      ],
    });
    res.status(200).json(productsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one product
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [
        { model: Category },
        { model: Tag, through: ProductTag },
      ],
    });
    if (!productData) {
      res.status(404).json({ message: 'No product found with that id.' });
      return;
    }
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new product
router.post('/', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    if (req.body.tagIds && req.body.tagIds.length) {
      const productTagIdArr = req.body.tagIds.map((tag_id) => {
        return { product_id: product.id, tag_id };
      });
      await ProductTag.bulkCreate(productTagIdArr);
    }
    const productData = await Product.findByPk(product.id, {
      include: [
        { model: Category },
        { model: Tag, through: ProductTag },
      ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update product by id
router.put('/:id', async (req, res) => {
  try {
    const updatedProductData = await Product.update(req.body, {
      where: { id: req.params.id },
    });
    if (!updatedProductData[0]) {
      res.status(404).json({ message: 'No product found with that id.' });
      return;
    }
    const productData = await Product.findByPk(req.params.id, {
      include: [
        { model: Category },
        { model: Tag, through: ProductTag },
      ],
    });
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete product by id
router.delete('/:id', async (req, res) => {
  try {
    const deletedProductData = await Product.destroy({
      where: { id: req.params.id },
    });
    if (!deletedProductData) {
      res.status(404).json({ message: 'No product found with that id.' });
      return;
    }
    res.status(200).json(deletedProductData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
