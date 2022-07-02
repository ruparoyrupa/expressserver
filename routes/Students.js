const express = require('express');
const router = express.Router();


const { getAllStudents , getSingleStudents , creatStudents , updateStudents , DeleteStudents } = require('../controllers/studentControllers')



// router.get('/' , getAllStudents);
// router.get('/:id' , getSingleStudents);
// router.post('/', creatStudents);
// router.put('/:id' , updateStudents);
// router.patch('/:id' , updateStudents);
// router.delete('/:id' , DeleteStudents);


router.route('/').get(getAllStudents).post(creatStudents);
router.route('/:id').get(getSingleStudents).put(updateStudents).patch(updateStudents).delete(DeleteStudents);



module.exports = router ;