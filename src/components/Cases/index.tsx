'use client'

import { useTranslation } from 'react-i18next'

export function Cases() {
  const { t } = useTranslation()

  return (
    <section id="cases" className="bg-gray-950 py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          {t('cases.title') || 'Our Cases'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-black p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
              <h3 className="text-2xl font-semibold text-white mb-3">
                Case Study {i}
              </h3>
              <p className="text-gray-400">Details about case {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
