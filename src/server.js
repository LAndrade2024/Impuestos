"use strict";

const Hapi = require( "hapi" );
const plugins = require( "./plugins" );
const routes = require( "./routes" );

const app = async config => {
const { host, port  } = config;

   // create an instance of hapi
   //const server = Hapi.server( { host, port } );

   const server = Hapi.server({
      port: 3300,
      host: '192.168.1.43',
      routes: {
          cors: {
              origin: ['*'] // an array of origins or 'ignore'           
          }
      }
  });

   // store the config for later use
   server.app.config = config;

   // register plugins
   await plugins.register( server );

   // register routes
   await routes.register( server );

   return server;
};

module.exports = app;