export interface ChatQuestion {
  id: string
  question: string
  answer: string
  link?: {
    label: string
    href: string
  }
  followUpQuestions?: string[]
}

export interface ChatMessage {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
  link?: {
    label: string
    href: string
  }
}

export interface ChatState {
  isOpen: boolean
  messages: ChatMessage[]
  availableQuestions: string[]
  askedQuestions: Set<string>
}
