const express = require('express');
const Cardetails = require('../models/cardetails.model.js');

const router = express.Router();


router.post('',async function(req,res){
    try{
        const details = await Cardetails.create(req.body);
        return res.status(201).send(details);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
});


router.get("", async (req, res) => {
    try {
       
      const Cardetail = await Cardetails.find().lean().exec();
        
      return res.send(Cardetail);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.get("/:id", async (req, res) => {
    try {
       
      const Cardetail = await Cardetails.find({"_id": req.params.id}).lean().exec();
        
      return res.send(Cardetail);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });

  router.patch('/:id', async (req,res) => {
    try{
        
        const detail = await Cardetails.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
        }
            )
            .lean().exec();
        
        return res.send(detail);
    }
    catch(err){
        res.status(500).send({message : err.message});
    }
})

router.delete("/:id", async (req, res) => {
    try {
      const deleteCar = await Cardetails.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.send(deleteCar);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }); 

module.exports = router;