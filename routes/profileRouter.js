const express = require('express');
const authorizationMiddleware = require('../middlewares/myAuth');
const {updateProfile, upload, deletePhoto} = require('../controllers/profileController');
const router = express.Router()


// router.post('/upload/:userId', upload, uploadPicture);
router.put('/update_profile', authorizationMiddleware, upload.single('picture'),  updateProfile)
router.delete('/delete_photo', authorizationMiddleware, deletePhoto)

// profileRouter.put('update_profile', upload.single('profile_pic'), updateProfile )

module.exports = router;
