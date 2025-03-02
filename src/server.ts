import cookie from '@fastify/cookie'
import fastify from 'fastify'
import { env } from './env'
import { mealsRoutes } from './routes/mealsRoutes'
import { usersRoutes } from './routes/usersRoutes'

const app = fastify()

app.register(cookie)
app.register(usersRoutes, {
  prefix: '/users',
})

app.register(mealsRoutes, {
  prefix: '/meals',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
