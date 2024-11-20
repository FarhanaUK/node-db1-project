const router = require('express').Router()

const md = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  try{
    res.json('get account')
  }
  catch(err){
    next({status: 422, message: 'this is horrible'})
  }
})

router.get('/:id', md.checkAccountId, (req, res, next) => {
  try{
res.json('get account')
  }
  catch(err){
    next(err)
  }
})

router.post('/', md.checkAccountPayload, md.checkAccountNameUnique,(req, res, next) => {
  try{
res.json('get account')
  }
  catch(err){
    next(err)
  }
})

router.put('/:id', md.checkAccountId, md.checkAccountNameUnique, md.checkAccountPayload,(req, res, next) => {
  try{
res.json('get account')
  }
  catch(err){
    next(err)
  }
});

router.delete('/:id', md.checkAccountId,(req, res, next) => {
  try{
res.json('get account')
  }
  catch(err){
    next(err)
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  console.error('Error caught by middleware:', err.message);
res.status(err.status || 500).json({
  message: err.message,
})
})

module.exports = router;
