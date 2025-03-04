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

  // Listar uma refeição especifica
  app.get(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const idParams = z.object({
        id: z.string(),
      })

      const { id } = idParams.parse(request.params)

      const meal = await knex('meals')
        .where({
          user_id: request.user?.id,
        })
        .where({
          id,
        })
        .first()

      return reply.send({ meal })
    }
  )

  // Apagar uma refeição
  app.delete(
    '/:id',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const idParams = z.object({
        id: z.string(),
      })

      const { id } = idParams.parse(request.params)

      await knex('meals')
        .delete()
        .where({ user_id: request.user?.id })
        .where({ id })

      return reply.status(204).send()
    }
  )

  // Atualizar um registro
  app.put(
    '/:id',
    { preHandler: [checkSessionIdExists] },
    async (request, reply) => {
      const idParams = z.object({
        id: z.string(),
      })

      const { id } = idParams.parse(request.params)

      const bodySchema = z.object({
        name: z.string(),
        description: z.string(),
        isOnDiet: z.boolean(),
      })

      const { name, description, isOnDiet } = bodySchema.parse(request.body)

      await knex('meals')
        .where({ user_id: request.user?.id })
        .where({ id })
        .update({
          name,
          description,
          is_on_diet: isOnDiet,
        })
      return reply.send()
    }
  )
}
