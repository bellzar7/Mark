'use client'

import { useTranslation } from 'react-i18next'

export function Advantages() {
  const { t } = useTranslation()

  return (
    <section className="bg-black py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          {t('advantages.title') || 'Our Advantages'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="text-center">
              <div className="text-5xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Advantage {i}
              </h3>
              <p className="text-gray-400">Description {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
