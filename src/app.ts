import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { mealsRoutes } from './routes/mealsRoutes'
import { usersRoutes } from './routes/usersRoutes'

export const app = fastify()

app.register(cookie)
app.register(usersRoutes, {
  prefix: '/users',
})

app.register(mealsRoutes, {
  prefix: '/meals',
})
