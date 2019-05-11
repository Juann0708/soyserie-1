const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const SALT_I = 10
const jwt = require('jsonwebtoken')
const {Serie} = require('../server/models/Serie')
const {Resena} = require('./models/resena')
app.use(express.urlencoded({extended: true}))
app.use(express.json())
const port = process.env.PORT || 3001

require('dotenv').config()

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`)
})

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true },(err) => {
    if(err) return err
    console.log("Conectado a MongoDB")
})

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/Series/all', (req,res) => {
    Serie.find({}, (err, series) => {
        if(err) return res.status(400).send(err)
        res.status(200).send(series)
    })
})

app.get("/series/:titulo", (req,res)=>{
    const idBuscar = req.params.titulo
    console.log(idBuscar)
    Serie.find({'titulo': idBuscar}).then(datos =>{
    res.send(datos)
    })
  })


app.post('/series/add', (req,res) => {
    const addserie =  new Serie(req.body)
    addserie.save((err,doc)=>{
        if(err) return res.json({succes: false, err})
        res.status(200).json({
            succes: true,
            addserie: doc
        })
    })
})


app.post('/soyserie/resena', (req, res) => {
    const resena = new Resena(req.body)
    resena.save((err, doc) => {
        if(err) return res.json({success: false, err})
        res.status(200).json({
            success: true,
            resena: doc
        })
    })
})

app.post("/soyserie/:idresena/borrar", (req,res)=>{
    const idBuscar = req.params.idresena
    console.log(idBuscar)
    Resena.findOneAndDelete({'idresena': idBuscar}).then(datos=>{
      res.send(datos)
    })
  })

  app.post("/soyserie/:idresena/actualizar", (req,res) =>{
    const idBuscar = req.params.idresena
    console.log(idBuscar)
    Resena.findOneAndReplace({'idresena': idBuscar}, req.body).then(datos=>{
        res.send(datos)
    })
  })

  

/*app.put('/:id',async(req,res) => {
    const updateSerie = new Serie(req.body)
    await Task.findByIdAndUpdate(req.body,updateSerie)
    res.json({succes:true})
})*/



app.get('/soyserie/resenas', (req, res) => {
    Resena.find({}, (err, resena) => { 
        if(err) return res.status(400).send(err)
        res.status(200).send(resena)
    })
})

app.get("/soyserie/resena/:idresena", (req,res)=>{
    const idBuscar = req.params.idresena
    console.log(idBuscar)
    Resena.find({'idresena': idBuscar}).then(datos =>{
    res.send(datos)
    })
  })


  app.get('/soyserie/resenas/articles', (req, res) => {
    let order = req.query.order ? req.query.order : 1
    let sortBy = req.query.sortBy ? req.query.sortBy : 'general'
    let limit = req.query.limit ? parseInt(req.query.limit) : 100
    
    Resena
    .find()
    .populate('resenas')    
    .sort([[sortBy, order]])
    .limit(limit)
    .exec((err, resenas) => {
        if(err) return res.status(400).send(err)
        res.send(resenas)
    })
})


