const express = require('express');
const mongoose = require('mongoose');
const router  = express.Router();

const Burger = require('../models/Burger.model');
const createError = require('http-errors')
const jwt = require('jsonwebtoken')

const axios = require('axios').default;

const rand = function() {
    return Math.random().toString(36).substr(2);
};

const token = function() {
    return rand() + rand() + rand() + rand();
};


router.get('/', (req, res, next) => {
  res.send('index');
});

router.get('/test', (req, res, next) => {
  res.send('this is a test');
});

router.get('/getId', (req, res, next) => {
  Burger
  .find({})
  .sort({'id': -1})
  .then((r) => {
    res.send(r[0])
  })
  .catch((e) => {res.send(e)})
})

router.get('/getData', (req, res, next) => {
  Burger
  .find({})
  .sort({'date': -1})  
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
});

router.get('/getDataByNota', (req, res, next) => {
  Burger
  .find({})
  .sort({'nota': -1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByDate', (req, res, next) => {
  Burger
  .find({})
  .sort({'date': 1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByCarne', (req, res, next) => {
  Burger
  .find({})
  .sort({'carne': -1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByIngredientes', (req, res, next) => {
  Burger
  .find({})
  .sort({'ingredientes': -1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByPan', (req, res, next) => {
  Burger
  .find({})
  .sort({'pan': -1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByOriginalidad', (req, res, next) => {
  Burger
  .find({})
  .sort({'originalidad': -1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByProporcionalidad', (req, res, next) => {
  Burger
  .find({})
  .sort({'proporcionalidad': -1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByGuarnicion', (req, res, next) => {
  Burger
  .find({})
  .sort({'guarnicion': -1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByPrecio', (req, res, next) => {
  Burger
  .find({})
  .sort({'precio': -1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByUser/:user', (req, res, next) => {
  Burger
  .find({user: req.params.user})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByPlace/:place', (req, res, next) => {
  Burger
  .find({ "place": { "$regex": req.params.place, "$options": "i" } },)
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByPlace/', (req, res, next) => {
  Burger
  .find({})
  .sort({'date': -1})  
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByLocation/:location', (req, res, next) => {
  Burger
  .find({ "location": { "$regex": req.params.location, "$options": "i" } },)
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getTop/:number', (req, res, next) => {
  Burger
  .find({})
  .sort({'nota': -1})
  .limit(parseInt(req.params.number))
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataById/:id', (req, res, next) => {
  Burger
  .find({'_id': req.params.id})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByNotaInv', (req, res, next) => {
  Burger
  .find({})
  .sort({'nota': 1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByDateInv', (req, res, next) => {
  Burger
  .find({})
  .sort({'date': 1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByCarneInv', (req, res, next) => {
  Burger
  .find({})
  .sort({'carne': 1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByIngredientesInv', (req, res, next) => {
  Burger
  .find({})
  .sort({'ingredientes': 1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByPanInv', (req, res, next) => {
  Burger
  .find({})
  .sort({'pan': 1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByOriginalidadInv', (req, res, next) => {
  Burger
  .find({})
  .sort({'originalidad': 1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByProporcionalidadInv', (req, res, next) => {
  Burger
  .find({})
  .sort({'proporcionalidad': 1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByGuarnicionInv', (req, res, next) => {
  Burger
  .find({})
  .sort({'guarnicion': 1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.get('/getDataByPrecioInv', (req, res, next) => {
  Burger
  .find({})
  .sort({'precio': 1})
  .then((r) => {res.send(r)})
  .catch((e) => {res.send(e)})
})

router.post('/add', (req, res, next) => {

  const { id, date, place, user, location, picture, carne, ingredientes, pan, originalidad, proporcionalidad, guarnicion, precio, nota, comments } = req.body;

  Burger.create({
    'id': id,
    'date': date,
    'place': place,
    'user': user,
    'location': location,
    'picture': picture,
    'carne': carne,
    'ingredientes': ingredientes,
    'pan': pan,
    'originalidad': originalidad,
    'proporcionalidad': proporcionalidad,
    'guarnicion': guarnicion,
    'precio': precio,
    'nota': nota,
    'comments': comments
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
       console.log(err)
      res.json(err);
    });
})

router.get('/delete/:id', (req, res, next) => {
  Burger.findOneAndRemove({_id: req.params.id})
    .then(user => {
      res.json(user)
    })
    .catch(err => {
      res.json(err);
    });
});


router.post('/edit', (req, res, next) => {

  const { _id, id, date, place, user, location, picture, carne, ingredientes, pan, originalidad, proporcionalidad, guarnicion, precio, nota, comments } = req.body;

  Burger.findOneAndUpdate({ '_id': _id }, {
    'id': id,
    'date': date,
    'place': place,
    'user': user,
    'location': location,
    'picture': picture,
    'carne': carne,
    'ingredientes': ingredientes,
    'pan': pan,
    'originalidad': originalidad,
    'proporcionalidad': proporcionalidad,
    'guarnicion': guarnicion,
    'precio': precio,
    'nota': nota,
    'comments': comments
  },)
    .then(burger => {
      res.json(burger)
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
