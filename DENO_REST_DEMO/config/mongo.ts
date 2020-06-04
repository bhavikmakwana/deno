import { init, MongoClient } from "https://deno.land/x/mongo@v0.7.0/mod.ts";

await init();

export class Mongo {
  public client: MongoClient;
  constructor(public url: string, public dbName: string) {
    this.url = url;
    this.dbName = dbName;
    this.client = {} as MongoClient;
  }

  connect() {
    const client = new MongoClient();
    client.connectWithUri(this.url);
    this.client = client;
  }

  get getDatabase() {
    return this.client.database(this.dbName);
  }
}

const dbName = Deno.env.get("DB_NAME") || "aksharPay";
const dbHostUrl = Deno.env.get("DB_HOST_URL") || "mongodb://localhost:27017";
const db = new Mongo(dbName, dbHostUrl);
db.connect();

export default db;
