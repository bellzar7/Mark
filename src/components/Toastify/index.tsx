'use client'

interface ToastifyProps {
  type: 'pending' | 'success' | 'warning'
}

export function Toastify({ type }: ToastifyProps) {
  const config = {
    pending: {
      icon: '⏳',
      title: 'Відправка...',
      subtitle: 'Будь ласка, зачекайте',
    },
    success: {
      icon: '✅',
      title: 'Успішно!',
      subtitle: 'Ваша заявка відправлена',
    },
    warning: {
      icon: '⚠️',
      title: 'Помилка!',
      subtitle: 'Спробуйте пізніше',
    },
  }

  const { icon, title, subtitle } = config[type]

  return (
    <div className="flex items-center gap-3 md:gap-4">
      <div className="text-4xl">{icon}</div>
      <div className="flex flex-col gap-1">
        <div className="text-[#19191C] font-gilroy text-base md:text-xl font-medium leading-5">
          {title}
        </div>
        <div className="text-[#7E818B] font-gilroy text-xs md:text-base font-normal leading-tight">
          {subtitle}
        </div>
      </div>
    </div>
  )
}
