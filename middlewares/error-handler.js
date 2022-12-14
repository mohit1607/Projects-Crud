const { CustomApiError } = require('../errors/customError')
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomApiError) {
    return res.status(err.statusCode).json({ msg: err.message })
  
  }
  return res.status(500).json({ msg: 'Something went wrong, please try again' }) // universal error handler for our application.
  
}

module.exports = errorHandlerMiddleware