import {MongoClient} from "mongodb";
import dotenv from "dotenv"
dotenv.config();

const connectionString = process.env.MONGO_URL;
// mongodb database pswd Abdulla27 

const localString = "mongodb://127.0.0.1:27017/Docapp";
async function dbConnection(){
   try {
    const client = new MongoClient(connectionString);
    await client.connect();
    console.log("Database Connected");
    return client;
   } catch (error) {
    console.log("Error in connecting Database",error);
   }
}

export const client = await dbConnection();