import Link from "next/link"
import type { ChatMessage } from "./chat-types"

interface ChatMessageProps {
  message: ChatMessage
}

export function ChatMessageComponent({ message }: ChatMessageProps) {
  const isUser = message.type === "user"

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-[80%] px-4 py-3 rounded-2xl ${
          isUser
            ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black rounded-br-md"
            : "bg-gray-800 text-white rounded-bl-md"
        }`}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>

        {message.link && !isUser && (
          <div className="mt-3 pt-2 border-t border-gray-700">
            <Link
              href={message.link.href}
              className="inline-flex items-center px-3 py-1.5 bg-amber-500 hover:bg-amber-600 text-black text-xs font-medium rounded-full transition-colors duration-200"
            >
              {message.link.label}
              <svg className="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        <div className={`text-xs mt-2 opacity-70 ${isUser ? "text-black/70" : "text-white/70"}`}>
          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>
    </div>
  )
}
