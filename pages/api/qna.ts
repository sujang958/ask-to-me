import { NextApiHandler } from "next"
import { connection, getCollection } from "../../db"

const Qna: NextApiHandler = async (req, res) => {
  await connection
  const collection = getCollection()
  if (req.method === "GET") {
    return res.json(
      await collection
        .find("answered" in req.query ? { answered: true } : {})
        .toArray()
    )
  } else {
    if (!("question" in req.body)) return res.status(401)
    const question = req.body.question
    if (question.length < 1) return res.status(401)
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
