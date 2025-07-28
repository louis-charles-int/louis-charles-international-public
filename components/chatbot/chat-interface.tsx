"use client"

import { useEffect, useRef } from "react"
import type { ChatMessage, ChatQuestion } from "./chat-types"
import { ChatMessageComponent } from "./chat-message"
import { ChatQuestions } from "./chat-questions"
import { Icon } from "@/components/ui/icon"

interface ChatInterfaceProps {
  messages: ChatMessage[]
  availableQuestions: ChatQuestion[]
  askedQuestions: Set<string>
  onQuestionSelect: (question: ChatQuestion) => void
  onClose: () => void
  onMinimize: () => void
}

export function ChatInterface({
  messages,
  availableQuestions,
  askedQuestions,
  onQuestionSelect,
  onClose,
  onMinimize,
}: ChatInterfaceProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const messagesContainerRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 w-80 sm:w-96 h-[500px] bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl flex flex-col z-50 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900 rounded-t-2xl">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center">
            <Icon name="Bot" className="text-black" size={16} />
          </div>
          <div>
            <h3 className="text-white font-semibold text-sm">LCI QuickHelp</h3>
            <p className="text-green-400 text-xs">Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onMinimize}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Minimize chat"
          >
            <Icon name="ArrowLeft" size={16} />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <Icon name="X" size={16} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#4B5563 #1F2937" }}
      >
        {messages.length === 0 && (
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Bot" className="text-black" size={20} />
            </div>
            <h4 className="text-white font-medium mb-2">Welcome to LCI QuickHelp!</h4>
            <p className="text-gray-400 text-sm">
              I'm here to help you learn about Louis Charles International. Select a question below to get started.
            </p>
          </div>
        )}

        {messages.map((message) => (
          <ChatMessageComponent key={message.id} message={message} />
        ))}

        <div ref={messagesEndRef} />
      </div>

      {/* Questions */}
      <div className="p-4 bg-gray-900 rounded-b-2xl max-h-48 overflow-y-auto">
        <ChatQuestions
          questions={availableQuestions}
          onQuestionSelect={onQuestionSelect}
          askedQuestions={askedQuestions}
        />
      </div>
    </div>
  )
}
