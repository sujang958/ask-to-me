import { FC } from "react"

const Layout: FC<{ children: any }> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center font-pretendard">
      <div className="flex w-full max-w-3xl flex-col">
        <header className="flex w-full flex-col items-center py-12 px-6">
          <p className="text-3xl font-bold">ㅈ성훈한테 물어보기</p>
          <div className="flex w-full flex-col items-center py-6 px-2">
            <textarea
              placeholder="질문할 내용을 입력하1세요"
              rows={4}
              className="min-h-[12rem] w-[45%] rounded-lg border border-slate-300 py-1.5 px-3 text-lg outline-none"
            ></textarea>
            <button className="mt-8 rounded-lg bg-violet-600 py-2 px-5 text-lg font-bold text-white">
              질1문하기
            </button>
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}

export default Layout
