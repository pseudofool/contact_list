const express = require('express');
const router = express.Router();
const contactRouter = require('../controllers/contactController');
console.log('Router loaded');

router.get('/', contactRouter.getContact);
router.post('/create-contact', contactRouter.createContact);
router.get('/delete-contact', contactRouter.deleteContact);
router.get('/update-contact', contactRouter.updateContact);
router.get('/update-contact-form', contactRouter.updateContactForm);

module.exports = router;