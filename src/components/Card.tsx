import { X } from "lucide-preact"

export enum Highlight {
  None = 0,
  Potential,
  Selected
}

type Props = {
  text: string,
  highlight: Highlight,
  onDelete: () => void
}

export default function Card({text, highlight = Highlight.None, onDelete} : Props) {
  let bgClass = "bg-blue";
  switch(highlight) {
    case Highlight.None:
      bgClass = "bg-blue"
      break;
    case Highlight.Potential:
      bgClass = "bg-amber-400";
      break;
    case Highlight.Selected:
      bgClass = "bg-green-300"
      break;
  }

  return (
    <div class={`${bgClass}  flex flex-col justify-center relative shadow-lg rounded w-40 h-20  `}>
        
      <X onClick={onDelete} class="absolute top-0 right-0" color="#1f1f1f" size={18} />
      <div className={` overflow-clip overflow-ellipsis mx-2`}>
        <span >{text}</span>
      </div>
    </div>
  )
}
