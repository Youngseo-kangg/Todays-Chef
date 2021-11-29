const express = require('express');
const router = express.Router();
const { chefController } = require('../controllers');
const upload = require('../modules/multer');

router.get('/:id', chefController.cuisine.get);
router.get('/', chefController.chefId.get);
router.post('/', upload.single('file'), chefController.pdfFile.post);

module.exports = router;


{
    "data" : {
        {
            "chefInfo" : {

            },
            "courseInfo" : [
                {
                
                },
                {
                
                }
            ]
        }
    },
    "message" : "ok"
}