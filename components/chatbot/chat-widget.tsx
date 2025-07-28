"use client"

import { useState, useCallback } from "react"
import type { ChatMessage, ChatQuestion, ChatState } from "./chat-types"
import { initialQuestions, getQuestionsByIds, chatQuestions } from "./chat-data"
import { ChatInterface } from "./chat-interface"
import { Icon } from "@/components/ui/icon"

export function ChatWidget() {
  const [chatState, setChatState] = useState<ChatState>({
    isOpen: false,
    messages: [],
    availableQuestions: initialQuestions,
    askedQuestions: new Set(),
  })

  const getSmartSuggestions = useCallback((currentQuestionId: string, askedQuestions: Set<string>) => {
    const currentQuestion = chatQuestions.find((q) => q.id === currentQuestionId)
    const suggestions: string[] = []

    // 1. First priority: Follow-up questions from current topic
    if (currentQuestion?.followUpQuestions) {
      const availableFollowUps = currentQuestion.followUpQuestions.filter((id) => !askedQuestions.has(id))
      suggestions.push(...availableFollowUps.slice(0, 2)) // Take max 2 follow-ups
    }

    // 2. Fill remaining slots with unasked questions from different categories
    if (suggestions.length < 3) {
      const categories = {
        services: ["services", "marketing", "ai-automation", "admin-support"],
        business: ["pricing", "timeline", "small-business", "customization", "partnership"],
        support: ["contact", "consultation", "support", "response-time", "security"],
        company: ["location", "experience", "why-dubai", "global-reach", "industries"],
        process: ["results", "consultation", "partnership"],
      }

      // Get all unasked questions
      const allUnasked = chatQuestions
        .map((q) => q.id)
        .filter((id) => !askedQuestions.has(id) && !suggestions.includes(id))

      // Shuffle and take what we need
      const shuffled = allUnasked.sort(() => Math.random() - 0.5)
      const needed = 3 - suggestions.length
      suggestions.push(...shuffled.slice(0, needed))
    }

    return suggestions.slice(0, 3)
  }, [])

  const handleQuestionSelect = useCallback(
    (question: ChatQuestion) => {
      const userMessage: ChatMessage = {
        id: `user-${Date.now()}`,
        type: "user",
        content: question.question,
        timestamp: new Date(),
      }

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        type: "bot",
        content: question.answer,
        timestamp: new Date(),
        link: question.link,
      }

      setChatState((prev) => {
        const newAskedQuestions = new Set(prev.askedQuestions)
        newAskedQuestions.add(question.id)

        // Get next suggestions
        const nextSuggestions = getSmartSuggestions(question.id, newAskedQuestions)

        return {
          ...prev,
          messages: [...prev.messages, userMessage, botMessage],
          availableQuestions: nextSuggestions,
          askedQuestions: newAskedQuestions,
        }
      })
    },
    [getSmartSuggestions],
  )

  const handleOpen = () => {
    setChatState((prev) => ({ ...prev, isOpen: true }))
  }

  const handleClose = () => {
    setChatState({
      isOpen: false,
      messages: [],
      availableQuestions: initialQuestions,
      askedQuestions: new Set(),
    })
  }

  const handleMinimize = () => {
    setChatState((prev) => ({ ...prev, isOpen: false }))
  }

  if (chatState.isOpen) {
    return (
      <ChatInterface
        messages={chatState.messages}
        availableQuestions={getQuestionsByIds(chatState.availableQuestions)}
        askedQuestions={chatState.askedQuestions}
        onQuestionSelect={handleQuestionSelect}
        onClose={handleClose}
        onMinimize={handleMinimize}
      />
    )
  }

  return (
    <button
      onClick={handleOpen}
      className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-40 group"
      aria-label="Open chat help"
    >
      <Icon name="Bot" size={24} className="group-hover:scale-110 transition-transform duration-200" />

      {/* Notification dot for new users */}
      <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
        <span className="text-white text-xs font-bold">!</span>
      </div>
    </button>
  )
}
