const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all Tags to include associated product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      // pull associated product data
      include: [{ model: Product, ProductTag }],
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a Tag by id and include associated product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      // pull associated product data
      include: [{ model: Product, ProductTag }],
    })
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new Tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body)
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // create a new tag
});

// UPDATE an existing tag
router.put('/:id', async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a tag's name by its `id` value
});

// DELETE an existing tag
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
