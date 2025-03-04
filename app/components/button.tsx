import type { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="text-white font-heading px-5 h-12 w-1/2 mx-auto bg-black border-2 border-white font-semibold rounded-md cursor-pointer hover:bg-purple-950 transition-colors duration-300"
      {...props}
    />
  )
}
