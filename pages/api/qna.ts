import { NextApiHandler } from "next"
import { connection, getCollection } from "../../db"

const Qna: NextApiHandler = async (req, res) => {
  await connection
  const collection = getCollection()
  if (req.method === "GET") {
    return res.json(await collection.find().toArray())
  } else {
    const question = req.body.question
    const { insertedId } = await collection.insertOne({
      question,
      answered: false,
    })
    return res.json({
      _id: insertedId.toString(),
      question,
      answered: false,
    })
  }
}

export default Qna
