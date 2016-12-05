const express=require('express');
const router=express.Router();

const mhsMiddleware=require('../middlewares/mahasiswa');

router.get('/',mhsMiddleware.getAll);
router.post('/',mhsMiddleware.add);
router.get('/:id',mhsMiddleware.getOne);
router.put('/:id',mhsMiddleware.update);
router.delete('/:id',mhsMiddleware.remove);

module.exports=router;