const connection = require('express')
const port = 3000
const app = connection()
const dir = __dirname
const multer = require('multer')


//svar mysequelize = require('./config/database/connection')
//var usermodel = require('./model/model-data')

const path = require('path')






app.use(connection.static(path.join(__dirname,'res')))
app.set('views',__dirname+'/views')
app.set('view engine','ejs')

var bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))




var mystorage = multer.diskStorage({
  destination : function(req,file,cb){
    cb(null,'res/imageuploads')
  },

  filename : function(req,file,cb){
      cb(null,'img_')
    
   
  }
})

var upload = multer({
  storage : mystorage
})

var type = upload.single('userimage')



app.get('/',(req,res)=>{
  res.render('registration',{
    message:'Welcome to login Page'
  })
})

app.get('/registration',(req,res)=>{
  res.render('registration',{
    message:'Sign Up to get started'
  })

})




app.post('/registration',type,(req,res)=>{
  if(req.file== null && req.body.username ==""&& req.body.password == ""){
    res.render('registration',{message:'Please give proper input'})
  }else{
   res.status(200).json({
      'success':true 
   })
  }
  console.log(req.body.userimage)
  
 



})


app.post('/login',(req,res)=>{
  res.end(req.body.username)
  res.end(req.body.password)
})




app.listen(port,()=>{
  console.log('Server has started')
})
