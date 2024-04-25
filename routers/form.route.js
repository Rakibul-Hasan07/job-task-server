const express = require('express');
const { saveFormData, getFormData } = require('../Controllers/form.controler');
const router = express.Router();

router.post('/add-form-data', saveFormData)
router.get('/get-form-data', getFormData)
module.exports = router;