"use client"

import type { ChatQuestion } from "./chat-types"

interface ChatQuestionsProps {
  questions: ChatQuestion[]
  onQuestionSelect: (question: ChatQuestion) => void
  askedQuestions: Set<string>
}

export function ChatQuestions({ questions, onQuestionSelect, askedQuestions }: ChatQuestionsProps) {
  // Don't filter here - the parent component already sends the right questions
  if (questions.length === 0) {
    return (
      <div className="border-t border-gray-700 pt-4 mt-4">
        <div className="text-center py-4">
          <p className="text-sm text-gray-400 mb-2">🎉 You've explored all our topics!</p>
          <p className="text-xs text-gray-500">Feel free to contact us directly for more specific questions.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="border-t border-gray-700 pt-4 mt-4">
      <p className="text-xs text-gray-400 mb-3 px-1">Suggested questions:</p>
      <div className="space-y-2">
        {questions.map((question) => (
          <button
            key={question.id}
            onClick={() => onQuestionSelect(question)}
            className="w-full text-left p-3 text-sm text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors duration-200 border border-gray-700/50 hover:border-amber-500/30"
          >
            {question.question}
          </button>
        ))}
      </div>
    </div>
  )
}
