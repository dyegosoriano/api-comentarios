import dotenv from 'dotenv'
import app from './app'

dotenv.config()

const port = process.env.PORT || 3333

// notFound
app.use((request, response, next) => {
  const error = new Error('Not found')
  error.status = 404
  next(error)
})

// Catch all
app.use((error, request, response, next) => {
  response.status(error.status || 500)
  response.json({ error: error.message })
})

app.listen(port, console.log(`🚀  Server is running port: ${port}`))
