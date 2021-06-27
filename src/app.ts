import express, { RequestHandler } from 'express'
import { router } from './routes'

const app = express()

app.use(express.json() as RequestHandler)
app.use(express.urlencoded({ extended: true }) as RequestHandler)
app.use(router)

export { app }