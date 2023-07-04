import { volunteers } from './volunteers/volunteers.js'

export const services = (app) => {
  app.configure(volunteers)

  // All services will be registered here
}
