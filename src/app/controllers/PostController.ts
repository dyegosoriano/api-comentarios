import { Request, Response } from 'express'
import { getRepository } from 'typeorm'

import Post from '../models/Post'

class PostController {
  async store(request: Request, response: Response) {
    const { message } = request.body
    const postRepo = getRepository(Post)

    try {
      const postCreated = await postRepo.save({ message })

      return response.json(postCreated)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)

      return response
        .status(500)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }

  async index(request: Request, response: Response) {
    const postRepo = getRepository(Post)

    try {
      const allPosts = await postRepo.find({ order: { id: 'ASC' } })

      return response.json(allPosts)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)

      return response
        .status(500)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }

  async show(request: Request, response: Response) {
    const { id } = request.params
    const postRepo = getRepository(Post)

    try {
      const post = await postRepo.findOne({ where: { id } })

      if (!post) {
        return response.status(404).json({ error: '404 Not Found' })
      }

      return response.json(post)
    } catch (error) {
      console.log(`error.message >>> ${error.message} <<<`)

      return response
        .status(500)
        .json({ error: `Sorry! There was an error on our server.` })
    }
  }
}

export default new PostController()
