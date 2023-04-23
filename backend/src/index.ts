//Add Fastify
//Add database

import dotenv from "dotenv";
//import app from "./app.js";
import Fastify from "fastify";
dotenv.config();

const app=Fastify();
app.get("/hello3",async (req,res,) =>{
	return 'hello3';
});

app.listen({ port: 8080}, 
	(err, address) => {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		console.log(`Started server at ${address}`);
	}
);
