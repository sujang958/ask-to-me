import { NextApiHandler } from "next"
import { connection, getCollection } from "../../db"

const Answered: NextApiHandler = async (req, res) => {
  await connection
  const collection = getCollection()
  return res.json(await collection.find({ answered: true }).toArray())
}

export default Answered
