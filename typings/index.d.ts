export type Screens = "ANSWERED" | "UNANSWERED"

export type Qna = AnsweredQna | UnAnsweredQna

export interface AnsweredQna {
  _id: string
  question: string
  answer: string
  answered: true
  answeredAt: string
}

export interface UnAnsweredQna {
  _id: string
  question: string
  answer: null
  answered: false
  answeredAt: null
}
