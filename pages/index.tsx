import { NextPage } from "next"
import { useState } from "react"
import { motion } from "framer-motion"

type Screens = "ANSWERED" | "UNANSWERED"

const Home: NextPage = () => {
  const [currentScreen, setCurrentScreen] = useState<Screens>("ANSWERED")

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
    </div>
  )
}

export default Home
