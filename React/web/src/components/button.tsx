interface ButtonProps {
    text?: string
}

function Button(props: ButtonProps) {
  return <button className="text-amber-200 bg-violet-500 px-5 py-2 rounded-sm">{props.text || 'Enviar'}</button>
  
}

export default Button