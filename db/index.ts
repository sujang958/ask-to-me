import { MongoClient } from "mongodb"

const MongoDBClient = new MongoClient(
  process.env.DB_URI ?? ""
)

export const connection = MongoDBClient.connect()

export const getCollection = () => MongoDBClient.db("qna").collection("qnas")
