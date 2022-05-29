import { MongoClient } from "mongodb"

const MongoDBClient = new MongoClient(
  "mongodb://rw:gy26kyGbGrrvOCGx@cluster0-shard-00-00.aahcp.mongodb.net:27017,cluster0-shard-00-01.aahcp.mongodb.net:27017,cluster0-shard-00-02.aahcp.mongodb.net:27017/?ssl=true&replicaSet=atlas-qb8tfk-shard-0&authSource=admin&retryWrites=true&w=majority"
)

export const connection = MongoDBClient.connect()

export const getCollection = () => MongoDBClient.db("qna").collection("qnas")
