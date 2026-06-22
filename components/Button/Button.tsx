import React from 'react'
import Magnet from '../Animations/Magnet'

const buttonClassName =
  'font-montserrat border border-[#6D4C41] rounded-[10px] px-4 md:px-6 py-2 md:py-4 text-[#6D4C41] hover:bg-[#8A6C59] hover:text-white transition-all text-lg md:!text-[30px] font-medium cursor-pointer'

const Button = ({
  text,
  id = 'btn',
  className = '',
  href,
}: {
  text: string
  id?: string
  className?: string
  href?: string
}) => {
  const content = href ? (
    <a
      id={id}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${buttonClassName} inline-block ${className}`}
    >
      {text}
    </a>
  ) : (
    <button id={id} className={`${buttonClassName} ${className}`}>
      {text}
    </button>
  )

  return (
    <Magnet padding={50} disabled={false} magnetStrength={10}>
      {content}
    </Magnet>
  )
}

export default Button