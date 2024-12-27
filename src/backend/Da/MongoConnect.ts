import { Collection, MongoClient } from "npm:mongodb@6.1.0";
import { User } from "../dataObjects/User.ts";

const MONGO_URI = "mongodb://192.168.56.103:27017";
const DB_NAME = "daily-dash";

if (!MONGO_URI) {
  console.error("MongoConnect MongoDB URI is missing");
  Deno.exit(1);
}

const client = new MongoClient(MONGO_URI);

// connection block
try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
} catch (error: any) {
  console.error("Could not connect to DB");
  console.error(error.message);
  Deno.exit(1);
}

const db = client.db(DB_NAME);
const users: Collection<User> = db.collection("users");
const tasks: Collection = db.collection("tasks");

// closing block
async function close() {
  try {
    await client.close();
    console.log("Connection closed");
  } catch (e: any) {
    console.error("Error While Closing the connection");
    console.error(e.message);
    Deno.exit(1);
  }
}

Deno.addSignalListener("SIGINT", async () => await close());
export { close, db, tasks, users };
