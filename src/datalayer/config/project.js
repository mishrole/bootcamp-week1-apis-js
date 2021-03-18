export default {
    restify: {
      name   : process.env.APPLICATION_NAME || 'Backend Service',
      port   : process.env.PORT || 5000,
      version: process.env.APPLICATION_API_VERSION || 'none',
    },
  };
  
  