'use client'

import dynamic from 'next/dynamic'

const QuizPage = dynamic(() => import('../../Pages/QuizPage/QuizPage').then(mod => ({ default: mod.QuizPage })), {
  ssr: false,
})

export default function Quiz() {
  return <QuizPage />
}
