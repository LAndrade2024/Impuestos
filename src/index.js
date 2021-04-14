"use strict";

const config = require( "./config" );
const server = require( "./server" );

const startServer = async () => {
   try {
       // Crea una instancia en el servidor de aplicaciones
       const app = await server( config );

       // Levanta el server 
       await app.start();

       console.log( `Server corriendo en http://${ config.host }:${ config.port }...` );
   } catch ( err ) {
       console.log( "Error al levantar el server:", err );
   }
};

startServer(); 