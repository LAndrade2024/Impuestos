"use strict";

const config = require( "./config" );
const server = require( "./server" );

const startServer = async () => {
   try {
       // Crea una instancia en el servidor de aplicaciones
       //https://www.thepolyglotdeveloper.com/2017/11/cross-origin-resource-sharing-node-hapi-application/

       const config2 = {
        "host": "192.168.1.43", 
        "port": 3300,
        "routes": {
            "cors": {
                origin: ["*"],
                headers: ["Accept", "Content-Type"],
                additionalHeaders: ["X-Requested-With"]
            }
        }
        };
        // configuracion NUeva del servidor 
        //const app = await server( config2 );
        // configuracion antigua 
       const app = await server( config );

       // Levanta el server 
       await app.start();

       console.log( `Server corriendo en http://${ config.host }:${ config.port }...` );
   } catch ( err ) {
       console.log( "Error al levantar el server:", err );
   }
};

startServer(); 