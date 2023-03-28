const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

router.post(
  "/add",
  [
    //validations
    check("a", "Value 'A' is not a number").isNumeric(),
    check("b", "Value 'B' is not a number").isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Show error if validations failed
      return res.status(400).json({ errors: errors.array() });
    }
    const { a, b } = req.body;
    return res.status(200).send({ result: `${parseInt(a) + parseInt(b)}` });
  }
);
router.post(
  "/subtract",
  [
    //validations
    check("a", "Value 'A' is not a number").isNumeric(),
    check("b", "Value 'B' is not a number").isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Show error if validations failed
      return res.status(400).json({ errors: errors.array() });
    }
    const { a, b } = req.body;
    return res.status(200).send({ result: `${parseInt(a) - parseInt(b)}` });
  }
);
router.post(
  "/divide",
  [
    //validations
    check("a", "Value 'A' is not a number").isNumeric(),
    check("b", "Value 'B' is not a number").isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Show error if validations failed
      return res.status(400).json({ errors: errors.array() });
    }
    const { a, b } = req.body;
    return res.status(200).send({ result: `${parseInt(a) / parseInt(b)}` });
  }
);
router.post(
  "/multiply",
  [
    //validations
    check("a", "Value 'A' is not a number").isNumeric(),
    check("b", "Value 'B' is not a number").isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Show error if validations failed
      return res.status(400).json({ errors: errors.array() });
    }
    const { a, b } = req.body;
    return res.status(200).send({ result: `${parseInt(a) * parseInt(b)}` });
  }
);
module.exports = router;
