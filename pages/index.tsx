import { NextPage } from "next"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Qna, Screens } from "../typings"

const Home: NextPage = () => {
  const [currentScreen, setCurrentScreen] = useState<Screens>("ANSWERED")
  const [isLoading, setLoading] = useState(false)
  const [qnas, setQnas] = useState<Qna[]>([])
  const [question, setQuestion] = useState("")
  const getQnas = async () => {
    setLoading(true)
    const res = await fetch("/api/qna")
    const json = await res.json()
    setQnas(json)
    setLoading(false)
  }
  const onQuestionButtonClick = async () => {
    await fetch("/api/qna", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      } as any,
      body: JSON.stringify({ question }),
    })
    await getQnas()
    alert("추가했습니다!")
  }
  useEffect(() => {
    getQnas()
  }, [])

  if (isLoading)
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center">
        <p className="text-5xl font-bold">로딩중이다 샌즈</p>
      </div>
    )

  return (
    <div className="flex min-h-screen w-full flex-col items-center font-pretendard">
      <div className="flex w-full max-w-3xl flex-col">
        <header className="flex w-full flex-col items-center py-12 px-6">
          <p className="text-3xl font-bold">ㅈ성훈한테 물어보기</p>
          <div className="flex w-full flex-col items-center py-6 px-2">
            <textarea
              onChange={({ currentTarget: { value } }) => setQuestion(value)}
              placeholder="질문할 내용을 입력하1세요"
              rows={4}
              className="min-h-[12rem] w-[80%] rounded-lg border border-slate-300 py-1.5 px-3 text-lg outline-none md:w-[45%]"
            ></textarea>
            <button
              className="mt-8 rounded-lg bg-violet-600 py-2 px-5 text-lg font-bold text-white"
              onClick={onQuestionButtonClick}
            >
              질1문하기
            </button>
          </div>
        </header>
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
              qnas
                .filter(({ answered }) => answered)
                .map((question, i) => (
                  <div className="flex flex-col py-6 px-4" key={i}>
                    <p className="text-3xl font-semibold">
                      &gt; {question.question}
                    </p>
                    <p className="py-2 px-1 text-xl font-medium">{`< ${question.answer}`}</p>
                    <p className="pt-2 text-sm text-slate-500">
                      {question.answeredAt}
                    </p>
                  </div>
                ))}
            {currentScreen === "UNANSWERED" &&
              qnas
                .filter(({ answered }) => !answered)
                .map((question, i) => (
                  <div className="flex flex-col py-6 px-4" key={i}>
                    <p className="text-3xl font-semibold">
                      &gt; {question.question}
                    </p>
                  </div>
                ))}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Home
