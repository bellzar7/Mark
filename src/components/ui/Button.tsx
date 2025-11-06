'use client'

import { ButtonHTMLAttributes, ReactNode, memo } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type ButtonVariant = 'standard' | 'reject' | 'header'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  icon?: string
  text?: ReactNode
  children?: ReactNode
}

const buttonVariants: Record<ButtonVariant, string> = {
  standard: `
    flex items-center justify-center shrink-0 rounded-[14px] bg-[#19191C]
    border-none text-white font-gilroy text-[15px] font-semibold leading-[17px]
    transition-all duration-200
    hover:bg-gradient-to-r hover:from-[#00E0FF] hover:to-[#0A2CE1]
    active:bg-gradient-to-r active:from-[#00E0FF] active:to-[#0A2CE1]
    disabled:bg-[#D0D5DD] disabled:cursor-not-allowed
  `,
  header: `
    flex items-center justify-center gap-2 shrink-0 rounded-[14px] bg-[#19191C]
    border-none text-white font-gilroy text-[15px] font-semibold leading-[17px]
    transition-all duration-200
    hover:bg-gradient-to-r hover:from-[#00E0FF] hover:to-[#0A2CE1]
    active:bg-gradient-to-r active:from-[#00E0FF] active:to-[#0A2CE1]
    disabled:bg-[#D0D5DD] disabled:cursor-not-allowed
  `,
  reject: `
    flex items-center justify-center shrink-0 rounded-[14px]
    border border-[#D0D5DD] bg-white shadow-sm
    text-[#19191C] font-gilroy text-[15px] font-semibold leading-[17px]
    transition-all duration-200
    hover:border-[#B7BCC5] hover:bg-[#F4F6F8]
    active:border-[#B7BCC5] active:bg-[#e8e8e8]
  `,
}

const buttonSizes: Record<ButtonSize, string> = {
  sm: 'h-[44px] px-4',
  md: 'h-[48px] px-5',
  lg: 'h-[52px] px-6',
}

const Button = memo<ButtonProps>(
  ({
    variant = 'standard',
    size = 'md',
    icon,
    text,
    children,
    className,
    disabled,
    ...props
  }) => {
    return (
      <button
        className={cn(
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={disabled}
        {...props}
      >
        {text || children}
        {icon && (
          <Image
            src={icon}
            alt="button icon"
            width={20}
            height={20}
            className="ml-2"
          />
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps, ButtonVariant, ButtonSize }
