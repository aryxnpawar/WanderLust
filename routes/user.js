const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('GET for Users')
})
router.get('/:id',(req,res)=>{
    res.send('GET for Users id')
})
router.post('/',(req,res)=>{
    res.send('POST for Users')
})
router.delete('/:id',(req,res)=>{
    res.send('Delete for Users id')
})

module.exports = router;
