import { ReactNode } from "react"

interface IconButtonProps {
    children: ReactNode
}

function IconButton(props: IconButtonProps) {
  return (
    <button className="flex justify-between items-center px-5 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300">
      {props.children}
    </button>
  )
  
}

export default IconButton