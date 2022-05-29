import { NextPage } from "next"
import { useState } from "react"
import { motion } from "framer-motion"
import { Qna, Screens } from "../typings"

const Home: NextPage = () => {
  const [currentScreen, setCurrentScreen] = useState<Screens>("ANSWERED")
  const [qnas, setQnas] = useState<Qna[]>([])

  return (
    <div className="flex min-h-screen w-full flex-col rounded-t-lg bg-slate-50">
      <header className="flex w-full flex-row items-center">
        <div
          className="relative flex-1 cursor-pointer py-4 text-center"
          onClick={() => setCurrentScreen("ANSWERED")}
        >
          <p className="text-2xl font-semibold">답변된 질문</p>
          {currentScreen === "ANSWERED" && (
            <motion.div
              layoutId="REPLY_HEADER"
              initial={false}
              className="absolute bottom-0 h-[2px] w-full bg-slate-500"
            ></motion.div>
          )}
        </div>
        <div
          className="relative flex-1 cursor-pointer py-4 text-center"
          onClick={() => setCurrentScreen("UNANSWERED")}
        >
          <p className="text-2xl font-semibold">답변되지 않1은 질문</p>
          {currentScreen === "UNANSWERED" && (
            <motion.div
              layoutId="REPLY_HEADER"
              initial={false}
              className="absolute bottom-0 h-[2px] w-full bg-slate-500"
            ></motion.div>
          )}
        </div>
      </header>
      <main className="flex flex-col py-6 px-4">
        {currentScreen === "ANSWERED" &&
          answeredQuestions.map((question, i) => (
            <div className="flex flex-col py-6 px-4" key={i}>
              <p className="text-3xl font-semibold">&gt; {question.question}</p>
              <p className="py-2 px-1 text-xl font-medium">{`< ${question.answer}`}</p>
              <p className="pt-2.5 text-sm text-slate-500">
                {new Date().toISOString()}
              </p>
            </div>
          ))}
        {currentScreen === "UNANSWERED" &&
          answeredQuestions.map((question, i) => (
            <div className="flex flex-col py-6 px-4" key={i}>
              <p className="text-3xl font-semibold">&gt; {question.question}</p>
            </div>
          ))}
      </main>
    </div>
  )
}

export default Home
