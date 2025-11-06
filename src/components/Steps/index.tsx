'use client'

import { useTranslation } from 'react-i18next'

export function Steps() {
  const { t } = useTranslation()

  return (
    <section className="bg-gray-950 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          {t('steps.title') || 'How We Work'}
        </h2>
        <div className="space-y-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                {i}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Step {i}
                </h3>
                <p className="text-gray-400">Description of step {i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
