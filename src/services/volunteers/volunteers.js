import { VolunteersService, getOptions } from './volunteers.class.js'

export const volunteersPath = 'volunteers'
export const volunteersMethods = ['find']

export * from './volunteers.class.js'

// A configure function that registers the service and its hooks via `app.configure`
export const volunteers = (app) => {
  // Register our service on the Feathers application
  app.use(volunteersPath, new VolunteersService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: volunteersMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(volunteersPath).hooks({
    around: {
      all: []
    },
    before: {
      all: [],
      find: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}
