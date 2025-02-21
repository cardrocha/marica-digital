import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="font-heading px-5 h-12 w-1/2 mx-auto bg-transparent border-2 border-red-400 font-semibold rounded-md cursor-pointer hover:bg-red-500 hover:text-white transition-colors duration-300"
      {...props}
    />
  )
}