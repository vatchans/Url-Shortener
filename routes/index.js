var express = require('express');
var router = express.Router();
const{mongodb,dbname,dburl}=require('../bin/Database/db.config')
const mongoose=require('mongoose')
const {Urlmodel}=require('../bin/Database/data.schema')
mongoose.connect(dburl,{
  useNewUrlParser: true,
  useUnifiedTopology: true,})

router.get('/', async(req, res)=>{
  let shortUrl=await Urlmodel.find()
  res.send(shortUrl);
});

router.post('/Shorturl',async(req,res)=>{
 try{
  const url=await Urlmodel.create({
    Fullurl:req.body.url
  })
  res.status(200).send("Sucess!!")
 }
 catch{
  res.status(500).send("Url not found Please provide a valid url")
 }
})
router.get("/:Shorturl", async (req, res) => {
  const Shorturl = req.params.Shorturl;

  const Actual_link = await Urlmodel.findOne( {Shorturl} );

  if (!Actual_link) {
    return res.status(400).send("error");
  }
  Actual_link.Clicks++
  Actual_link.save()
  res.redirect(Actual_link.Fullurl);})
  
module.exports = router;
