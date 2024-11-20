exports.checkAccountPayload = (req, res, next) => {
  const {name, budget } = req.body
 if(!name || !budget){
 return res.status(400).json({
    message: "name and budget are required"
  })
}
if(name.length < 3 || name.length > 100){
 return res.status(400).json({
  message: "name of account must be between 3 and 100"
  })
}
  if(typeof budget !== "number"){
   return res.status(400).json({
      message: "budget of account is too large or too small"
    })
  }
  if(budget < 0 || budget > 1000000){
   return res.status(400).json({
      message: "budget of account is too large or too small"
  })
  
  }
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
 console.log('middleware')
  next()
}

exports.checkAccountId = (req, res, next) => {
  console.log('middleware')
  next()
}

