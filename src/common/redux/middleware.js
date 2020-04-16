import { concat } from 'ramda'

// ----------------------------------------------
// middleware
// ----------------------------------------------

// ... dev middleware
const devMiddleware = []

// ... prod middleware
const commonMiddleware = []
const featureModuleMiddleware = []
const middleware = concat(commonMiddleware, featureModuleMiddleware)

export default __DEV__ ? concat(middleware, devMiddleware) : middleware
