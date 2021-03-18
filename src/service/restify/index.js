import {Router} from 'restify-router'
import restify from 'restify'
import corsMiddleware from 'restify-cors-middleware'
import logger from 'morgan'

import { connectionMongo } from '../../datalayer/databases/mongodb'
import projectSettings from '../../datalayer/config/project'
import RouterManager from './router'
import {allowOrigins} from '../../utils'
import signale from 'signale'

const { restify: restifyConfig } = projectSettings

const router = new Router()

connectionMongo()

const server = restify.createServer({
  name: restifyConfig.name,
});

console.log(allowOrigins())

const cors = corsMiddleware({
  allowHeaders: ['X-XSRF-TOKEN'],
  credentials: false,
  exposeHeaders: [],
  origins: allowOrigins(),
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());
server.use(logger('dev'));
server.pre(cors.preflight);
server.use(cors.actual);

router.add('/api/v1', RouterManager);
router.applyRoutes(server);


server.listen(restifyConfig.port, () => {
  const launchDate = new Date();
  signale.success(`[KROWDY] server launch ${launchDate}`);
  signale.success(
    `Explore this api in : http://localhost:${restifyConfig.port}`
  );
})