import { X } from "lucide-preact"

type Props = {
  text: string,
  highlight: boolean,
}

export default function Card({text, highlight} : Props) {
  return (
    <div class={`${highlight ? 'bg-green-300': 'bg-blue'} flex flex-col justify-center relative shadow-lg rounded w-40 h-20  `}>
        
      <X class="absolute top-0 right-0" size={18} />
      <div className={` overflow-clip overflow-ellipsis mx-2`}>
        <span >{text}</span>
      </div>
    </div>
  )
}
