'use client'

import { useTranslation } from 'react-i18next'

export function Services() {
  const { t } = useTranslation()

  return (
    <section id="services" className="bg-black py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          {t('services.title') || 'Our Services'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-800 transition-colors">
              <h3 className="text-xl font-semibold text-white mb-3">
                Service {i}
              </h3>
              <p className="text-gray-400">Description of service {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
