import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'
import { checkSessionIdExists } from '../middlewares/checkSessionIdExists'

export async function mealsRoutes(app: FastifyInstance) {
  // Criação de refeição
  app.post(
    '/',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const mealsBodySchema = z.object({
        name: z.string(),
        description: z.string(),
        isOnDiet: z.boolean(),
      })

      const { name, description, isOnDiet } = mealsBodySchema.parse(
        request.body
      )

      await knex('meals').insert({
        name,
        description,
        is_on_diet: isOnDiet,
        user_id: request.user?.id,
      })

      return reply.status(201).send()
    }
  )

  // Listagem de todas as refeições do usuário
  app.get(
    '/',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const meals = await knex('meals')
        .where({ user_id: request.user?.id })
        .orderBy('created_at', 'desc')

      return reply.send({ meals })
    }
  )
}
