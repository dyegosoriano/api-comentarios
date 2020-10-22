import { Router } from 'express'

import CommentsController from './app/controllers/CommentsController'
import PostController from './app/controllers/PostController'

const routes = Router()

routes.get('/posts', PostController.index)
routes.get('/posts/:id', PostController.show)
routes.post('/posts', PostController.store)

routes.get('/posts/:id/comments', CommentsController.show)
routes.post('/posts/:id/comments', CommentsController.store)

export default routes
