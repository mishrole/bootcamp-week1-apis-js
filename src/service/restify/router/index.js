import {Router} from 'restify-router'

import ProfileRouter from './profile.router'

const RouterManager = new Router()

RouterManager.add('/profile', ProfileRouter)

export default RouterManager
