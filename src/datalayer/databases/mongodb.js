import mongoose from 'mongoose';

import connections from '../config/connection';

export const connectionMongo = () =>
  mongoose
    .connect(connections.mongo.default.uri, {
      autoReconnect     : true,
      keepAlive         : true,
      socketTimeoutMS   : 0,
      useCreateIndex    : true,
      useFindAndModify  : false,
      useNewUrlParser   : true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('[MONGO] Mongo is connect');
    })
    .catch(async (mongoError) => {
      try {
        const date = new Date();
        const formatDate = date.toISOString().slice(0, 19);
        console.log(`[${formatDate}] - ERROR: [${mongoError.message}]`);
        setTimeout(connectionMongo, 10000);
      } catch (error) {
        console.log('connectionMongo -> error', error);
      }
    });


// When successfully connected
mongoose.connection.on('connected', function() {
  console.log('[MONGO] Mongo prev connected');
});

// If the connection throws an error
mongoose.connection.on('error', function(err) {
  console.log('[MONGO] Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function() {
  console.log('[MONGO] Mongoose default connection disconnected');
});
