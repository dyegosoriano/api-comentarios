import { Response, Request } from 'express'
import { getRepository } from 'typeorm'

import Comment from '../models/Comment'

class CommentController {
  async store(request: Request, response: Response) {
    const postId = request.params.id
    const { comment } = request.body

    const commentRepo = getRepository(Comment)

    try {
      const commentCreated = await commentRepo.save({ postId, comment })

      return response.json(commentCreated)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)

      return response
        .status(500)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }

  async show(request: Request, response: Response) {
    const postId = request.params.id

    const commentRepo = getRepository(Comment)

    try {
      const commentsForPost = await commentRepo.find({ where: { postId } })

      if (commentsForPost.length === 0) {
        return response.status(404).json({ error: '404 Not Found' })
      }

      return response.json(commentsForPost)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)

      return response
        .status(500)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }
}

export default new CommentController()
