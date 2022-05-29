import { FC } from "react"

const Layout: FC<{ children: any }> = ({ children }) => {
  return (
    <div className="font-pretendard w-full min-h-screen flex flex-col items-center">
      <div className="max-w-3xl w-full flex flex-col">
        <header className="flex flex-col items-center py-12 px-6 w-full">
          <p className="text-3xl font-bold">ㅈ성훈한테 물어보기</p>
          <div className="py-6 px-2 w-full flex flex-col items-center">
            <textarea placeholder="질문할 내용을 입력하1세요" rows={4} className="outline-none border border-slate-300 rounded-lg min-h-[12rem] py-1.5 px-3 text-lg w-[45%]"></textarea>
            <button className="mt-8 text-lg text-white bg-violet-600 rounded-lg font-bold py-2 px-5">질1문하기</button>
          </div>
        </header>
        {children}
      </div>
    </div>
  )
}

export default Layout
