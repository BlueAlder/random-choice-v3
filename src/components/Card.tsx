type Props = {
  text: string,
  highlight: boolean,
}

export default function Card({text, highlight} : Props) {
  return (
    <div className={`${highlight ? 'bg-green-500': 'bg-blue'} shadow-lg rounded w-44 h-20 py-5 overflow-clip overflow-ellipsis `}>
      <span className="px-2">{text}</span>
    </div>
  )
}
