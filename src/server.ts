import dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express'
import HttpException from './utils/HttpException'
import app from './app'

dotenv.config()

const port = process.env.PORT || 3333

// notFound
app.use((request: Request, response: Response, next: NextFunction) => {
  const error: any = new Error('Not found')
  error.status = 404
  next(error)
})

// Catch all
app.use(
  (
    error: HttpException,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    response.status(error.status || 500)
    response.json({ error: error.message })
  }
)

app.listen(port, () => console.log(`🚀  Server is running port: ${port}`))
