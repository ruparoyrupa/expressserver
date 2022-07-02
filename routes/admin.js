const express = require('express');
const router = express.Router();

const { getAllAdmins, creatAdmins, getSingleAdmin, updateAdmin, deleteAdmin, adminProfile, adminHome } = require('../controllers/adminControllers');
const { adminLogin } = require('../controllers/authController');
const authCheak = require('../middleware/authMiddleware');

// Auth router

router.route('/profile').get( authCheak , adminProfile);
router.route('/home').get( authCheak , adminHome);
router.route('/login').post(adminLogin);

// Creat admin router

router.route('/').get(getAllAdmins).post(creatAdmins);
router.route('/:id').get(getSingleAdmin).put(updateAdmin).patch(updateAdmin).delete(deleteAdmin);




module.exports = router;